import { useState } from "react";
import { motion } from "framer-motion";
import { Cog, Wrench, Cable, Disc, ChevronRight } from "lucide-react";
import React from "react";

type PartId =
  | "gearbox"
  | "alternator"
  | "engine"
  | "brakes";

export default function CarInteractiveProUpdated() {
  const [selectedPart, setSelectedPart] = useState<PartId | null>(null);

  const parts: {
    id: PartId;
    label: string;
    icon: React.ReactNode;
    x: string;
    y: string;
  }[] = [
    // Caja de Cambios
    {
      id: "gearbox",
      label: "Reparación de Caja de Cambios",
      icon: <Wrench />,
      x: "45%",
      y: "60%",
    },

    // Alternador
    {
      id: "alternator",
      label: "Reparación de Alternador",
      icon: <Cable />,
      x: "10%",
      y: "50%",
    },

    // Motor General
    {
      id: "engine",
      label: "Reparación de Motor",
      icon: <Cog />,
      x: "28%",
      y: "50%",
    },

    // Frenos
    {
      id: "brakes",
      label: "Sistema de Frenos",
      icon: <Disc />,
      x: "78%",
      y: "65%",
    },
  ];

  const descriptions: Record<PartId, string> = {
    gearbox:
      "La caja de cambios requiere mantenimiento preciso para evitar ruidos, pérdida de fuerza o dificultad al cambiar. Ajustes, lubricación y revisión completa.",
    alternator:
      "El alternador mantiene cargada la batería y alimenta el sistema eléctrico. Revisamos poleas, voltaje, ruidos y reemplazo en caso necesario.",
    engine:
      "Reparación y diagnóstico del motor: fugas, ruidos, sensores, filtros, correas y desempeño general para mantener tu vehículo al máximo.",
    brakes:
      "El sistema de frenos es vital para tu seguridad. Revisamos pastillas, discos, líquido y mangueras para frenar con precisión.",
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 p-6 mt-11">
      <h2 className="text-3xl font-bold text-center mb-7">
        Revisión Inteligente del Vehículo — Selecciona una Parte
      </h2>

      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        {/* IZQUIERDA */}
        <aside className="w-full md:w-58 mt-5">
          <div className="bg-white/5 border border-gray-800 rounded-2xl p-4 shadow-sm sticky top-24">
            <p className="text-sm font-bold mb-3">Servicios Disponibles</p>

            <div className="flex flex-col gap-3">
              {parts.map((p) => (
                <motion.button
                  key={p.id}
                  onClick={() => setSelectedPart(p.id)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg transition ${
                    selectedPart === p.id
                      ? "bg-[#F5C32E]/20 border border-[#F5C32E]"
                      : "hover:bg-white/5"
                  }`}
                  aria-pressed={selectedPart === p.id}
                >
                  <span
                    className="p-2 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        selectedPart === p.id ? "#F5C32E" : "transparent",
                    }}
                  >
                    <span
                      style={{
                        color: selectedPart === p.id ? "#000" : "#F5C32E",
                      }}
                    >
                      {p.icon}
                    </span>
                  </span>

                  <div className="flex-1">
                    <div
                      className={`font-medium ${
                        selectedPart === p.id ? "text-black" : "text-black"
                      }`}
                    >
                      {p.label}
                    </div>
                    <div className="text-xs text-gray-600">
                      Toca para ver detalles
                    </div>
                  </div>

                  <ChevronRight
                    className={`text-sm ${
                      selectedPart === p.id
                        ? "text-gray-500"
                        : "text-gray-800"
                    }`}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </aside>

        {/* DERECHA */}
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

          {/* Imagen del carro */}
          <div className="relative w-full overflow-hidden rounded-xl">
            <img
            loading="lazy"
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
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-2xl border-4 ${
                    selectedPart === p.id
                      ? "bg-white border-[#F5C32E]"
                      : "bg-white/90 border-white/80"
                  }`}
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
