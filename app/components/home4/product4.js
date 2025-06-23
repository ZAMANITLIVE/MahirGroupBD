'use client'
import { useFetch } from "@/app/helper/hooks";
import SectionHeader from "../common/sectionHeader";
import { getPublicProjects } from "@/app/helper/backend";
import { useI18n } from "@/app/contexts/i18n";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCard4 from "../site/common/card/productCard4";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1]
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.7, 
      ease: [0.16, 1, 0.3, 1],
    } 
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5
    }
  },
  tap: {
    scale: 0.98
  }
};

const headingVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const subheadingVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const Product4 = () => {
  const [data] = useFetch(getPublicProjects, { limit: 6 });
  const i18n = useI18n();

  return (
    <div className="w-full bg-[#FEF9E1] py-16 overflow-hidden">
      <div className="agency-container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={headingVariants}>
            <SectionHeader
              align="right"
              maxWidth="max-w-[747px]"
              title="Product"
              heading="Exceptional Products for Every Need"
              description="We deliver high quality reliable products designed to meet your needs and drive your success your satisfaction is our priority"
            />
          </motion.div>

          <motion.div
            className="xl:mt-14 lg:mt-10 md:mt-8 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-6 md:gap-5 sm:gap-4 gap-3"
            variants={containerVariants}
          >
            {data?.docs?.map((item, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                whileHover="hover"
                className="group"
              >
                <ProductCard4 
                  data={item} 
                  className="group-hover:shadow-lg transition-shadow duration-300"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="flex items-center justify-center xl:mt-16 lg:mt-12 md:mt-10 sm:mt-8 mt-6"
            variants={buttonVariants}
            whileTap="tap"
          >
            <Link
              href="/product"
              className="flex items-center justify-center gap-2 bg-[#F9A61A] hover:bg-[#f4bd61] duration-300 text-white !rounded-[10px] common-btn px-6 py-3 shadow-md hover:shadow-lg transition-all"
            >
              <span className="inline-block">
                {i18n.t("More Products")}
              </span>
              <span>
                <FaArrowRightLong />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Product4;
