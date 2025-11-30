import {
  Facebook,
  Instagram,
  Phone,
  MapPin
} from "lucide-react";

export function FooterComponent() {
  return (
    <footer className="mt-24 bg-linear-to-t from-black to-[#151515] text-gray-300">
      <div className="mx-auto w-full max-w-7xl p-8 lg:py-14">

        {/* Top */}
        <div className="md:flex md:justify-between md:items-start gap-14">

          {/* Logo + descripción */}
          <div className="mb-10 md:mb-0 max-w-xs">
            <div className="flex items-center gap-3">
              {/* Logo si lo deseas */}
              {/* <img src="/img/logo.png" className="w-12" /> */}
              <h2 className="text-3xl font-bold text-white">
                Mecánicos a Domicilio
              </h2>
            </div>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              Tu vehículo en manos expertas — Garantía total y servicio rápido.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">

            {/* Servicios */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wide">
                Servicios
              </h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>Diagnóstico</li>
                <li>Mantenimiento</li>
                <li>Emergencias 24/7</li>
                <li>Eléctrico & Mecánico</li>
              </ul>
            </div>

            {/* Horarios */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wide">
                Horarios de atención
              </h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>Lun - Vie: 05:00 AM – 06:00 PM</li>
                <li>Sáb - Dom: 06:00 AM – 12:00 PM</li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wide">
                Contacto
              </h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-[#F5C32E]" />
                  +57 310 545 8117
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#F5C32E]" />
                  Medellín – Envigado – Poblado – Sabaneta
                </li>
              </ul>
            </div>

            {/* Redes */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wide">
                Redes
              </h3>
              <div className="flex gap-4 text-gray-400">
                <Facebook className="hover:text-[#F5C32E] cursor-pointer" />
                <Instagram className="hover:text-[#F5C32E] cursor-pointer" />
              </div>
            </div>

          </div>
        </div>

        <hr className="my-10 border-gray-700" />

        {/* Bottom */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400">
            © {new Date().getFullYear()} Mecánicos a Domicilio — Todos los derechos reservados.
          </span>

          <p className="mt-4 sm:mt-0 text-sm text-gray-500">
            Hecho con 💛 en Medellín
          </p>
        </div>
      </div>
    </footer>
  );
}
