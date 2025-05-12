"use client";

import { useRef, useEffect, useState } from "react";
import { Map, IControl, GeolocateControl } from "maplibre-gl";
import {
  Feature,
  FeatureCollection,
  GeoJsonProperties,
  Geometry,
} from "geojson";
import "maplibre-gl/dist/maplibre-gl.css";
import MapboxDraw from "maplibre-gl-draw";
import "maplibre-gl-draw/dist/mapbox-gl-draw.css";
import { NewButtonControl } from "./controls/NewButtonControl";
import { useMapStore } from "@/components/map/store";
import { getReverseGeocodeAddress } from "./lib/reverse-geocoding";

import ContextMenu from "./controls/ContextMenu";
import { GeoFeature } from "@prisma/client";

type MapboxDrawControl = MapboxDraw & IControl;

type DrawEvent = {
  type: string;
  features: Feature<Geometry, GeoJsonProperties>[];
};

const InteractiveMap = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map>(undefined);
  const mapDrawRef = useRef<MapboxDrawControl>(undefined);
  const apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;

  // store
  const drawingMode = useMapStore((state) => state.drawingMode);
  const drawnFeature = useMapStore((state) => state.drawnFeature);
  const setDrawnFeature = useMapStore((state) => state.setDrawnFeature);
  const setSelectedFeature = useMapStore((state) => state.setSelectedFeature);
  const setDrawnReverseGeoCode = useMapStore(
    (state) => state.setDrawnReverseGeoCode
  );

  // helper functions
  const updateReverseGeoCodeAddress = async (feature: Feature) => {
    if (!apiKey) return;

    try {
      if (
        feature.geometry.type !== "GeometryCollection" &&
        "coordinates" in feature.geometry
      ) {
        const [lng, lat] = feature.geometry.coordinates as [number, number];

        // Call the reverse geocode function using your API key
        const { address, resultCount } = await getReverseGeocodeAddress(
          lng,
          lat,
          apiKey
        );

        console.log("Geocoded address:", address, "with results:", resultCount);

        setDrawnReverseGeoCode(address);
      }
    } catch (error) {
      console.error("Reverse geocoding failed", error);
    }
  };

  const loadCustomerGeometries = async () => {
    try {
      const response = await fetch("/api/geo/customers");
      const serverGeo: GeoFeature[] = await response.json();

      console.log("serverGeo", serverGeo);

      // Construct a GeoJSON FeatureCollection from the received features.
      const geodata: FeatureCollection<Geometry, GeoJsonProperties> = {
        type: "FeatureCollection",
        features: serverGeo.map((f: GeoFeature) => ({
          type: "Feature",
          id: f.id,
          geometry: (f.feature as unknown as { geometry: Geometry }).geometry, // Ensure proper typing
          properties: f.properties as GeoJsonProperties, // Ensure proper typing
        })),
      };

      console.log("geodata", geodata);

      mapRef.current?.addSource("point-source", {
        type: "geojson",
        data: geodata,
      });

      mapRef.current?.addLayer({
        id: "point-layer",
        type: "circle",
        source: "point-source",
        paint: {
          "circle-radius": 4,
          "circle-color": "#ff5733",
          "circle-stroke-width": 3,
          "circle-stroke-color": "#fff",
        },
      });
    } catch (error) {
      console.error("Failed to fetch geo features", error);
    }
  };

  // map event handlers
  const onClick = () => {
    if (!mapDrawRef.current) return;

    const selectedFeatures = mapDrawRef.current.getSelected();
    const activeFeatureId = activeFeatureRef.current?.id;
    // if (
    //   selectedFeatures?.features.length &&
    //   selectedFeatures.features[0].id !== activeFeatureId
    // ) {
    //   console.warn("Clicked blocked: not the active feature");
    //   mapDrawRef.current.changeMode("simple_select" as string, {
    //     featureIds: [activeFeatureId],
    //   });
    // }
  };

  const onCreate = async (e: DrawEvent) => {
    const feature = e.features[0];
    setDrawnFeature({ ...feature }); // create new object for state update
    console.log("Created:", feature);

    updateReverseGeoCodeAddress(feature);

    // If the feature is a point, calculate its pixel position and show the context menu.
    // if (feature.geometry.type === "Point" && mapRef.current) {
    //   const [lng, lat] = feature.geometry.coordinates as [number, number];
    //   const pixel = mapRef.current.project([lng, lat]);
    //   setContextMenuPosition({ x: pixel.x, y: pixel.y });
    //   setContextMenuVisible(true);
    // }
  };

  const onUpdate = (e: DrawEvent) => {
    const feature = e.features[0];
    const updatedId = e.features[0].id;
    console.log("update", activeFeatureRef.current?.id);

    if (updatedId !== activeFeatureRef.current?.id) {
      // console.warn("Update blocked: not the active feature");
      // mapDrawRef.current?.changeMode("simple_select" as string, {
      //   featureIds: [activeFeatureRef.current?.id],
      // });
    } else {
      updateReverseGeoCodeAddress(feature);
      setDrawnFeature({ ...feature }); // create new object for state update
    }
  };

  const onDelete = (e: DrawEvent) => {
    const deletedId = e.features[0].id;
    // if (deletedId !== activeFeatureRef.current?.id) {
    //   console.warn("Delete blocked: not the active feature");
    //   mapDrawRef.current?.changeMode("simple_select" as string, {
    //     featureIds: [activeFeatureRef.current?.id],
    //   });
    // }
  };

  const onModeChange = (e: { mode: string }) => {
    console.log("New mode:", e.mode);
  };

  const onSelectionChange = (e: DrawEvent) => {
    console.log("Selected features:", e.features);

    if (e.features.length > 0) {
      if (e.features.length == 1) {
        const selectedFeature = e.features[0];
        setSelectedFeature(selectedFeature);
      } else {
        console.log("multiple features are selected");
      }
    }

    if (e.features.length > 0) {
      //showFeatureDetails(e.features[0]);
    } else {
      //hideSidebar();
    }
  };

  // State for context menu
  // const [contextMenuVisible, setContextMenuVisible] = useState(false);
  // const [contextMenuPosition, setContextMenuPosition] = useState({
  //   x: 0,
  //   y: 0,
  // });

  // for wider map
  useEffect(() => {
    document?.getElementById("main-content")?.classList.add("no-padding");
    document?.getElementById("child-content")?.classList.add("no-padding");

    return () => {
      document?.getElementById("main-content")?.classList.remove("no-padding");
      document?.getElementById("child-content")?.classList.remove("no-padding");
    };
  });

  // when drawing mode change
  useEffect(() => {
    if (!mapDrawRef.current || !drawingMode) return;

    mapDrawRef.current.changeMode(drawingMode);
  }, [drawingMode]);

  // when drawnFeature is updated, update the ref
  const activeFeatureRef = useRef(drawnFeature);
  useEffect(() => {
    console.log("Drawn Feature updated:", drawnFeature);
    activeFeatureRef.current = drawnFeature;
  }, [drawnFeature]);

  useEffect(() => {
    if (!mapContainerRef.current || !apiKey) return;

    const map = new Map({
      container: mapContainerRef.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
      center: [120.9367, 14.3294],
      zoom: 12,
      minZoom: 10,
    });

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {},
    }) as MapboxDrawControl;

    mapRef.current = map;
    mapDrawRef.current = draw;

    map.addControl(draw);

    const geoLocate = new GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
      trackUserLocation: false,
    });

    map.addControl(geoLocate, "top-right");

    geoLocate.trigger();
    geoLocate.on("geolocate", () => {
      const layerId = "geolocateAccuracyCircle";
      if (map.getLayer(layerId)) {
        map.setLayoutProperty(layerId, "visibility", "none");
      }
    });

    mapRef.current.addControl(NewButtonControl());

    mapRef.current.on("click", onClick);
    mapRef.current.on("draw.create", onCreate);
    mapRef.current.on("draw.update", onUpdate);
    mapRef.current.on("draw.delete", onDelete);
    mapRef.current.on("draw.modechange", onModeChange);
    mapRef.current.on("draw.selectionchange", onSelectionChange);

    map.on("click", "point-layer", (e) => {
      // Check if there are any features under the click event
      if (e.features && e.features.length > 0) {
        console.log("onClick point-layer", e.features);
        const feature = e.features[0];
        const geometry = feature.geometry;

        // Log the geometry (coordinates for a Point, or more details for other types)
        console.log("Clicked feature geometry:", geometry);

        // You can access specific properties of the geometry, like:
        if (geometry.type === "Point") {
          console.log("Point coordinates:", geometry.coordinates);
        } else if (geometry.type === "Polygon") {
          console.log("Polygon coordinates:", geometry.coordinates);
        }
      }
    });

    mapRef.current.on("load", (e) => {
      console.log("OnLoad", e);

      loadCustomerGeometries();
    });

    return () => {
      map.remove();
      mapRef.current = undefined;
      mapDrawRef.current = undefined;
    };
  }, [apiKey, setDrawnFeature]);

  return (
    <div ref={mapContainerRef} style={{ height: "87vh", width: "100%" }}>
      {/* {contextMenuVisible && (
        <ContextMenu
          closeFn={() => setContextMenuVisible(false)}
          top={contextMenuPosition.y}
          left={contextMenuPosition.x}
        />
      )} */}
    </div>
  );
};

export default InteractiveMap;
