"use client";

import { useRef, useEffect } from "react";

import { Map, IControl, GeolocateControl } from "maplibre-gl";
import { Feature, GeoJsonProperties, Geometry } from "geojson";
import "maplibre-gl/dist/maplibre-gl.css";

import MapboxDraw from "maplibre-gl-draw";
import "maplibre-gl-draw/dist/mapbox-gl-draw.css";
import { NewButtonControl } from "./controls/NewButtonControl";

import { useMapStore } from "./store";

type MapboxDrawControl = MapboxDraw & IControl;

type DrawEvent = {
  type: string;
  features: Feature[];
};

const InteractiveMap = () => {
  const drawingMode = useMapStore((state) => state.drawingMode);
  const setDrawnFeature = useMapStore((state) => state.setDrawnFeature);
  const setSelectedFeature = useMapStore((state) => state.setSelectedFeature);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | undefined>(undefined);
  const mapDrawRef = useRef<MapboxDraw | undefined>(undefined);

  const apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;

  // for wider map
  useEffect(() => {
    document?.getElementById("main-content")?.classList.add("no-padding");
    document?.getElementById("child-content")?.classList.add("no-padding");

    return () => {
      document?.getElementById("main-content")?.classList.remove("no-padding");
      document?.getElementById("child-content")?.classList.remove("no-padding");
    };
  }, []);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new Map({
      container: mapContainerRef.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
      center: [120.9367, 14.3294], // Dasmariñas
      zoom: 12,
      minZoom: 10,
    });

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {},
    }) as MapboxDrawControl;

    mapRef.current = map;

    mapRef.current?.addControl(draw);
    mapDrawRef.current = draw;

    mapRef.current.on("load", () => {
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
        if (mapRef.current?.getLayer("geolocateAccuracyCircle")) {
          mapRef.current?.setLayoutProperty(
            "geolocateAccuracyCircle",
            "visibility",
            "none"
          );
        }
      });

      mapRef.current?.addControl(NewButtonControl());
    });

    return () => {
      mapRef.current = undefined;
      mapDrawRef.current = undefined;
    };
  }, [apiKey]);

  useEffect(() => {
    // will be invoke when `drawingMode' is changed

    if (!mapDrawRef.current || !mapDrawRef.current?.getMode) return;

    const onDraw = (e: DrawEvent) => {
      const drawn = e.features[0] as Feature<Geometry, GeoJsonProperties>;
      setDrawnFeature(drawn);

      console.log("draw:", drawn);
    };

    const onView = (e: DrawEvent) => {
      const selected = e.features[0] as Feature<Geometry, GeoJsonProperties>;
      console.log("Selected: ", selected);

      if (selected) {
        setSelectedFeature(selected);
      }
    };

    if (drawingMode) {
      mapDrawRef.current.changeMode(drawingMode);

      console.log("Drawing Mode:", drawingMode);

      if (drawingMode == "simple_select") {
        mapRef.current?.off("draw.create", onDraw);
        mapRef.current?.off("draw.update", onDraw);

        mapRef.current?.on("draw.selectionchange", onView);
      } else {
        mapRef.current?.off("draw.selectionchange", onView);

        mapRef.current?.on("draw.create", onDraw);
        mapRef.current?.on("draw.update", onDraw);

        mapRef.current?.on("draw.delete", (e) => {
          console.log("Feature deleted:", e.features);
        });
      }
    }
  }, [drawingMode]);

  return (
    <>
      <div
        ref={mapContainerRef}
        style={{ height: "87vh", width: "100%" }}
      ></div>
    </>
  );
};

export default InteractiveMap;
