'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutUsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          
          {/* Left Image */}
          <div className="flex justify-center">
            <Image
              src="/clients/about-us.jpg" // Make sure the image exists at this path
              alt="Why Choose Us"
              width={500}
              height={800}
              className="object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Why Choose Us
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Mahir Group BD is a trusted name in the garment accessories industry. We are committed to delivering high-quality, sustainable, and innovative solutions that support the success of our global clients.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Over a decade of industry expertise</li>
              <li>Strict quality control with global standards</li>
              <li>Environmentally sustainable manufacturing practices</li>
              <li>Customized solutions tailored to client needs</li>
              <li>Dedicated customer support available 24/7</li>
            </ul>
            <button className="mt-8 px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition duration-300 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
