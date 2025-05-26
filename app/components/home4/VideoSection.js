'use client';

import React from 'react';

export default function VideoSection() {
  return (
    <section className="w-full min-h-[50vh] sm:min-h-screen bg-[#FEF9E1] text-black px-4 py-6 sm:py-12 md:py-16 lg:py-20 flex items-center justify-center">
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold leading-tight sm:leading-snug mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-2">
          The ultimate destination for premium garment accessories and industry solutions.
        </h2>

        <div className="relative w-full aspect-video max-w-5xl mx-auto rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl">
          <img
            src="/video-thumbnail.jpg"
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <a
            href="https://youtu.be/afMvY7S4Ddo"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition duration-300"
            aria-label="Play Video"
          >
            <div className="bg-white rounded-full p-3 sm:p-4 md:p-5 shadow-lg hover:scale-105 sm:hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
