import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cog,
  CircleDot,
  DoorClosed,
  Lightbulb,
  ChevronRight,
} from "lucide-react";
import React from "react"; // <-- necesario para React.ReactNode

type PartId = "engine" | "wheel_front" | "wheel_back" | "door" | "lights";

export default function CarInteractiveProUpdated() {
  const [selectedPart, setSelectedPart] = useState<PartId | null>(null);

  // definición de partes (iconos sólo para la columna izquierda)
  const parts: {
    id: PartId;
    label: string;
    icon: React.ReactNode;   // <-- CORREGIDO
    x: string;
    y: string;
  }[] = [
    { id: "engine", label: "Motor", icon: <Cog />, x: "28%", y: "48%" },
    { id: "wheel_front", label: "Llanta Delantera", icon: <CircleDot />, x: "82%", y: "72%" },
    { id: "wheel_back", label: "Llanta Trasera", icon: <CircleDot />, x: "18%", y: "72%" },
    { id: "door", label: "Puerta", icon: <DoorClosed />, x: "50%", y: "55%" },
    { id: "lights", label: "Faros", icon: <Lightbulb />, x: "90%", y: "48%" },
  ];

  const descriptions: Record<PartId, string> = {
    engine:
      "El motor es el corazón del vehículo. Mantenimiento preventivo asegura potencia, menor consumo y mayor vida útil.",
    wheel_front:
      "Llantas delanteras: controlan dirección y estabilidad — revisiones periódicas evitan desgaste irregular.",
    wheel_back:
      "Llantas traseras: aportan equilibrio y tracción. Revisamos presión, alineación y estado de banda.",
    door:
      "Puertas: charnelas, cierres y sellos. Lubricación y ajuste para evitar filtraciones y ruidos.",
    lights:
      "Faros: garantizan visibilidad. Revisamos iluminación, alineado y sustitución de bombillas si es necesario.",
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 p-6 mt-11">
      <h2 className="text-3xl font-bold text-center mb-7">
        Revisión Inteligente del Vehículo — Toca una Parte
      </h2>

      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Columna izquierda */}
        <aside className="w-full md:w-56 ">
          <div className="bg-white/5 border border-gray-800 rounded-2xl p-4 shadow-sm sticky top-24">
            <p className="text-sm font-bold mb-3">Partes del vehículo</p>

            <div className="flex flex-col gap-3">
              {parts.map((p) => (
                <motion.button
                  key={p.id}
                  onClick={() => setSelectedPart(p.id)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg transition
                    ${selectedPart === p.id ? "bg-[#F5C32E]/20 border border-[#F5C32E]" : "hover:bg-white/5"}`}
                  aria-pressed={selectedPart === p.id}
                >
                  <span
                    className="p-2 rounded-full flex items-center justify-center"
                    style={{ background: selectedPart === p.id ? "#F5C32E" : "transparent" }}
                  >
                    <span style={{ color: selectedPart === p.id ? "#000" : "#F5C32E" }}>
                      {p.icon}
                    </span>
                  </span>

                  <div className="flex-1">
                    <div className={`font-medium ${selectedPart === p.id ? "text-black" : "text-black"}`}>
                      {p.label}
                    </div>
                    <div className="text-xs text-gray-600">Toca para ver detalles</div>
                  </div>

                  <ChevronRight className={`text-sm ${selectedPart === p.id ? "text-gray-500" : "text-gray-800"}`} />
                </motion.button>
              ))}
            </div>
          </div>
        </aside>

        {/* Columna derecha */}
        <div className="relative flex-1 bg-transparent rounded-lg">
          {selectedPart && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18 }}
              className="absolute z-30 top-4 left-4 w-80 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-xl p-4"
            >
              <div className="flex items-start gap-3">
                <div className="text-[#F5C32E]">
                  {parts.find((pp) => pp.id === selectedPart)?.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {parts.find((pp) => pp.id === selectedPart)?.label}
                  </h3>
                  <p className="text-sm text-gray-700 mt-2">
                    {descriptions[selectedPart]}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          <div className="relative w-full overflow-hidden rounded-xl">
            <img
              src="/img/car/autogpt.png"
              alt="Diagrama del vehículo"
              className="w-full h-auto object-contain"
              draggable={false}
            />

            {parts.map((p) => (
              <motion.button
                key={p.id}
                onClick={() => setSelectedPart(p.id)}
                whileHover={{ scale: 1.18 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                style={{ left: p.x, top: p.y }}
                aria-label={p.label}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-2xl border-4
                    ${selectedPart === p.id ? "bg-white border-[#F5C32E]" : "bg-white/90 border-white/80"}`}
                >
                  <div style={{ color: "#F5C32E" }} className="w-6 h-6">
                    {p.icon}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
