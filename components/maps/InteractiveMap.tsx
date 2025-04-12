"use client";

import "ol/ol.css";

import { useRef, useEffect } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";

const InteractiveMap = () => {
  const mapRef = useRef(null);

  const mapToken =
    "pk.eyJ1IjoiZGFydGlhZ2EiLCJhIjoiY205Y3huYXh2MHdzcjJxcTQ1M3liMDR5YyJ9.StW4JiXM3-YXJrERYa-GyQ";

  useEffect(() => {
    if (!mapRef.current) return; // prevent map creation if ref is null

    const map = new Map({
      target: mapRef.current, // Tells OpenLayers where to render the map
      layers: [
        new TileLayer({
          source: new XYZ({
            url: `https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/512/{z}/{x}/{y}?access_token=${mapToken}`,
            tileSize: 512,
            attributions:
              '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
          }),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
        projection: "EPSG:3857",
      }),
    });

    return () => map.setTarget(undefined); // Clean up the map if the component unmounts
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}
    />
  );
};

export default InteractiveMap;
