import { FaWhatsapp } from "react-icons/fa";
import { AnalyticsEvents, EventLabels } from "../../constants/enums";
import { getCurrentPageName, pushDataLayerEvent } from "../../utils/analytics";

export default function WhatsappFixedIcon() {
  return (
    <a
      href="https://wa.me/573177123333" 
      target="_blank"
      rel="noopener noreferrer"
      onClick={()=>{
        pushDataLayerEvent({
          event: AnalyticsEvents.WHATSAPP_CLICK,
          event_category: "conversion",
          event_label: EventLabels.FLOATING_BUTTON,
          page_name: getCurrentPageName(),
        });
      }}
      className="fixed bottom-5 right-5 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg z-50 flex items-center justify-center"
      aria-label="WhatsApp"
      style={{ width: 56, height: 56 }}
    >
      <FaWhatsapp size={32} />
    </a>
  );
}
