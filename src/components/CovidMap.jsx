import React from "react";
import { GeoJSON, MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CovidMap.css";
export default function CovidMap({ countries }) {
  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };
  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    const confirmText = country.properties.comfirmedText;
    layer.bindPopup(`${name} ${confirmText}`);
  };
  return (
    <MapContainer style={{ height: "90vh" }} zoom={1} center={[20, 100]}>
      <GeoJSON
        style={mapStyle}
        data={countries}
        onEachFeature={onEachCountry}
      />
    </MapContainer>
  );
}
