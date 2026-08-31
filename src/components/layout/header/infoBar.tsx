import { Clock, Phone, MapPin } from "lucide-react";
import { AnalyticsEvents, EventLabels } from "../../../constants/enums";
import { getCurrentPageName, pushDataLayerEvent } from "../../../utils/analytics";

export default function InfoBar({ showInfo }: { showInfo: boolean }) {
  return (
    <div
      className={`text-white hidden md:block fixed top-0 left-0 w-full bg-black z-50 text-sm transition-all duration-300
        ${showInfo ? "opacity-100 h-auto py-1" : "opacity-0 h-0 overflow-hidden"
        }`}
    >
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3 px-4">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          <p className="mx-2">Lun - Vie: 07:00 AM – 05:00 PM</p>
          <p>Sáb - Dom: 07:00 AM – 02:00 PM</p>
        </div>

        <div className="flex items-center gap-2">
          <Phone className="h-5 w-5" />
          <p>+57 317 712 3333</p>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          <p>Cra. 45 #29-50, La Candelaria, Medellín, Antioquia</p>
        </div>

        <div>
          <a
            href="tel:+573177123333"
            onClick={() => {
              pushDataLayerEvent({
                event: AnalyticsEvents.CALL_CLICK,
                event_category: "conversion",
                event_label: EventLabels.HEADER,
                page_name: getCurrentPageName(),
              })
            }}
            className="
      inline-flex items-center justify-center
      font-bold py-3 px-6
      rounded bg-[#F5C32E] hover:bg-yellow-400
      text-black shadow-lg
      transition transform hover:scale-105
    "
          >
            Llámanos ahora
          </a>
        </div>
      </div>
    </div>
  );
}
