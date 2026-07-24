import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png?url";
import iconUrl from "leaflet/dist/images/marker-icon.png?url";
import shadowUrl from "leaflet/dist/images/marker-shadow.png?url";
import "leaflet/dist/leaflet.css";
import { env } from "../../lib/env";

// Fix default marker icons under Vite
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

function Maps() {
  const position: [number, number] = [env.mapLat, env.mapLng];

  return (
    <MapContainer
      center={position}
      zoom={env.mapZoom}
      style={{
        height: "100%",
        minHeight: "320px",
        width: "100%",
        position: "relative",
        zIndex: "0",
      }}
      aria-label="Mapa de ubicación de Iglesia de Urquiza"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup className="flex flex-col gap-1">
          <h2>Iglesia de Urquiza</h2>
          <h5>Franklin D. Roosevelt 5525</h5>
          <h5>Villa Urquiza, CABA</h5>
          <picture>
            <source srcSet="/assets/iglesia-frente.avif" type="image/avif" />
            <source srcSet="/assets/iglesia-frente.webp" type="image/webp" />
            <img
              className="w-15"
              src="/assets/iglesia-frente.png"
              alt="Frente de la Iglesia"
              loading="lazy"
              decoding="async"
              width={120}
              height={80}
            />
          </picture>
          <a
            href={env.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
          >
            Ir Ahora
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Maps;
