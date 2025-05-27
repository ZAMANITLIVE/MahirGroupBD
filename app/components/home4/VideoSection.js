'use client';

import React from 'react';

export default function VideoSection() {
  return (
    <section className="w-full min-h-[50vh] sm:min-h-[60vh] lg:min-h-screen bg-[#FEF9E1] text-black px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto text-center">
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2 sm:px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug md:leading-tight lg:leading-normal mb-4">
            The ultimate destination for premium garment accessories
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700">
            Innovative solutions for the fashion industry
          </p>
        </div>

        <div className="relative w-full aspect-video max-w-4xl sm:max-w-5xl mx-auto rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl transition-all duration-300">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/afMvY7S4Ddo?rel=0&autoplay=0&modestbranding=1"
            title="Mahir Group Company Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
