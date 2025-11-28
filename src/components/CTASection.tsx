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
          href="#contacto"
          className="mt-8 inline-block bg-[#F5C32E] text-black font-semibold px-10 py-4 text-lg rounded-xl shadow-lg hover:bg-yellow-400 transition-all"
        >
          Solicitar ayuda ahora
        </a>

      </div>
    </section>
  );
}
