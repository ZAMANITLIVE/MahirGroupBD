'use client';

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/slider1.jpg",
    title: "Innovating the Future",
    subtitle: "Leading in garment manufacturing excellence.",
    cta: "Explore Our Innovations",
    kenBurns: "animate-kenBurns1"
  },
  {
    id: 2,
    image: "/slider2.jpg",
    title: "Global Reach",
    subtitle: "Exporting to major markets worldwide.",
    cta: "Discover Our Network",
    kenBurns: "animate-kenBurns2"
  },
  {
    id: 3,
    image: "/slider3.jpg",
    title: "Quality & Commitment",
    subtitle: "Delivering the highest quality every time.",
    cta: "Our Quality Promise",
    kenBurns: "animate-kenBurns3"
  },
];

const ZoomSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-[50vh] sm:h-[70vh] lg:h-[90vh] xl:h-screen">
      {/* Add custom animations to your Tailwind config */}
      <style jsx global>{`
        @keyframes kenBurns1 {
          0% { transform: scale(1); }
          100% { transform: scale(1.1) translate(-5%, -5%); }
        }
        @keyframes kenBurns2 {
          0% { transform: scale(1); }
          100% { transform: scale(1.1) translate(5%, 0); }
        }
        @keyframes kenBurns3 {
          0% { transform: scale(1); }
          100% { transform: scale(1.1) translate(0, 5%); }
        }
        .animate-kenBurns1 {
          animation: kenBurns1 15s ease-in-out infinite alternate;
        }
        .animate-kenBurns2 {
          animation: kenBurns2 15s ease-in-out infinite alternate;
        }
        .animate-kenBurns3 {
          animation: kenBurns3 15s ease-in-out infinite alternate;
        }
      `}</style>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
          renderBullet: (index, className) => {
            return `<span class="${className} bg-white opacity-50 hover:opacity-100 transition-opacity duration-300"></span>`;
          }
        }}
        autoplay={{ 
          delay: 5000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        speed={1000}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="absolute inset-0 overflow-hidden">
              <div className={`absolute inset-0 ${slide.kenBurns}`}>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  quality={100}
                  priority={slide.id === 1}
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-16">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-5 text-white drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 text-white/90 drop-shadow-md">
                  {slide.subtitle}
                </p>
                <button
                  className="px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 bg-[#f6a631] hover:bg-[#d88c1c] text-white text-sm sm:text-base md:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                  onClick={(e) => e.stopPropagation()}
                >
                  {slide.cta}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows
        <div className="swiper-button-next hidden sm:flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-300 after:text-sm md:after:text-base after:font-bold"></div> */}
      
      </Swiper>

      {/* Slide Indicator (for mobile) */}
      {/* <div className="sm:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-white w-4' : 'bg-white/50'}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ZoomSlider;