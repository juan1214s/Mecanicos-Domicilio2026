import type { CommentDto } from "../../Dto/commentDto";

export default function ReviewsCard({ name, text, stars }: CommentDto) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow 
      h-[260px] flex flex-col justify-between overflow-hidden">

      {/* Estrellas */}
      <div className="text-yellow-500 text-xl mb-3">
        {"★".repeat(stars)}
      </div>

      {/* Texto limitado para que no crezca */}
      <p className="text-gray-700 leading-relaxed text-sm flex-1 overflow-hidden">
        “{text}”
      </p>

      {/* Nombre */}
      <h4 className="font-semibold text-gray-900 mt-4">— {name}</h4>
    </div>
  );
}
