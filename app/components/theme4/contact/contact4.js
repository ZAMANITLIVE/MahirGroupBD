/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";
import { Form, message as antdMessage } from "antd";
import { FaFacebook, FaPhoneVolume, FaLocationDot, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Banner from "@/app/components/site/common/component/Banner";
import Button from "@/app/(dashboard)/components/common/button";
import CommonBanner from "../../common/commonBanner";
import { useAction, useFetch } from "@/app/helper/hooks";
import { createContact, fetchPageContent, fetchPublicSettings } from "@/app/helper/backend";
import { columnFormatter } from "@/app/helper/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

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
    try {
      await useAction(createContact, { body: values });
      toast.success("Message sent successfully!");
      form.resetFields();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar />
      <CommonBanner title="Contact" textTitle="text-primary" />

      <motion.div
        className="lg:py-[100px] md:py-20 sm:py-16 py-12 agency-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="agency-container bg-[#FEF9E1] border border-[#E8EAE8] sm:p-10 p-4 rounded-[20px] shadow-md">
          <div className="flex flex-col sm:flex-row xl:gap-8 lg:gap-7 md:gap-6 gap-5">
            {/* Form Section */}
            <motion.div className="w-full sm:w-1/2 lg:w-3/5" variants={fadeUp} custom={1}>
              <Form layout="vertical" onFinish={handleSubmit} form={form}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Please enter your name" }]}
                  >
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none shadow-sm focus:shadow-md transition-all text-sm"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Enter a valid email" },
                    ]}
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none shadow-sm focus:shadow-md transition-all text-sm"
                    />
                  </Form.Item>
                </div>

                <Form.Item
                  label="Subject"
                  name="subject"
                  className="mt-3"
                  rules={[{ required: true, message: "Please enter your subject" }]}
                >
                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none shadow-sm focus:shadow-md transition-all text-sm"
                  />
                </Form.Item>

                <Form.Item
                  label="Message"
                  name="message"
                  className="mt-3"
                  rules={[{ required: true, message: "Please enter your message" }]}
                >
                  <textarea
                    rows={4}
                    placeholder="Enter your message..."
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none shadow-sm focus:shadow-md transition-all text-sm resize-none"
                  />
                </Form.Item>

                <motion.div whileHover={{ scale: 1.03 }} className="mt-5">
                  <Button type="submit" className="common-btn !bg-[#F4A434] hover:!bg-[#e08918] shadow-md w-full sm:w-auto">
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </Form>
            </motion.div>

            {/* Contact Info Section */}
            <motion.div className="w-full sm:w-1/2 lg:w-2/5" variants={fadeUp} custom={2}>
              <div className="bg-[#F4A434] text-white p-6 rounded-[20px] shadow-md">
                <h3 className="text-xl font-semibold">{data?.content?.title}</h3>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: columnFormatter(data?.content?.description),
                  }}
                ></p>

                <div className="mt-6 flex flex-col gap-4 text-sm">
                  <ContactInfo icon={<FaPhoneVolume size={22} />} text={setting?.site_phone} />
                  <ContactInfo icon={<MdEmail size={22} />} text={setting?.site_email} />
                  <ContactInfo icon={<FaLocationDot size={22} />} text={setting?.site_address} />
                </div>

                <div className="mt-6 flex gap-4">
                  {[FaFacebook, FaTwitter, FaLinkedin].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href={setting?.social_media_link?.[index]?.link || "/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white text-[#F4A434] flex items-center justify-center hover:bg-[#FEF9E1] transition"
                      whileHover={{ rotate: 10 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Google Map with Motion */}
      <motion.div
        className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="w-full h-[350px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden shadow-lg border border-[#E8EAE8]">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0849831671167!2d90.40943167410272!3d23.815576886273384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c75c50a489f3%3A0x656f6f4447483775!2sMahir%20Group%20(Head%20office)!5e0!3m2!1sen!2sbd!4v1750250254601!5m2!1sen!2sbd"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

const ContactInfo = ({ icon, text }) => (
  <motion.div
    className="flex items-start gap-3 bg-[#FEF9E1] text-black p-3 rounded-md hover:scale-105 transition"
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-[#F4A434]">{icon}</div>
    <p className="text-sm">{text}</p>
  </motion.div>
);

export default ContactPage4;
