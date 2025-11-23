import { Card } from "flowbite-react";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {/* Tarjeta 1 */}
        <Card className="cardService-custom bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden max-w-sm mx-auto border-0">
          <img
            src="img/img2.webp"
            alt="Cambio de Aceite"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h5 className="text-xl font-bold text-gray-900 mb-2">
              Cambio de Aceite
            </h5>
            <p className="text-gray-700 text-sm">
              Servicio rápido y profesional para mantener tu motor en perfecto
              estado.
            </p>
          </div>
        </Card>

        <Card className="cardService-custom bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden max-w-sm mx-auto border-0">
          <img
            src="img/img2.webp"
            alt="Cambio de Aceite"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h5 className="text-xl font-bold text-gray-900 mb-2">
              Cambio de Aceite
            </h5>
            <p className="text-gray-700 text-sm">
              Servicio rápido y profesional para mantener tu motor en perfecto
              estado.
            </p>
          </div>
        </Card>

        <Card className="cardService-custom bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden max-w-sm mx-auto border-0">
          <img
            src="img/img2.webp"
            alt="Cambio de Aceite"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h5 className="text-xl font-bold text-gray-900 mb-2">
              Cambio de Aceite
            </h5>
            <p className="text-gray-700 text-sm">
              Servicio rápido y profesional para mantener tu motor en perfecto
              estado.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
