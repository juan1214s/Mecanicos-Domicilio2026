// src/components/GoogleMapComponent.tsx
/// <reference types="google.maps" />
import { useCallback, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

type Props = {
  initialCenter?: { lat: number; lng: number };
  zoom?: number;
  height?: string;
};

const containerStyle = (height: string) => ({
  width: "100%",
  height,
});

export default function GoogleMapComponent({
  initialCenter = { lat: 6.239882391443229, lng: -75.56534188568509 },
  zoom = 15,
  height = "420px",
}: Props) {
  // Lee la key desde env (Vite)
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY as string | undefined;

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey ?? "", // NO dejes la key hardcodeada
    libraries: ["places"], // agrega 'places' si usarás Autocomplete / SearchBox
  });

  const [center, setCenter] = useState(initialCenter);
  const [markerPos, setMarkerPos] = useState<{ lat: number; lng: number } | null>(initialCenter);

  const onMapClick = useCallback((e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setMarkerPos({ lat, lng });
      setCenter({ lat, lng });
    }
  }, []);

  if (loadError) {
    return <div>Error cargando el mapa</div>;
  }

  if (!isLoaded) {
    return <div>Cargando mapa...</div>;
  }

  return (
    <div className="rounded-xl overflow-hidden shadow-lg mt-16">
      <GoogleMap
        mapContainerStyle={containerStyle(height)}
        center={center}
        zoom={zoom}
        onClick={onMapClick}
      >
        {markerPos && <Marker position={markerPos} />}
      </GoogleMap>
    </div>
  );
}
