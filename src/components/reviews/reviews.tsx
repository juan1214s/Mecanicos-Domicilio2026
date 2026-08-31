import { useState } from "react";
import comments from "../../assets/utilities/comments.json";
import ReviewsCard from "./reviewsCard";
import Reveal from "../Ui/Reveal";

export default function Reviews() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => setVisibleCount(prev => prev + 3);
  const handleShowLess = () => setVisibleCount(3);

  const visibleComments = comments.slice(0, visibleCount);

  return (
    <section className="py-20 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Opiniones de Nuestros Clientes
          </h2>
          <p className="text-gray-600 mt-2">
            Servicio a domicilio rápido, seguro y profesional.
          </p>
        </div>

        {/* Grid con animación */}
        <div className="grid md:grid-cols-3 gap-8">
          {visibleComments.map((comment, index) => (
            <Reveal key={comment.id} delay={index * 150}>
              <ReviewsCard {...comment} />
            </Reveal>
          ))}
        </div>

        {/* Botones */}
        <div className="flex justify-center mt-10">
          {visibleCount < comments.length ? (
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-[#FFCC33] text-black rounded-lg font-semibold shadow hover:bg-yellow-400 transition"
            >
              Ver más opiniones
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="px-6 py-2 bg-gray-300 text-black rounded-lg font-semibold shadow hover:bg-gray-400 transition"
            >
              Ver menos
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
