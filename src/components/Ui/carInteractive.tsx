import { useMemo, useState } from "react";
import { Cog, Wrench, Cable, Disc, ChevronRight } from "lucide-react";

type PartId = "gearbox" | "alternator" | "engine" | "brakes";

export default function CarInteractiveProUpdated() {
  const [selectedPart, setSelectedPart] = useState<PartId | null>(null);

  const parts = useMemo(() => [
    { id: "gearbox" as PartId, label: "Reparación de Caja de Cambios", icon: <Wrench />, x: "45%", y: "60%" },
    { id: "alternator" as PartId, label: "Reparación de Alternador", icon: <Cable />, x: "10%", y: "50%" },
    { id: "engine" as PartId, label: "Reparación de Motor", icon: <Cog />, x: "28%", y: "50%" },
    { id: "brakes" as PartId, label: "Sistema de Frenos", icon: <Disc />, x: "78%", y: "65%" },
  ], []);

  const selected = useMemo(
    () => parts.find(p => p.id === selectedPart),
    [selectedPart, parts]
  );

  const descriptions: Record<PartId, string> = {
    gearbox: "La caja de cambios requiere mantenimiento preciso para evitar ruidos, pérdida de fuerza o dificultad al cambiar.",
    alternator: "El alternador mantiene cargada la batería y alimenta el sistema eléctrico.",
    engine: "Reparación y diagnóstico del motor: fugas, ruidos y desempeño general.",
    brakes: "Revisión de pastillas, discos y sistema completo de frenos.",
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 p-6 mt-11">
      <h2 className="text-3xl font-bold text-center mb-7">
        Revisión Inteligente del Vehículo
      </h2>

      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-6">

        {/* IZQUIERDA */}
        <aside className="w-full md:w-58 mt-5">
          <div className="rounded-2xl p-4 shadow-sm sticky top-24">
            <div className="flex flex-col gap-3">
              {parts.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPart(p.id)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                    selectedPart === p.id
                      ? "bg-yellow-200"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <span className="text-yellow-500">{p.icon}</span>

                  <div className="flex-1">
                    <div className="font-medium">{p.label}</div>
                    <div className="text-xs text-gray-500">
                      Toca para ver detalles
                    </div>
                  </div>

                  <ChevronRight />
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* DERECHA */}
        <div className="relative flex-1">

          {selected && (
            <div
              key={selected.id}
              className="pop-in absolute z-30 top-4 left-4 w-80 bg-white border rounded-xl shadow p-4"
            >
              <h3 className="font-semibold text-lg">{selected.label}</h3>
              <p className="text-sm mt-2">
                {descriptions[selected.id]}
              </p>
            </div>
          )}

          {/* IMAGEN */}
          <div className="relative">
            <img
              src="/img/car/autogpt.webp"
              alt="Ilustración interactiva de partes del vehículo"
              width={800}
              height={500}
              loading="lazy"
              decoding="async"
              className="w-full object-contain"
            />

            {parts.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPart(p.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: p.x, top: p.y }}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                    selectedPart === p.id
                      ? "bg-yellow-300"
                      : "bg-white"
                  }`}
                >
                  {p.icon}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}