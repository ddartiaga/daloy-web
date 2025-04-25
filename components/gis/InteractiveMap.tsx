"use client";

import { useRef, useEffect } from "react";

import { Map, IControl, GeolocateControl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

import MapboxDraw from "maplibre-gl-draw";
import "maplibre-gl-draw/dist/mapbox-gl-draw.css";
import { SettingsControl } from "./SettingsButtonControl";

type MapboxDrawControl = MapboxDraw & IControl;

const InteractiveMap = () => {
  // const [designerMode, setDesignerMode] = useState(false);
  // const mapModeRef = useRef<IControl | undefined>(undefined);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | undefined>(undefined);
  const mapDrawRef = useRef<MapboxDraw | undefined>(undefined);

  const apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;

  useEffect(() => {
    const map = new Map({
      container: mapContainerRef.current!,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
      center: [120.9367, 14.3294], // Dasmariñas
      zoom: 12,
      minZoom: 10,
      doubleClickZoom: false,
    });

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        line_string: true,
        point: true,
        trash: true,
      },
    }) as MapboxDrawControl;

    map.on("draw.create", (e) => {
      console.log("Feature created:", e.features);
    });

    map.on("draw.update", (e) => {
      console.log("Feature updated:", e.features);
    });

    map.on("draw.delete", (e) => {
      console.log("Feature deleted:", e.features);
    });

    map.on("dblclick", (e) => {
      console.log("dbclick", e);
      e.preventDefault();

      const features = map.queryRenderedFeatures(e.point);

      // Filter only features from the Draw source
      const drawnFeature = features.find(
        (f) =>
          f.source === "mapbox-gl-draw-cold" ||
          f.source === "mapbox-gl-draw-hot"
      );

      if (drawnFeature) {
        const geometryType = drawnFeature.geometry?.type;
        console.log(geometryType);
        console.log(drawnFeature);
      }
    });

    map.on("load", () => {
      //map.addControl(new NavigationControl(), "top-right");

      const geoLocate = map.addControl(
        new GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
          },
          trackUserLocation: false,
        }),
        "top-right"
      );

      geoLocate.on("geolocate", () => {
        if (map.getLayer("geolocateAccuracyCircle")) {
          map.setLayoutProperty(
            "geolocateAccuracyCircle",
            "visibility",
            "none"
          );
        }
      });

      map.addControl(draw);
      map.addControl(SettingsControl());
    });

    mapRef.current = map;
    mapDrawRef.current = draw;

    return () => {
      mapRef.current = undefined;
      mapDrawRef.current = undefined;
    };
  }, [apiKey]);

  return (
    <div ref={mapContainerRef} style={{ height: "100vh", width: "100%" }}></div>
  );
};

export default InteractiveMap;
