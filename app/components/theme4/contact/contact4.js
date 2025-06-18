/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import FormInput from "@/app/components/form/input";
import Banner from "@/app/components/site/common/component/Banner";
import { Form } from "antd";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import { useAction, useFetch } from "@/app/helper/hooks";
import { createContact, fetchPageContent, fetchPublicSettings } from "@/app/helper/backend";
import { columnFormatter } from "@/app/helper/utils";
import Button from "@/app/(dashboard)/components/common/button";
import CommonBanner from "../../common/commonBanner";

const ContactPage4 = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [data, getData] = useFetch(fetchPageContent, {}, false);
  const [setting] = useFetch(fetchPublicSettings);
  useEffect(() => {
    getData({ slug: "contact_us" });
  }, []);
  const handleSubmit = async (values) => {
    setLoading(true);
    await useAction(createContact, { body: values });
    form.resetFields();
    setLoading(false);
  };
  return (
    <div className="">
      <CommonBanner title="Contact" textTitle="text-primary" />
      <div className="lg:py-[100px] md:py-20 sm:py-16 py-12 agency-container">
        <div className="agency-container relative bg-[#FEF9E1] border-[1px] border-[#E8EAE8] sm:p-10 p-4 rounded-[20px]">
          <div className="flex flex-col sm:flex-row xl:gap-8 lg:gap-7 md:gap-6 gap-5">
            <div className="w-full sm:w-[50%] lg:w-[60%] xl:w-[65%] ">
              <Form
                className="xl:mt-12 lg:mt-10 md:mt-6 mt-5 theme5"
                layout="vertical"
                onFinish={handleSubmit}
                form={form}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:gap-8 lg:gap-6 gap-3">
                  <div>
                    <FormInput
                      className="w-full p-2 sm:p-3 xl:p-4 theme4 rounded text-[#333] focus:outline-primary"
                      label="Name"
                      name="name"
                      placeholder="Enter your name"
                      required={true}
                    />
                  </div>
                  <div className="">
                    <FormInput
                      className="w-full p-2 sm:p-3 xl:p-4 theme4 rounded text-[#333] focus:outline-primary"
                      label="Email"
                      name="email"
                      isEmail={true}
                      placeholder="Enter your email"
                      required={true}
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <FormInput
                    className="w-full p-2 sm:p-3 xl:p-4 theme4 rounded text-[#333] focus:outline-primary"
                    label="Subject"
                    name="subject"
                    placeholder="Enter your Subject"
                    required={true}
                  />
                </div>
                <div className="mt-3">
                  <FormInput
                    textArea={true}
                    rows={3}
                    className="w-full p-2 sm:p-3 xl:p-4 theme4 rounded text-[#333] focus:outline-primary"
                    label="Message"
                    type="text"
                    name="message"
                    placeholder="Enter your message ..."
                    required={true}
                  />
                </div>
                <div className="">
                  <Button type="submit" className="common-btn !bg-[#F4A434] hover:!bg-[#FEF9E1]">
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </Form>
            </div>
            <div className="w-full sm:w-[50%] lg:w-[40%] xl:w-[35%]">
              <div className="relative xl:mt-12 lg:mt-10 md:mt-6 mt-5 2xl:p-8 xl:p-7 lg:p-6 sm:p-5 p-4 bg-[#F4A434] border-[1px] border-[#E8EAE8] rounded-[20px]">
                <h3 className="heading-8 text-[#333]">{data?.content?.title}</h3>
                <p
                  className="lg:mt-4 mt-3 description text-[#000000] font-normal"
                  dangerouslySetInnerHTML={{
                    __html: columnFormatter(data?.content?.description),
                  }}
                ></p>
                <div className="mt-8 flex flex-col gap-3">
                  <div className="flex items-center lg:gap-4 md:gap-2 gap-2">
                    <FaPhoneVolume className="text-[#333]  p-[10px] rounded-full bg-[#FEF9E1] hover:bg-primary" size={40} />
                    <p className="description-2 text-[#000000] font-normal">
                      {setting?.site_phone}
                    </p>
                  </div>
                  <div className="flex items-center lg:gap-4 md:gap-2 gap-2 mt-2">
                    <MdEmail className="text-[#333] p-[10px] rounded-full bg-[#FEF9E1] hover:bg-primary" size={40} />
                    <p className="description-2 text-[#000000] font-normal">
                      {setting?.site_email}
                    </p>
                  </div>
                  <div className="flex lg:gap-4 md:gap-2 gap-2 mt-2">
                    <FaLocationDot className="text-[#333]  p-[10px] rounded-full bg-[#FEF9E1] hover:bg-primary" size={40} />
                    <p className="description-2 text-[#000000] font-normal flex flex-col justify-center">
                      {setting?.site_address}
                    </p>
                  </div>
                </div>
                <div className=" mt-10 flex items-center xl:gap-6 lg:gap-5 sm:gap-4 gap-3">
                  <Link
                    // href='/'
                    href={setting?.social_media_link[0]?.link || "/"}
                    className="group flex items-center justify-center w-10 h-10 rounded-full transform duration-300 bg-[] hover:bg-[]"
                  >
                    <FaFacebook
                      className="text-white transform duration-300 bg-transparent"
                      size={20}
                    />
                  </Link>
                  <Link
                    href={setting?.social_media_link[1]?.link || "/"}
                    className=""
                  >
                    <FaTwitter
                      className="text-white transform duration-300"
                      size={20}
                    />
                  </Link>
                  <Link
                    href={setting?.social_media_link[3]?.link || "/"}
                    className="group transform duration-300 flex items-center justify-center w-10 h-10 rounded-full bg-[] hover:bg-[]"
                  >
                    <FaLinkedin
                      className="text-white transform duration-300 "
                      size={20}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* Google Map - Bottom */}
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mb-12">
          <div className="w-full h-[350px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden shadow-lg border border-[#E8EAE8]">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0849831671167!2d90.40943167410272!3d23.815576886273384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c75c50a489f3%3A0x656f6f4447483775!2sMahir%20Group%20(Head%20office)!5e0!3m2!1sen!2sbd!4v1750250254601!5m2!1sen!2sbd"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
    </div>
  );
};

export default ContactPage4;
