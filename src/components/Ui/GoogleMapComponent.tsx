type Props = {
  initialCenter?: { lat: number; lng: number };
  zoom?: number;
  height?: string;
};

/**
 * Mapa de ubicación mediante iframe embebido de Google Maps.
 * No usa la Maps JavaScript API: es gratis, no requiere API key ni
 * cuenta de facturación, y no carga librería de mapas en el bundle.
 */
export default function GoogleMapComponent({
  initialCenter = { lat: 6.2309011956953, lng: -75.57278711932226 },
  zoom = 15,
  height = "420px",
}: Props) {
  const { lat, lng } = initialCenter;
  const src = `https://www.google.com/maps?q=${lat},${lng}&hl=es&z=${zoom}&output=embed`;

  return (
    <>
      <div className="w-full flex justify-center mt-5">
        <h2 className="text-2xl font-bold mb-3 text-gray-800">
          📍 Ubicación de Nuestro Taller
        </h2>
      </div>

      <div className="rounded-xl overflow-hidden shadow-lg mt-2">
        <iframe
          title="Ubicación de Mecánicos a Domicilio Medellín en Google Maps"
          src={src}
          className="w-full block"
          style={{ border: 0, height }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </>
  );
}
