import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png?url";
import iconUrl from "leaflet/dist/images/marker-icon.png?url";
import shadowUrl from "leaflet/dist/images/marker-shadow.png?url";
import "leaflet/dist/leaflet.css";
import type { Iglesia } from "../../types/iglesia";

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const brandIcon = new L.DivIcon({
  className: "",
  html: `<span style="display:block;width:14px;height:14px;border-radius:9999px;background:#5f0404;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.35)"></span>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

const selectedIcon = new L.DivIcon({
  className: "",
  html: `<span style="display:block;width:18px;height:18px;border-radius:9999px;background:#5f0404;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.45)"></span>`,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

function FlyToSelected({ iglesia }: { iglesia: Iglesia | null }) {
  const map = useMap();

  useEffect(() => {
    if (!iglesia) return;
    map.flyTo([iglesia.lat, iglesia.lng], 15, { duration: 0.8 });
  }, [iglesia, map]);

  return null;
}

function FitBounds({ iglesias }: { iglesias: Iglesia[] }) {
  const map = useMap();

  useEffect(() => {
    if (iglesias.length === 0) return;
    const bounds = L.latLngBounds(
      iglesias.map((i) => [i.lat, i.lng] as [number, number])
    );
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 12 });
  }, [iglesias, map]);

  return null;
}

interface UbicacionesMapProps {
  iglesias: Iglesia[];
  seleccionada: Iglesia | null;
  onSelect: (iglesia: Iglesia) => void;
}

export default function UbicacionesMap({
  iglesias,
  seleccionada,
  onSelect,
}: UbicacionesMapProps) {
  const center: [number, number] = seleccionada
    ? [seleccionada.lat, seleccionada.lng]
    : [-34.65, -58.4];

  return (
    <MapContainer
      center={center}
      zoom={11}
      className="h-full w-full"
      style={{ height: "100%", width: "100%", zIndex: 0 }}
      aria-label="Mapa de iglesias Hermanos Libres"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {!seleccionada && <FitBounds iglesias={iglesias} />}
      <FlyToSelected iglesia={seleccionada} />
      {iglesias.map((iglesia) => (
        <Marker
          key={iglesia.id}
          position={[iglesia.lat, iglesia.lng]}
          icon={
            seleccionada?.id === iglesia.id ? selectedIcon : brandIcon
          }
          eventHandlers={{
            click: () => onSelect(iglesia),
          }}
        >
          <Popup>
            <strong>{iglesia.nombre}</strong>
            <br />
            {iglesia.direccion}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
