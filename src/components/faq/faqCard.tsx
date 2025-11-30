import { useState } from "react";
import type FaqDto from "../../Dto/faqDto";

export default function FaqCard({ id, q, a }: FaqDto) {
  const [open, setOpen] = useState(false);

  return (
    <div
      data-id={id}
      className="border rounded-xl p-4 mb-3 cursor-pointer transition-all duration-200 bg-white shadow hover:shadow-md"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{q}</h3>

        <span className="text-xl">
          {open ? "−" : "+"}
        </span>
      </div>

      {open && (
        <p className="mt-3 text-gray-600">
          {a}
        </p>
      )}
    </div>
  );
}
