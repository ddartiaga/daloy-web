"use client";

import { useRef, useEffect } from "react";

import { Map, Marker, NavigationControl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const InteractiveMap = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | null>(null);
  const apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;

  const flyToCurrentLocation = (map: Map) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { longitude, latitude } = pos.coords;

          new Marker({ color: "#008DDA" })
            .setLngLat([longitude, latitude])
            .addTo(map);

          //   map.addSource("points", {
          //     type: "geojson",
          //     data: {
          //       type: "FeatureCollection",
          //       features: [
          //         {
          //           type: "Feature",
          //           geometry: {
          //             type: "Point",
          //             coordinates: [longitude, latitude],
          //           },
          //           properties: {},
          //         },
          //       ],
          //     },
          //   });

          //   map.addLayer({
          //     id: "point-layer",
          //     type: "circle",
          //     source: "points",
          //     paint: {
          //       "circle-radius": 5,
          //       "circle-color": "#e11d48", // rose-600
          //       "circle-stroke-width": 2,
          //       "circle-stroke-color": "#ffffff",
          //     },
          //   });

          map.flyTo({
            center: [longitude, latitude],
            zoom: 12,
          });
        },
        (err) => {
          console.info("Navigator API is unavailable or not working", err);
        },
        {
          enableHighAccuracy: true, // Try to use GPS
          timeout: 10000,
          maximumAge: 0,
        }
      );
    }
  };

  useEffect(() => {
    const map = new Map({
      container: mapContainerRef.current!,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
      center: [120.9367, 14.3294], // Dasmariñas
      zoom: 12,
    });

    map.addControl(new NavigationControl(), "top-right");

    map.on("load", () => {
      flyToCurrentLocation(map);
    });

    mapRef.current = map;

    return () => {
      mapRef.current = null;
    };
  }, [apiKey]);

  return (
    <div ref={mapContainerRef} style={{ height: "100vh", width: "100%" }}></div>
  );
};

export default InteractiveMap;
