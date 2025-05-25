'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const visibleClients = [
   { name: 'Adidas', src: '/clients/adidas.png' },
  { name: 'Tesco', src: '/clients/tesco.png' },
  { name: 'C&A', src: '/clients/cna.png' },
  { name: 'Li & Fung', src: '/clients/lifung.png' },
];

const clients = [...visibleClients, ...visibleClients]; // duplicated for looping

export default function ClientsSection() {
  return (
    <section className="w-full py-12 bg-[#ffffff] text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Partners
      </h2>

      <div className="relative px-4 max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {clients.map((client, idx) => (
            <SwiperSlide key={`${client.name}-${idx}`}>
              <div className="p-6 border border-orange-300 rounded-lg bg-white shadow flex items-center justify-center h-[200px] hover:shadow-md transition-all">
                <div className="relative w-[333px] h-[158px]">
                  <Image
                    src={client.src}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
