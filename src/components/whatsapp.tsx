import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFixedIcon() {
  return (
    <a
      href="https://wa.me/573105451817" // Cambia por tu número real con código internacional
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg z-50 flex items-center justify-center"
      aria-label="WhatsApp"
      style={{ width: 56, height: 56 }}
    >
      <FaWhatsapp size={32} />
    </a>
  );
}
