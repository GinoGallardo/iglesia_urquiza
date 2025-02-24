import FrenteIglesia from "/assets/iglesia-frente.png"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Maps() {
  return (
    <MapContainer center={[-34.5761956, -58.4920701]} zoom={16} style={{ height: "300px", width: "100%", position: "relative", zIndex: "0" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[-34.5761956, -58.4920701]}>
        <Popup className="flex flex-col gap-1">
          <h2>Iglesia de Urquiza</h2>
          <h5>Franklin D. Roosevelt 5525</h5>
          <h5>Villa Urquiza, CABA</h5>
          <img className="w-15" src={FrenteIglesia} alt="Frente de la Iglesia" />
          <a 
            href="https://www.google.com.ar/maps/place/Iglesia+Urquiza/@-34.5761956,-58.4920701,20.5z/data=!4m6!3m5!1s0x95bcb7b6f7e06811:0x3583d74c3a724590!8m2!3d-34.5760746!4d-58.4922256!16s%2Fg%2F11q26dzl7y?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
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
