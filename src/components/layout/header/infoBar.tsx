import { ClockIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { AnalyticsEvents, EventLabels, PageNames } from "../../../constants/enums";

export default function InfoBar({ showInfo }: { showInfo: boolean }) {
  return (
    <div
      className={`text-white hidden md:block fixed top-0 left-0 w-full bg-black z-50 text-sm transition-all duration-300
        ${showInfo ? "opacity-100 h-auto py-1" : "opacity-0 h-0 overflow-hidden"
        }`}
    >
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3 px-4">
        <div className="flex items-center gap-2">
          <ClockIcon className="h-5 w-5" />
          <p className="mx-2">Lun - Vie: 05:00 AM – 06:00 PM</p>
          <p>Sáb - Dom: 06:00 AM – 12:00 PM</p>
        </div>

        <div className="flex items-center gap-2">
          <PhoneIcon className="h-5 w-5" />
          <p>+57 317 712 3333</p>
        </div>

        <div className="flex items-center gap-2">
          <MapPinIcon className="h-5 w-5" />
          <p>Cra. 45 #29-50, La Candelaria, Medellín, Antioquia</p>
        </div>

        <div>
          <a
            href="tel:+573177123333"
            onClick={() => {
              window.dataLayer?.push({
                event: AnalyticsEvents.CALL_CLICK,
                event_category: "conversion",
                event_label: EventLabels.HEADER,
                page_name: PageNames.HOME,
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
