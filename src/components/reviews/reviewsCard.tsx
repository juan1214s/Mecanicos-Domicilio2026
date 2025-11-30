import type { CommentDto } from "../../Dto/commentDto";

export default function ReviewsCard({ name, text, stars }: CommentDto) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
      {/* Estrellas */}
      <div className="text-yellow-500 text-xl mb-3">
        {"★".repeat(stars)}
      </div>

      {/* Texto */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        “{text}”
      </p>

      {/* Nombre */}
      <h4 className="font-semibold text-gray-900">— {name}</h4>
    </div>
  );
}
