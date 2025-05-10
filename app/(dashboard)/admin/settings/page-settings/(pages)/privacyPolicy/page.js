'use client'
import React, { useEffect, useState } from 'react';
import { Card, Form } from 'antd';
import { useI18n } from '@/app/contexts/i18n';
import { fetchPageContent, postPageContent, updatePageContent } from '@/app/helper/backend';
import { Loader } from '@/app/(dashboard)/components/common/loader';
import FormInput from '@/app/components/form/input';
import JodiEditor from '@/app/components/form/jodiEditor';
import Button from '@/app/(dashboard)/components/common/button';
import { useAction, useFetch } from '@/app/helper/hooks';
import { noSelected } from '@/app/helper/utils';
;

const PrivacyPolicy = () => {
    const i18n = useI18n();
    const { languages, langCode } = i18n;
    const [form] = Form.useForm();
    const [lang, setLang] = useState(langCode);
    const [data, getData, { loading }] = useFetch(fetchPageContent, {}, false);
    const [submitLoading, setSubmitLoading] = useState(false)
    const [selectedLang, setSelectedLang] = useState(langCode);

    useEffect(() => {
        setSelectedLang(langCode);
      }, [langCode]);
    
      useEffect(() => {
        if (lang) {
          getData({ langCode: lang, slug: "privacy_policy" });
        }
      }, [lang]);
    
      useEffect(() => {
        if (data?.content) {
          const { title, description } = data.content;
    
          // Set the form values
          form.setFieldsValue({
            title,
            description,
          });
        }
      }, [data, form]);
    
      const handleSubmit = async (values) => {
        setSubmitLoading(true);
    
        const payload = {
          body: {
            _id: data._id, // Using form values (_id) here
            slug: "privacy_policy",
            content: {
              title: values.title,
              description: languages.reduce((acc, l) => {
                acc[l.code] = values.description[l.code] || "";
                return acc;
              }, {}),
            },
          },
        };
    
        await useAction(
          updatePageContent,  // Use PUT request for updating the data
          payload,
          () => {
            getData({ lang: selectedLang, slug: "privacy_policy" });
            setSubmitLoading(false);
          },
          setSubmitLoading
        );
      };
    
      return (
        <div className="w-full overflow-x-auto mb-6 dashboardModal">
          <div className="border-2 border-[#1c2c52] rounded">
            <div className="flex justify-between px-6 py-4 items-center">
              <h1 className="text-[#C7D1DA] text-3xl">
                {i18n?.t("Privacy Policy")}
              </h1>
            </div>
    
            <div className="flex justify-start flex-wrap gap-3 my-4 mx-6">
              {languages?.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setSelectedLang(l.code)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                    l.code === selectedLang
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {l.name}
                </button>
              ))}
            </div>
    
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <div className="rounded mb-4 px-6 pb-5">
                <FormInput
                  label="Title"
                  name="title"
                  required
                  placeholder="Privacy Policy"
                  className="w-full rounded bg-transparent p-3 dashinput"
                />
    
                {languages?.map((l) => (
                  <div
                    key={l.code}
                    style={{ display: l.code === selectedLang ? "block" : "none" }}
                  >
                    <JodiEditor
                      name={["description", l.code]}
                      label={i18n?.t("Description")}
                      className="w-full rounded bg-transparent p-3 dashinput"
                      required
                      value={form.getFieldValue(["description", l.code]) || ""}
                      onChange={(newContent) =>
                        form.setFieldValue(["description", l.code], newContent)
                      }
                    />
                  </div>
                ))}
    
                <Button
                  type="submit"
                  onClick={() => noSelected({ form, setSelectedLang })}
                  className="mt-2.5"
                  loading={submitLoading}
                >
                  {i18n.t("Submit")}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      );
};

export default PrivacyPolicy;