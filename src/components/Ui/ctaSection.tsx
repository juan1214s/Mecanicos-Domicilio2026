import { AnalyticsEvents, EventLabels } from "../../constants/enums";
import { getCurrentPageName, pushDataLayerEvent } from "../../utils/analytics";

export default function CTASection() {
  return (
    <section className="w-full bg-[#2e2e2e] py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        {/* TITULO */}
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          ¿Tu vehículo falló?
          <br />
          <span className="text-[#F5C32E]">Llegamos hasta donde estés.</span>
        </h2>

        {/* TEXTO */}
        <p className="text-gray-300 mt-4 max-w-2xl text-lg">
          Mecánicos certificados a domicilio, diagnóstico inmediato y servicio
          profesional sin salir de casa.
        </p>

        {/* BOTÓN */}
        <a
          href="tel:+573177123333" onClick={() => {
            pushDataLayerEvent({
              event: AnalyticsEvents.CALL_CLICK,
              event_category: "conversion",
              event_label: EventLabels.CTASECTION,
              page_name: getCurrentPageName(),
            })
          }}
          className="px-6 py-3 mt-3 bg-[#FFCC33] text-black font-bold rounded-lg shadow-xl hover:scale-105 transition"
        >
          Llámanos ahora
        </a>
      </div>
    </section>
  );
}
