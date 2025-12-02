import { ClockIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function InfoBar({ showInfo }: { showInfo: boolean }) {
  return (
    <div
      className={`text-white hidden md:block fixed top-0 left-0 w-full bg-black z-50 text-sm transition-all duration-300
        ${showInfo ? "opacity-100 h-auto py-1" : "opacity-0 h-0 overflow-hidden"}`}
    >
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3 px-4">
        <div className="flex items-center gap-2">
          <ClockIcon className="h-5 w-5" />
          <p className="mx-2">Lun - Vie: 05:00 AM – 06:00 PM</p>
          <p>Sáb - Dom: 06:00 AM – 12:00 PM</p>
        </div>

        <div className="flex items-center gap-2">
          <PhoneIcon className="h-5 w-5" />
          <p>+57 310 545 8117</p>
        </div>

        <div className="flex items-center gap-2">
          <MapPinIcon className="h-5 w-5" />
          <p>Cl. 41 #42-07, La Candelaria, Medellín</p>
        </div>

        <div>
          <button className="font-bold py-2 px-4 rounded bg-[#F5C32E] hover:bg-yellow-400 text-black transition">
            Solicitar mecánico
          </button>
        </div>
      </div>
    </div>
  );
}
