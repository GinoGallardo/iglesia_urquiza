import type { Iglesia } from "../../types/iglesia";

export function googleMapsDirectionsUrl(iglesia: Iglesia): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${iglesia.lat},${iglesia.lng}`;
}

export function googleMapsPlaceUrl(iglesia: Iglesia): string {
  return `https://www.google.com/maps/search/?api=1&query=${iglesia.lat},${iglesia.lng}`;
}
