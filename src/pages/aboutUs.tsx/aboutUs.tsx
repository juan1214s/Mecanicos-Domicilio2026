import data from "../../assets/utilities/about.json";

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 mt-18 md:mt-30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Sobre Nosotros — Mecánicos a Domicilio en Medellín
          </h1>
          <div className="w-24 h-1 bg-[#FFCC33] mx-auto mt-3"></div>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Más de 12 años ofreciendo soluciones mecánicas rápidas, confiables y a domicilio.
          </p>
        </div>

        {/* Valores */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Nuestros Valores
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {data.values.map((v) => (
              <div key={v.title} className="bg-white shadow-md rounded-2xl p-6 border border-gray-100">
                <h4 className="text-xl font-bold text-[#FFCC33] mb-3">{v.title}</h4>
                <p className="text-gray-700">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ventajas */}
        <div className="md:py-10">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-15">
            ¿Por Qué Elegirnos?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.advantages.map((a, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#FFCC33]/20 mb-4">
                  <span className="text-[#FFCC33] text-3xl">{a.icon}</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{a.title}</h4>
                <p className="text-gray-600">{a.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
