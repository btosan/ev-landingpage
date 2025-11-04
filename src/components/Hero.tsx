"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const slides = [
  {
    image: "/assets/ev/models/byd-atto2.jpg",
    title: "Drive the Future Today",
    description:
      "Experience BYD’s all-electric innovation built for Nigerian roads.",
    cta: "Explore Now",
  },
  {
    image: "/assets/ev/models/byd-atto3.jpg",
    title: "Smart. Stylish. Electric.",
    description:
      "The BYD Dolphin delivers power, comfort, and unbeatable efficiency.",
    cta: "View Model",
  },
  {
    image: "/assets/ev/models/byd-dolphin.jpg",
    title: "Luxury Meets Sustainability",
    description:
      "Go farther with zero emissions in the spacious BYD Tang SUV.",
    cta: "Discover More",
  },
  {
    image: "/assets/ev/models/byd-han.jpg",
    title: "Unleash Electric Performance",
    description:
      "Command attention with BYD Han — luxury and performance in perfect sync.",
    cta: "Discover More",
  },
];

export default function HeroSection() {
  const imageSwiperRef = useRef<any>(null);
  const textSwiperRef = useRef<any>(null);
  const router = useRouter();

  // ✅ Keep both swipers perfectly synced
  useEffect(() => {
    if (imageSwiperRef.current && textSwiperRef.current) {
      imageSwiperRef.current.controller.control = textSwiperRef.current;
      textSwiperRef.current.controller.control = imageSwiperRef.current;
    }
  }, []);

  // ✅ Navigate to enquiry form with type=test_drive
  const handleBookTestDrive = () => {
    router.push("/?type=test_drive#enquiry");
  };

  return (
    <section className="relative w-full h-screen bg-black text-gray-100 flex flex-col overflow-hidden md:-mt-2 lg:mt-0 -mt-4 lg:pb-12">
      {/* === TOP IMAGE SLIDER === */}
      <div className="relative w-full lg:h-[75%] h-[70%] md:px-16">
        <div className="relative w-full h-full">
          <Swiper
            modules={[Autoplay, Pagination, Controller]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              renderBullet: (index, className) =>
                `<span class="${className}"></span>`,
            }}
            loop={true}
            slidesPerView={1}
            speed={1000}
            controller={{ control: textSwiperRef.current }}
            onSwiper={(swiper) => (imageSwiperRef.current = swiper)}
            className="w-full h-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover rounded-xl lg:rounded-3xl"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* VERTICAL BULLETS */}
          <div className="custom-pagination absolute left-8 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-3 pointer-events-auto" />
        </div>
      </div>

      {/* === BOTTOM TEXT & CTA === */}
      <div className="relative w-full h-auto bg-black flex flex-col md:flex-row items-center justify-between px-6 md:px-16 md:py-4 py-8 ">
        {/* LEFT COLUMN */}
        <div className="w-full md:w-1/5 flex justify-start md:justify-center mb-6 md:mb-0">
          <span className="text-yellow-400 uppercase tracking-widest text-sm font-medium">
            Innovation at Your Fingertips
          </span>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full md:w-4/5 md:text-right text-left">
          <Swiper
            modules={[Autoplay, Controller]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            allowTouchMove={false}
            controller={{ control: imageSwiperRef.current }}
            onSwiper={(swiper) => (textSwiperRef.current = swiper)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="md:text-3xl lg:text-5xl text-2xl font-bold uppercase text-gray-100 mb-3 md:mt-12"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-gray-400 mb-6 text-base md:text-lg"
                >
                  {slide.description}
                </motion.p>

                {/* ✅ CTA button – unchanged visually, now navigates to enquiry form */}
                <motion.button
                  onClick={handleBookTestDrive}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-yellow-500 text-black text-lg lg:text-xl px-8 py-3 lg:px-12 lg:py-4 rounded-2xl font-semibold hover:cursor-pointer hover:bg-yellow-400 transition-all inline-block"
                >
                  {slide.cta}
                </motion.button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* === CUSTOM STYLES === */}
      <style jsx>{`
        :global(.custom-pagination) {
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: start;
          gap: 10px;
          margin-left: 4px;
        }

        :global(.custom-pagination .swiper-pagination-bullet) {
          width: 10px;
          height: 10px;
          background: #f1f1f1;
          border-radius: 50%;
          margin: 6px 0 !important;
          opacity: 1;
          transition: transform 0.25s ease, background 0.25s ease;
        }

        :global(.custom-pagination .swiper-pagination-bullet-active) {
          background: #facc15;
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
}
