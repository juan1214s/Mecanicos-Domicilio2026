import { motion } from "framer-motion";
import services from "../../assets/utilities/servicesHome.json";
import ServicesCard from "./servicesHomeCard";
import { useState } from "react";

type ServicesHomeProps = {
  initialVisible?: number;
  allowExpand?: boolean;
  sectionId?: string;
};

export default function ServicesHome({
  initialVisible = 8,
  allowExpand = true,
  sectionId = "services-home",
}: ServicesHomeProps) {
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 4);
  const handleShowLess = () => setVisibleCount(initialVisible);

  const visibleServices = services.slice(0, visibleCount);

  return (
    <div
      className="bg-[#F6F6F6] flex flex-col justify-center py-10"
      id={sectionId}
    >
      {/* Título */}
      <div className="text-center px-4 mb-10">
        <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4 mt-12">
          Nuestros Servicios a Domicilio
        </h2>
        <p className="mx-auto max-w-5xl text-black">
          Expertos en mecánica automotriz: mantenemos, reparamos y optimizamos
          tu vehículo con rapidez y profesionalismo.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {visibleServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              delay: index * 0.1,
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <ServicesCard
              title={service.title}
              description={service.description}
              img={service.img}
            />
          </motion.div>
        ))}
      </div>

      {allowExpand && (
        <div className="flex justify-center mt-10">
          {visibleCount < services.length ? (
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-[#FFCC33] text-black rounded-lg font-semibold shadow hover:bg-yellow-400 transition"
            >
              Ver más Servicios
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="px-6 py-2 bg-gray-300 text-black rounded-lg font-semibold shadow hover:bg-gray-400 transition"
            >
              Ver menos
            </button>
          )}
        </div>
      )}
    </div>
  );
}
