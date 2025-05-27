'use client';
import { useI18n } from '@/app/contexts/i18n';
import { fetchPublicSettings } from '@/app/helper/backend';
import { useFetch } from '@/app/helper/hooks';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Partner = ({ theme, bgColor = 'bg-[#ffffff]', bgOpacity = 'bg-opacity-100' }) => {
  const { t } = useI18n();
  const [setting] = useFetch(fetchPublicSettings);
  const partnerImages = setting?.partner ? [...setting.partner] : [];

  return (
    <section className={`${bgColor} ${bgOpacity} ${theme === 'theme4' ? '' : 'shadow-custom-light'} py-8 md:py-12 xl:py-16 w-full`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className='font-semibold text-xl md:text-2xl lg:text-3xl font-lexend text-gray-800 text-center mb-8 md:mb-12'>
          {t('Sister Concerns of Mahir Group')}
        </h2>
        
        <div className="relative w-full">
          <Marquee 
            speed={40}
            pauseOnHover={true}
            gradient={true}
            gradientColor={bgColor === 'bg-[#ffffff]' ? [255, 255, 255] : [0, 0, 0]}
            gradientWidth={80}
          >
            <div className="flex items-center py-2">
              {partnerImages.map((image, index) => (
                <div key={index} className="flex-shrink-0 mx-4 md:mx-8 transition-transform hover:scale-105">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
                    <Image
                      src={image}
                      fill
                      className="object-contain"
                      alt={`Partner company ${index + 1}`}
                      sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Partner;