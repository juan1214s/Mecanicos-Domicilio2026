import ServicesHome from "../../components/servicesHome/servicesHome";
import Services from "../../components/services/services";

export default function ServicesPage() {
  return (
    <div className="bg-[#F6F6F6] mt-18 md:mt-30">
      <header className="max-w-7xl mx-auto px-6 text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Servicios de Mecánico a Domicilio en Medellín
        </h1>
        <div className="w-24 h-1 bg-[#FFCC33] mx-auto mt-3"></div>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Mantenimiento y reparación automotriz donde estés: motor, frenos, batería,
          sincronización, cambio de aceite y más.
        </p>
      </header>

      <ServicesHome sectionId="services-home" />
      <Services sectionId="services-taller" />
    </div>
  );
}
