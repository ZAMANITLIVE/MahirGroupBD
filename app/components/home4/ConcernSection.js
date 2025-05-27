'use client';

import React from 'react';
import Image from 'next/image';

export default function ConcernSection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10">
          
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">
              Our Concerns
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              At Mahir Group BD, our diverse concerns reflect our dedication to excellence, sustainability, and customer satisfaction across various sectors.
            </p>
            <ul className="list-disc pl-4 sm:pl-5 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>Garment Accessories Manufacturing</li>
              <li>Packaging Solutions</li>
              <li>Textile and Apparel Services</li>
              <li>Logistics and Supply Chain Management</li>
              <li>Import and Export Services</li>
            </ul>
            <button className="mt-6 sm:mt-8 px-4 sm:px-6 py-1.5 sm:py-2 border border-black text-black hover:bg-black hover:text-white transition duration-300 rounded text-sm sm:text-base">
              Explore More
            </button>
          </div>

          {/* Right Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <Image
              src="/clients/our-concerns.jpg"
              alt="Our Concerns"
              width={500}
              height={800}
              className="object-cover rounded-lg sm:rounded-xl shadow-md w-full h-auto max-w-md"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}