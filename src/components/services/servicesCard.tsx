import { Card } from "flowbite-react";
import type ServicesCardDto from "../../Dto/serviceDto";

export default function ServicesCard({
  title,
  description,
  img,
}: ServicesCardDto) {
  return (
<Card className="cardService-custom bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 
transition-transform duration-300 overflow-hidden max-w-sm h-[420px] mx-auto border-0 flex flex-col">

  <img
    src={img}
    alt={title}
    className="w-full aspect-square object-cover"
    loading="lazy"
  />

  <div className="p-5 flex flex-col gap-3 grow">
    <h5 className="text-xl font-bold text-gray-900">{title}</h5>
    <p className="text-black text-sm leading-relaxed">{description}</p>
  </div>
</Card>

  );
}
