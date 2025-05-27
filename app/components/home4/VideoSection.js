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

        <div className="relative w-full aspect-video max-w-4xl sm:max-w-5xl mx-auto rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl transition-all duration-300 hover:shadow-xl sm:hover:shadow-2xl">
          <img
            src="/video-thumbnail.jpg"
            alt="Mahir Group company video showcase"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/10" />
          <a
            href="https://youtu.be/afMvY7S4Ddo"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center group"
            aria-label="Play Mahir Group company video"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
            <div className="relative bg-white rounded-full p-3 sm:p-4 md:p-5 shadow-lg hover:scale-105 sm:hover:scale-110 transition-transform duration-300 group-active:scale-95">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="sr-only">Play Video</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}