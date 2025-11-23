import services from "../../utilities/services.json";
import ServicesCard from "./servicesCard";

export default function Services() {
  return (
    <div className="bg-[#F6F6F6] flex flex-col justify-center py-10">
      {/* Título y descripción */}
      <div className="text-center px-4 mb-10">
        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
          Nuestros Servicios
        </h2>
        <p className="mx-auto max-w-2xl text-gray-700">
          Expertos en mecánica automotriz: mantenemos, reparamos y optimizamos
          tu vehículo con rapidez y profesionalismo, garantizando tu seguridad
          en cada kilómetro.
        </p>
      </div>

      {/* Grid de servicios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {services.map((service) => (
          <ServicesCard
            key={service.id}
            title={service.title}
            description={service.description}
            img={service.img}
          />
        ))}
      </div>
    </div>
  );
}
