import type ServicesCardDto from "../../Dto/serviceDto";

export default function ServicesCard({
  title,
  description,
  img,
}: ServicesCardDto) {
  return (
    <div
      className="
        cardService-custom bg-white rounded-lg shadow-md hover:shadow-xl
        hover:scale-105 transition-transform duration-300 overflow-hidden
        max-w-sm mx-auto border-0 flex flex-col
        min-h-fit md:h-[420px]
      "
    >
      <img
        src={img}
        alt={`Imagen del servicio: ${title}`}
        loading="lazy"
        width={400}
        height={224}
        className="w-full object-cover h-auto md:h-56 rounded-t-lg"
      />

      <div className="p-4 md:p-5 flex flex-col gap-3 grow">
        <h5 className="text-lg md:text-xl font-bold text-gray-900">{title}</h5>
        <p className="text-black text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
