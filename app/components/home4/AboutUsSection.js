'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutUsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          
          {/* Left Image */}
          <div className="relative h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] rounded-xl overflow-hidden shadow-lg group">
            <Image
              src="/clients/about-us.jpg"
              alt="Mahir Group BD - Our Team"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              quality={90}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/5" />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <span className="inline-block text-sm font-medium text-primary mb-2">
              ABOUT OUR COMPANY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Why Partner With Mahir Group BD
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              As a premier garment accessories manufacturer since 2003, Mahir Group BD combines innovation with sustainability to deliver exceptional quality that powers the global fashion industry.
            </p>
            
            <ul className="space-y-4">
              {[
                { 
                  title: "Proven Expertise", 
                  description: "18+ years of specialized experience in garment accessory manufacturing" 
                },
                { 
                  title: "Quality Assurance", 
                  description: "ISO-certified processes with rigorous quality control at every stage" 
                },
                { 
                  title: "Sustainable Solutions", 
                  description: "Eco-friendly production methods that reduce environmental impact" 
                },
                { 
                  title: "Custom Capabilities", 
                  description: "Tailored product development to meet your specific requirements" 
                },
                { 
                  title: "Global Support", 
                  description: "Dedicated account management with 24/7 availability across timezones" 
                }
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                Discover Our Capabilities
                <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}