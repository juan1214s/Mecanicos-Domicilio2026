import { useState } from "react";
import { Headset, Car, BadgeCheck, Wrench, Hammer } from "lucide-react";
import tabContentjson from "../../assets/utilities/tabContent.json";

const TABS = [
  { label: "Atención", Icon: Headset },
  { label: "Servicio a Domicilio", Icon: Car },
  { label: "Calidad", Icon: BadgeCheck },
  { label: "Equipo", Icon: Wrench },
] as const;

export default function TapComponent() {
  const [value, setValue] = useState(0);
  const tabContent = tabContentjson;

  return (
    <div className="bg-[#F6F6F6]">
      <div className="flex flex-col items-center justify-center text-center p-6 ">
        <h2 className="font-bold text-4xl">
          Reparamos, Cuidamos y Protegemos Tu Vehículo
        </h2>
        <p className="mx-auto max-w-2xl text-base">
          Servicio mecánico profesional, transparente y seguro. Cuidamos tu
          vehículo con experiencia, tecnología y atención responsable para que
          conduzcas con total tranquilidad.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center w-full mt-6">
        <div
          role="tablist"
          aria-label="Nuestros valores"
          className="flex gap-4 md:gap-10 overflow-x-auto px-4 pb-2"
        >
          {TABS.map((t, i) => {
            const active = i === value;
            const Icon = t.Icon;
            return (
              <button
                key={t.label}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setValue(i)}
                className={`flex flex-col items-center gap-2 shrink-0 px-3 py-2 border-b-2 transition ${
                  active
                    ? "border-[#E6B800] text-[#E6B800] font-bold"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                <Icon size={56} strokeWidth={1.5} aria-hidden="true" />
                <span className="text-sm">{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Contenido dinámico */}
      <div
        key={value}
        className="pop-in mt-6 shadow-md rounded-lg max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-[#393939]">
          <div className="text-center md:text-left p-5">
            <h3 className="text-3xl font-bold mb-3 text-[#FFCC33]">
              {tabContent[value].title}
            </h3>
            <p className="text-white">{tabContent[value].text}</p>

            {tabContent[value].services && (
              <ul className="text-white mt-4 grid grid-cols-1 gap-2">
                {tabContent[value].services.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Hammer size={14} color="#F5C32E" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              loading="lazy"
              src={tabContent[value].img}
              alt={`Imagen de la pestaña: ${tabContent[value].title}`}
              width={600}
              height={400}
              className="w-full max-w-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
