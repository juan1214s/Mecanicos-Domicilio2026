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
          href="https://wa.me/573177123333?text=Hola,%20vengo%20desde%20la%20web.%20Necesito%20información%20sobre%20un%20servicio%20mecánico.%20🙂"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="m-3 font-bold py-2 px-4 rounded bg-[#F5C32E] hover:bg-yellow-400 text-black transition">
            Solicitar mecánico
          </button>
        </a>
      </div>
    </section>
  );
}
