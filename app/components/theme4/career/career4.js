/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import { useParams } from 'next/navigation';
import { useAction, useFetch } from '@/app/helper/hooks';
import { createApplyJob, getPublicJobs, singlePDFUpload } from '@/app/helper/backend';
import FormInput from '@/app/components/form/input';
import UploadFileInput from '@/app/components/form/UploadFileInput';
import CommonBanner from '../../common/commonBanner';
import { columnFormatter } from '@/app/helper/utils';

const CareersDetailsPage4 = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [jobData, getJobData] = useFetch(getPublicJobs, {}, false);
  const params = useParams();
  const { _id } = params;

  useEffect(() => {
    getJobData({ _id: _id });
  }, [_id]);

  const handleSubmit = async (value) => {
    let resume = '';
    let cover_latter = '';

    if (value?.resume?.[0]?.originFileObj) {
      const { data } = await singlePDFUpload({
        pdf: value.resume[0].originFileObj,
        file_name: "resume",
      });
      resume = data || "";
    } else {
      resume = value?.resume?.[0]?.url || "";
    }

    if (value?.cover_latter?.[0]?.originFileObj) {
      const { data } = await singlePDFUpload({
        pdf: value.cover_latter[0].originFileObj,
        file_name: "cover_latter",
      });
      cover_latter = data || "";
    } else {
      cover_latter = value?.cover_latter?.[0]?.url || "";
    }

    const payload = {
      ...value,
      job: _id,
      resume,
      cover_latter,
    };

    setLoading(true);
    useAction(createApplyJob, { body: payload });
    setLoading(false);
    form.resetFields();
  };

  return (
    <div>
      <CommonBanner title="Career" link="/careers" subtitle={columnFormatter(jobData?.title)} />
      <div className="2xl:py-[150px] xl:py-[120px] lg:py-[100px] md:py-20 sm:py-16 py-12 agency-container">
        <div className="2xl:mt-[140px] xl:mt-[110px] lg:mt-[100px] md:mt-20 sm:mt-16 mt-12">
          <h3 className="heading-2 !font-lexend text-primary">Apply to job</h3>
          <Form className="theme5" layout="vertical" onFinish={handleSubmit} form={form}>
            <div className="xl:p-10 lg:p-8 md:p-6 sm:p-5 p-4 xl:mt-8 lg:mt-7 md:mt-5 mt-4 border border-[#EBEDF9]/20 bg-[#ECFDF4] rounded-[10px] lg:rounded-[20px]">
              <div>
                <h4 className="heading-3 !font-lexend font-semibold text-primary lg:pb-6 md:pb-5 pb-4 border-b border-[#EBEDF9]/20">Personal Information</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:gap-8 lg:gap-6 gap-3 mt-5">
                  <FormInput label="Full Name" name="full_name" placeholder="Enter your name" required className="w-full p-2 sm:p-3 xl:p-4 theme4 rounded text-[#333] focus:outline-primary" />
                  <FormInput label="Email" name="email" isEmail type="email" placeholder="Enter your email" required className="w-full p-2 sm:p-3 xl:p-4 theme4 rounded text-[#333] focus:outline-primary" />
                  <FormInput label="Address" name="address" placeholder="Enter your Address" required className="w-full p-2 sm:p-3 xl:p-4 theme4 rounded text-[#333] focus:outline-primary" />
                  <FormInput label="Phone Number" name="phone" type="number" placeholder="Enter your Phone Number" required className="w-full p-2 sm:p-3 xl:p-4 theme4 rounded text-[#333] focus:outline-primary" />
                </div>
              </div>

              <div className="xl:mt-5 lg:mt-4 md:mt-4 mt-2">
                <h4 className="heading-3 !font-lexend font-semibold text-primary lg:pb-6 md:pb-5 pb-4 border-b border-[#EBEDF9]/20">Online Profile</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:gap-8 lg:gap-6 gap-3 mt-5">
                  <FormInput label="Linkedin Profile" name="linkedin" placeholder="Enter your Linkedin Profile Link" required className="w-full p-2 sm:p-3 xl:p-4 theme4 rounded text-[#333] focus:outline-primary" />
                  {/* <FormInput label="GitHub" name="github" placeholder="Enter your GitHub Profile" required className="w-full p-2 sm:p-3 xl:p-4 theme4 rounded text-[#333] focus:outline-primary" /> */}
                </div>
              </div>

              <div className="xl:mt-5 lg:mt-4 md:mt-4 mt-2">
                <h4 className="heading-3 !font-lexend font-semibold text-primary lg:pb-6 md:pb-5 pb-4 border-b border-[#EBEDF9]/20">Experience</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:gap-8 lg:gap-6 gap-3 mt-5">
                  <FormInput label="Year of Experience" type="number" name="experience" placeholder="Example: 3, 4, 5" required className="w-full p-2 sm:p-3 xl:p-4 theme4 rounded text-[#333] focus:outline-primary" />
                  <FormInput label="Company Name" name="companyName" placeholder="Enter your Previous Company Name" required className="w-full p-2 sm:p-3 xl:p-4 theme4 rounded text-[#333] focus:outline-primary" />
                </div>
              </div>

              <div className="xl:mt-5 lg:mt-4 md:mt-4 mt-2">
                <h4 className="heading-3 !font-lexend font-semibold text-primary lg:pb-6 md:pb-5 pb-4 border-b border-[#EBEDF9]/20">Educational Information</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:gap-8 lg:gap-6 gap-3 mt-5">
                  <FormInput label="Highest Education Level" name="education" placeholder="Example: B.Sc or M.Sc or Phd" required className="w-full p-2 sm:p-3 xl:p-4 theme4 rounded text-[#333] focus:outline-primary" />
                  <FormInput label="University/College Name" name="university" placeholder="Enter University/College Name" required className="w-full p-2 sm:p-3 xl:p-4 theme4 rounded text-[#333] focus:outline-primary" />
                </div>
              </div>

              <div className="xl:mt-5 lg:mt-4 md:mt-4 mt-2">
                <h4 className="heading-3 !font-lexend font-semibold text-primary lg:pb-6 md:pb-5 pb-4 border-b border-[#EBEDF9]/20">Additional Information</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:gap-8 lg:gap-6 gap-3 mt-5">
                  <div className="file-upload-theme4">
                    <UploadFileInput pdf name="resume" label="Resume" placeholder="Upload your Resume" required />
                  </div>
                  <div className="file-upload-theme4">
                    <UploadFileInput pdf name="cover_latter" label="Cover Letter" placeholder="Upload your Cover Letter" required />
                  </div>
                </div>
              </div>
            </div>
            <button className="xl:mt-8 lg:mt-7 md:mt-6 sm:mt-5 mt-4 common-btn bg-primary text-white !rounded">Submit</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CareersDetailsPage4;
