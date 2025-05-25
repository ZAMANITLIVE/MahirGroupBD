"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Zoom, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/slider1.jpg",
    title: "Innovating the Future",
    subtitle: "Leading in garment manufacturing excellence.",
  },
  {
    id: 2,
    image: "/slider2.jpg",
    title: "Global Reach",
    subtitle: "Exporting to major markets worldwide.",
  },
  {
    id: 3,
    image: "/slider3.jpg",
    title: "Quality & Commitment",
    subtitle: "Delivering the highest quality every time.",
  },
];

const ZoomSlider = () => {
  const sliderRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await sliderRef.current?.requestFullscreen?.();
      } else {
        await document.exitFullscreen?.();
      }
    } catch (err) {
      console.error("Fullscreen error:", err);
    }
  };

  return (
  <div
    ref={sliderRef}
    className={`relative w-full ${
      isFullscreen ? "fixed inset-0 z-[9999] bg-black" : ""
    }`}
  >
    <Swiper
      modules={[Zoom, Navigation, Pagination, Autoplay]}
      zoom={true}
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="w-full"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="swiper-zoom-container relative w-full cursor-pointer"
            onClick={toggleFullscreen}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              width={1920}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-lg sm:text-xl mb-6">{slide.subtitle}</p>
              <button
                className="px-6 py-2 bg-[#f6a631] hover:bg-[#d88c1c] text-white rounded-full shadow-md transition"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>


  </div>
);
}
export default ZoomSlider;
