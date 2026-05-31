import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import slides from "../../assets/utilities/slides.json";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../App.css";
import { AnalyticsEvents, EventLabels } from "../../constants/enums";
import { getCurrentPageName, pushDataLayerEvent } from "../../utils/analytics";

export default function Banner() {
  return (
    <div className="relative" role="main">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={window.innerWidth > 768 ? { delay: 6000 } : false}
        loop={true}
        className="w-full rounded-xl mt-18 md:mt-30"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              alt={`Banner principal: ${slide.title || `Slide ${index + 1}`}`}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
              width={1200}
              height={500}
              className="h-[500px] w-full object-cover rounded-xl"
            />

            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6">
              <h1 className="text-white text-2xl md:text-4xl font-bold mb-2">
                {slide.title}
              </h1>

              {slide.subtitle && (
                <p className="text-white text-sm md:text-xl max-w-2xl mb-4 p-5">
                  {slide.subtitle}
                </p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CTA GLOBAL */}
      <div className="absolute bottom-35 left-1/2 -translate-x-1/2 z-10">
        <a
          href="tel:+573177123333"
          aria-label="Llamar al número de atención al cliente 3177123333"
          onClick={() => {
            pushDataLayerEvent({
              event: AnalyticsEvents.CALL_CLICK,
              event_category: "conversion",
              event_label: EventLabels.BANNER,
              page_name: getCurrentPageName(),
            })
          }}
          className="px-6 py-3 bg-[#FFCC33] text-black font-bold rounded-lg shadow-xl hover:scale-105 transition"
        >
          Llámanos ahora
        </a>
      </div>
    </div>
  );
}
