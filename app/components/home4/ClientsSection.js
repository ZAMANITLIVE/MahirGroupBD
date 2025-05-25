'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const clients = [
  { name: 'Adidas', src: '/clients/adidas.png' },
  { name: 'Tesco', src: '/clients/tesco.png' },
  { name: 'C&A', src: '/clients/cna.png' },
  { name: 'Li & Fung', src: '/clients/lifung.png' },
  
];

export default function ClientsSection() {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Partners</h2>
      <div className="relative px-4 max-w-7xl mx-auto">
        <Swiper
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={true}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Navigation]}
        >
          {clients.map((client) => (
            <SwiperSlide key={client.name}>
              <div className="p-6 border border-orange-300 rounded-lg bg-white shadow flex items-center justify-center h-40 hover:shadow-md transition-all">
                <div className="relative w-full h-full max-h-24 max-w-xs">
                  <Image
                    src={client.src}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
