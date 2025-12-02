import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import slides from "../utilities/slides.json";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../App.css";

export default function Banner() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000 }}
      loop={true}
      className="w-full rounded-xl mt-18 md:mt-30"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          {/* Imagen */}
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            loading="lazy"
            className="h-[500px] w-full object-cover rounded-xl"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6">
            {/* Título */}
            <h1 className="text-white text-2xl md:text-4xl font-bold mb-2">
              {slide.title}
            </h1>

            {/* Subtítulo */}
            {slide.subtitle && (
              <p className="text-white text-sm md:text-xl max-w-2xl mb-4 p-5">
                {slide.subtitle}
              </p>
            )}

            {/* Botones */}
            <div className="flex gap-4 mt-2">
              {slide.ctaPrimary && (
                <button className="px-4 py-2 bg-[#FFCC33] text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition">
                  {slide.ctaPrimary}
                </button>
              )}

              {slide.ctaSecondary && (
                <button className="px-4 py-2 bg-white/20 text-white font-semibold rounded-lg border border-white hover:bg-white/30 transition">
                  {slide.ctaSecondary}
                </button>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
