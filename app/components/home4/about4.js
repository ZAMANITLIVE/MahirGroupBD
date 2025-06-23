/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { FaArrowRight } from "react-icons/fa";
import SectionHeader from "../common/sectionHeader";
import Image from "next/image";
import { useI18n } from "@/app/contexts/i18n";
import Link from "next/link";
import { useEffect } from "react";
import { useFetch } from "@/app/helper/hooks";
import { fetchPageContent } from "@/app/helper/backend";
import { columnFormatter } from "@/app/helper/utils";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const slideIn = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const AboutSection = ({ bgColor = "bg-gradient-to-br from-[#FFFBE9] via-[#FEF9E1] to-[#FFE9B2]", aboutMore }) => {
  const i18n = useI18n();
  const [data, getData, loading] = useFetch(fetchPageContent, {}, false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    getData({ slug: "about" });
  }, []);

  return (
    <motion.section
      style={{ y }}
      className={`${bgColor} py-20 mt-12 shadow-xl rounded-[32px]`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col-reverse md:flex-row gap-6 items-center">
        {/* Left Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
          className="flex flex-row gap-4 relative w-full justify-center md:justify-start mt-6 md:mt-0"
        >
          <div className="flex flex-col space-y-4">
            {[data?.content?.image1 || "/home4/2.png", data?.content?.image2 || "/home4/3.png"].map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="shadow-lg rounded-xl overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`Team ${idx + 1}`}
                  className="w-[270px] h-[240px] object-cover"
                  width={270}
                  height={240}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-[270px] h-[498px] shadow-xl rounded-xl overflow-hidden"
          >
            <Image
              src={data?.content?.image || "/home4/1.png"}
              alt="Main Team"
              className="w-[270px] h-[498px] object-cover"
              width={270}
              height={498}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute bottom-4 left-4 bg-[#f4bd61] text-white px-4 py-3 rounded-[20px] shadow-lg text-lg font-bold flex flex-col leading-tight"
            >
              <span className="text-2xl lg:text-[32px]">
                {data?.content?.experience?.year_experiences || 22}+
              </span>
              <span className="text-sm font-medium -mt-1">
                Year Of Working Experience
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
          className="w-full"
        >
          <div className="md:-ml-[54px] flex md:block items-center justify-center md:items-start md:justify-start">
            <SectionHeader align="left" maxWidth="max-w-[70px]" title="About US" />
          </div>

          <motion.h2
            variants={slideIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl text-center md:text-left font-lexend md:text-4xl -mt-4 lg:text-[48px] font-bold mb-4 text-[#333] lg:leading-[110%]"
          >
            {i18n.t(data?.content?.title)}
          </motion.h2>

          <motion.p
            variants={slideIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="description-2 text-[#000000]"
            dangerouslySetInnerHTML={{
              __html: columnFormatter(data?.content?.description),
            }}
          ></motion.p>

          {!aboutMore && (
            <Link
              href="/about"
              className="inline-flex text-lg mt-4 items-center text-[#f4bd61] font-semibold hover:underline"
            >
              About More <FaArrowRight className="ml-2 text-[#f4bd61]" />
            </Link>
          )}

          <motion.div className="mt-14 flex flex-row justify-between gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={3}>
            <motion.div className="flex gap-2 lg:gap-4 items-center" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              {data?.content?.project?.iconImg1 && (
                <Image
                  className="sm:w-14 w-12 h-12 sm:h-14"
                  src={data?.content?.project?.iconImg1 || "/about/star.png"}
                  width={80}
                  height={80}
                  alt="Projects Icon"
                />
              )}
              <div>
                <h1 className="text-2xl lg:text-[32px] text-[#333] font-semibold">
                  {data?.content?.project?.num_projects}+
                </h1>
                <h4 className="description-1 text-[#333] font-normal">
                  {i18n.t("Project Complete")}
                </h4>
              </div>
            </motion.div>

            <div className="border-l hidden sm:block border-l-[#4DB49C]" />

            <motion.div className="flex gap-2 lg:gap-4 items-center" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              {data?.content?.experience?.iconImg2 && (
                <Image
                  className="sm:w-14 w-12 h-12 sm:h-14"
                  src={data?.content?.experience?.iconImg2 || "/about/man.png"}
                  width={80}
                  height={80}
                  alt="Experience Icon"
                />
              )}
              <div>
                <h1 className="text-2xl lg:text-[32px] text-[#333] font-semibold">
                  {data?.content?.experience?.year_experiences}+
                </h1>
                <h4 className="description-1 text-[#333] font-normal">
                  {i18n.t("Years of Experiences")}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
