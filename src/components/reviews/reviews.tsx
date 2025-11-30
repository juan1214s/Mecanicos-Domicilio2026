// src/components/reviews/Reviews.tsx
import comments from "../../utilities/comments.json";
import ReviewsCard from "./reviewsCard";

export default function Reviews() {
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

        {/* Grid Reseñas */}
        <div className="grid md:grid-cols-3 gap-8">
          {comments.map((comment) => (
            <ReviewsCard
              key={comment.id}
              id={comment.id}
              name={comment.name}
              text={comment.text}
              stars={comment.stars}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
