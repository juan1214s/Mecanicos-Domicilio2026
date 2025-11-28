export default function Reviews() {
  const reviewsjson = [
    {
      name: "Carlos M.",
      text: "Llegaron a mi casa en 30 minutos. Diagnóstico rápido y reparación el mismo día. Súper recomendados.",
      stars: 5,
    },
    {
      name: "Juliana R.",
      text: "Transparencia total. Me mostraron el daño y el precio antes de reparar. Excelente servicio.",
      stars: 5,
    },
    {
      name: "Andrés P.",
      text: "Muy profesionales. Me salvaron un domingo cuando mi carro no encendía. Taller 100% confiable.",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto px-4">

        {/* TÍTULO */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Opiniones de Nuestros Clientes
          </h2>
          <p className="text-gray-600 mt-2">
            Servicio a domicilio rápido, seguro y profesional.
          </p>
        </div>

        {/* GRID RESEÑAS */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviewsjson.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* ESTRELLAS */}
              <div className="text-yellow-500 text-xl mb-3">
                {"★".repeat(review.stars)}
              </div>

              {/* TEXTO */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                “{review.text}”
              </p>

              {/* NOMBRE */}
              <h4 className="font-semibold text-gray-900">— {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
