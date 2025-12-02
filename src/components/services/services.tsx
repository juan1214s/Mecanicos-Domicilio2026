import { motion } from "framer-motion";
import services from "../../utilities/services.json";
import ServicesCard from "./servicesCard";

export default function Services() {
  return (
    <div className="bg-[#F6F6F6] flex flex-col justify-center py-10" id="services">

      {/* Título */}
      <div className="text-center px-4 mb-10">
        <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4 mt-12">
          Nuestros Servicios
        </h2>
        <p className="mx-auto max-w-5xl text-gray-700">
          Expertos en mecánica automotriz: mantenemos, reparamos y optimizamos
          tu vehículo con rapidez y profesionalismo.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15, // efecto cascada
            }}
            viewport={{ once: false, amount: 0.2 }} // se activa cada vez que aparece
          >
            <ServicesCard
              title={service.title}
              description={service.description}
              img={service.img}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
