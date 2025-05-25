'use client';

import React from 'react';

export default function VideoSection() {
  return (
    <section className="w-full min-h-screen bg-[#FEF9E1] text-black px-4 py-8 sm:py-12 md:py-16 lg:py-20 flex items-center justify-center">
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug mb-6 sm:mb-8 md:mb-10 px-2 sm:px-4">
          The ultimate destination for premium garment accessories and industry solutions.
        </h2>

        <div className="relative w-full aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/video-thumbnail.jpg"
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition duration-300"
            aria-label="Play Video"
          >
            <div className="bg-white rounded-full p-4 sm:p-5 shadow-xl hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 sm:w-10 sm:h-10 text-red-500"
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
