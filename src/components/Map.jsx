import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icon asset issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
  iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
  shadowUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
});

// Helper component to smoothly animate and fly the map view to the new coordinates
function ChangeView({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, 5); // 5 is a good zoom level to see a whole country
    }
  }, [center, map]);
  return null;
}

const MapComponent = ({ center }) => {
  // Default to [0, 0] if coordinates haven't loaded yet
const mapCenter = center && center.length === 2 ? center : [51.505, -0.09];



  return (
    <MapContainer
      center={mapCenter}
      zoom={5}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%", borderRadius: "0.5rem" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={mapCenter} />
      {/* Listens for coordinate changes and updates the viewport */}
      <ChangeView center={mapCenter} />
    </MapContainer>
  );
};

export default MapComponent;
