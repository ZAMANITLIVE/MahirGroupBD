'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const subheadingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const videoVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const bgVariants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative w-full min-h-[60vh] lg:min-h-screen overflow-hidden">
      {/* Parallax-style animated background */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={bgVariants}
        animate="animate"
        style={{
          backgroundImage:
            'linear-gradient(120deg, #fdfcfb 0%, #e2d1c3 100%)',
          backgroundSize: '200% 200%',
        }}
      ></motion.div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug md:leading-tight lg:leading-normal mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
        >
          The ultimate destination for premium garment accessories
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={subheadingVariants}
        >
          Innovative solutions for the fashion industry
        </motion.p>

        <motion.div
          className="relative w-full aspect-video max-w-4xl sm:max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl transition-all duration-300 group cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={videoVariants}
          onClick={() => setIsPlaying(true)}
        >
          {isPlaying ? (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/hNQ6gXJj5Tg?autoplay=1&rel=0"
              title="Mahir Group Company Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="w-full h-full relative">
              <img
                src="/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
