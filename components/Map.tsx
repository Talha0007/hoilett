"use client";

import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function MapUpdater() {
  const map = useMap();

  useEffect(() => {
    // We force a resize check immediately, at 100ms, and at 500ms.
    // This covers all speeds of page transitions.
    const resizeValues = [0, 100, 500, 1000];

    const timers = resizeValues.map((delay) =>
      setTimeout(() => {
        map.invalidateSize();
      }, delay),
    );

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [map]);

  return null;
}

// Marker Icon Fix (Required for Next.js)
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export interface MapProps {
  center: [number, number];
  zoom: number;
  title: string;
}

export default function Map({ center, zoom, title }: MapProps) {
  return (
    <div className="h-full w-full rounded-2xl overflow-hidden border border-white/10">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        className="h-full w-full"
        style={{ height: "100%", width: "100%" }}
      >
        <MapUpdater />
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Street Map">
            <TileLayer
              attribution="&copy; OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Satellite View">
            <TileLayer
              attribution="&copy; Esri"
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
        <Marker position={center}>
          <Popup>{title}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
