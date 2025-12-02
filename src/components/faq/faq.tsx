import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqs from "../../utilities/faq.json";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className=" px-4 bg-[#F6F6F6]">
      <div className="mt-20">
              <h2 className="text-center font-bold text-4xl mb-10">
        Preguntas Frecuentes
      </h2>
      </div>


      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Imagen izquierda */}
        <div className="flex justify-center">
          <img
          loading="lazy"
            src="/img/img4.jpg" 
            alt="Servicio Mecánico a Domicilio"
            className="w-full max-w-xl shadow-lg"
          />
        </div>

        {/* FAQ derecha */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl bg-[#1E1E1E] p-4 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {/* Pregunta */}
              <div className="flex justify-between items-center">
                <p className="text-white font-semibold text-lg flex items-center gap-2">
                  <span className="text-[#F5C32E]">•</span> {item.q}
                </p>

                {/* Icono animado */}
                <motion.span
                  animate={{ rotate: openIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[#F5C32E] text-xl"
                >
                  ▶
                </motion.span>
              </div>

              {/* Respuesta */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-gray-300 mt-3 overflow-hidden"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
