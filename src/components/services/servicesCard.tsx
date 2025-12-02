import { Card } from "flowbite-react";
import type ServicesCardDto from "../../Dto/serviceDto";

export default function ServicesCard({ title, description, img }: ServicesCardDto) {
  return (
    <Card className="cardService-custom bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden max-w-sm mx-auto border-0">
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />

      <div className="p-4">
        <h5 className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </h5>
        <p className="text-gray-700 text-sm">
          {description}   
        </p>
      </div>
    </Card>
  );
}
