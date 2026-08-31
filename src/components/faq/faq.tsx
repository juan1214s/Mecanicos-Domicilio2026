import { useState } from "react";
import { ChevronRight } from "lucide-react";
import faqs from "../../assets/utilities/faq.json";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-4 bg-[#F6F6F6]" role="region" aria-labelledby="faq-heading">
      <div className="mt-20">
        <h2 id="faq-heading" className="text-center font-bold text-4xl mb-10">
          Preguntas Frecuentes
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Imagen izquierda */}
        <div className="flex justify-center">
          <img
            loading="lazy"
            src="/img/img4.webp"
            alt="Ilustración de preguntas frecuentes sobre mecánica a domicilio"
            width={600}
            height={400}
            className="w-full max-w-xl shadow-lg"
          />
        </div>

        {/* FAQ derecha */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-700 rounded-xl bg-[#1E1E1E] p-4"
              >
                <button
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-button-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  tabIndex={0}
                  style={{ background: "none", border: "none", padding: 0 }}
                >
                  <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                    <span className="text-[#F5C32E]">•</span> {item.q}
                  </h3>
                  <ChevronRight
                    className="text-[#F5C32E] shrink-0 transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(90deg)" : "none" }}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className={`faq-panel ${isOpen ? "faq-panel--open" : ""}`}
                >
                  <div>
                    <div className="text-gray-300 mt-3">{item.a}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
