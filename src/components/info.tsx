import { useState, useEffect } from "react";
import { ClockIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Info(){
      const [showInfo, setShowInfo] = useState(true);
    
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setShowInfo(false); // desaparece la info-bar al hacer scroll
          } else {
            setShowInfo(true); // vuelve a aparecer al top
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    return(
        <>
              {/* Barra de info */}
      <div
        className={`w-full info-custom text-sm py-1 transition-all duration-800 ${
          showInfo ? "h-auto opacity-100" : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className=" flex flex-col md:flex-row justify-between items-center gap-3 px-4">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ClockIcon className="h-5 w-5" />
            <p>Sábado a domingo 06:00 AM - 06:00 PM</p>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-5 w-5" />
            <p>+57 310 545 8117</p>
          </div>
          <div className="flex items-center gap-2 text-center md:text-right">
            <MapPinIcon className="h-5 w-5" />
            <p>Cl. 41 #42-07, La Candelaria, Medellín</p>
          </div>
          <div>
            <button className="font-bold py-2 px-4 rounded btnreservcita-custom">
              Reservar cita
            </button>
          </div>
        </div>
      </div>
        </>
    )
}