import Link from 'next/link';
import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FaArrowRightLong } from 'react-icons/fa6';

const CommonBanner = ({
  title = 'Home',
  link = '#',
  subtitle = '',
  textTitle = 'text-white',
  textSubtitle = 'text-primary',
}) => {
  return (
    <div
      className="relative pt-32 sm:pt-36 md:pt-40 pb-8 sm:pb-12 md:pb-16 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-cover bg-center"
      style={{ backgroundImage: `url('/theme4/banner.png')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0" />

      {/* Content */}
      <div className="relative z-10 agency-container px-4 sm:px-6 flex flex-col justify-center">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6">
          {title}
        </h1>

        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4 text-sm sm:text-base">
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:text-primary transition"
          >
            <AiOutlineHome className="text-xl -mt-1" />
            <span>Home</span>
          </Link>

          <FaArrowRightLong className="text-white" />

          <Link
            href={link}
            className={`hover:text-primary transition ${textTitle}`}
          >
            {title}
          </Link>

          {subtitle && (
            <>
              <FaArrowRightLong className="text-white" />
              <p className={`description-1 ${textSubtitle}`}>{subtitle}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
