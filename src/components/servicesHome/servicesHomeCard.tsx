import { Card } from "flowbite-react";
import type ServicesCardDto from "../../Dto/serviceDto";

export default function ServicesHomeCard({
  title,
  description,
  img,
}: ServicesCardDto) {
  return (
    <Card
      className="
        cardService-custom bg-white rounded-lg shadow-md hover:shadow-xl 
        hover:scale-105 transition-transform duration-300 overflow-hidden 
        max-w-sm mx-auto border-0 flex flex-col
        min-h-fit md:h-[420px]         /* móvil crece, PC fijo */
      "
    >
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="
          w-full object-cover 
          h-auto md:h-56                  /* imagen pequeña en móvil, mayor en pc */
          rounded-t-lg
        "
      />

      <div className="p-4 md:p-5 flex flex-col gap-3 grow">
        <h5 className="text-lg md:text-xl font-bold text-gray-900">{title}</h5>
        <p className="text-black text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
}
