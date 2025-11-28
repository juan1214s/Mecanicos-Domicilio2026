import {
  Facebook,
  Instagram,
  Phone,
  MapPin
} from "lucide-react";

export function FooterComponent() {
  return (
    <footer className="mt-24 bg-gradient-to-t from-black to-[#151515] text-gray-300">
      <div className="mx-auto w-full max-w-screen-xl p-8 lg:py-14">

        {/* Top */}
        <div className="md:flex md:justify-between">

          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2">
              {/* Cambia esta imagen por tu logo cuando lo tengas */}
              
              <h2 className="text-3xl font-bold text-white">
                Mecánicos a Domicilio
              </h2>
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Tu vehículo en manos expertas — Garantía total.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">

            <div>
              <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wide">
                Servicios
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li>Diagnóstico</li>
                <li>Mantenimiento</li>
                <li>Emergencias 24/7</li>
                <li>Eléctrico y mecánico</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wide">
                Contacto
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-[#F5C32E]" />
                  +57 300 000 0000
                </li>

                <li className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#F5C32E]" />
                  Medellín – Envigado – Poblado – Sabaneta
                </li>
              </ul>
            </div>

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
