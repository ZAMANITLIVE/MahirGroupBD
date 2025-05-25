'use client';

import React from 'react';
import Image from 'next/image';

export default function ConcernSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Our Concerns
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              At Mahir Group BD, our diverse concerns reflect our dedication to excellence, sustainability, and customer satisfaction across various sectors.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Garment Accessories Manufacturing</li>
              <li>Packaging Solutions</li>
              <li>Textile and Apparel Services</li>
              <li>Logistics and Supply Chain Management</li>
              <li>Import and Export Services</li>
            </ul>
            <button className="mt-8 px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition duration-300 rounded">
              Explore More
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="/clients/our-concerns.jpg" // Make sure this image exists
              alt="Our Concerns"
              width={500}
              height={800}
              className="object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
