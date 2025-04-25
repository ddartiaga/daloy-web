"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl, { Map } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

// import "@maptiler/geocoding-control/style.css";
// import { GeocodingControl } from "@maptiler/geocoding-control/maplibregl";

class RecenterControl {
  _map: maplibregl.Map | undefined;
  _container: HTMLElement;

  constructor() {
    this._container = document.createElement("button");
    this._container.className = "maplibregl-ctrl maplibre-custom-btn";
    this._container.innerText = "📍";
    this._container.style.cssText = `
      background: white;
      padding: 6px 12px;
      margin: 8px;
      border-radius: 4px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.3);
      cursor: pointer;
    `;
  }

  onAdd(map: maplibregl.Map) {
    this._map = map;
    this._container.onclick = () => {
      this._map?.flyTo({ center: [120.9842, 14.5995], zoom: 13 });
    };
    return this._container;
  }

  onRemove() {
    this._container.remove();
    this._map = undefined;
  }
}

class ButtonGroupControl implements maplibregl.IControl {
  _map: maplibregl.Map | undefined;
  _container: HTMLElement | undefined;

  onAdd(map: maplibregl.Map) {
    this._map = map;

    this._container = document.createElement("div");
    this._container.className = "maplibregl-ctrl maplibregl-ctrl-group";

    // Button: Zoom In
    const zoomInBtn = document.createElement("button");
    zoomInBtn.type = "button";
    zoomInBtn.title = "Zoom In";
    zoomInBtn.innerHTML = "+";
    zoomInBtn.onclick = () => map.zoomIn();

    // Button: Zoom Out
    const zoomOutBtn = document.createElement("button");
    zoomOutBtn.type = "button";
    zoomOutBtn.title = "Zoom Out";
    zoomOutBtn.innerHTML = "−";
    zoomOutBtn.onclick = () => map.zoomOut();

    // Button: Reset Center
    const resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.title = "Reset View";
    resetBtn.innerHTML = "⭯";
    resetBtn.onclick = () => {
      map.flyTo({ center: [120.9842, 14.5995], zoom: 13 });
    };

    this._container.append(zoomInBtn, zoomOutBtn, resetBtn);

    return this._container;
  }

  onRemove() {
    if (this._container?.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }
    this._map = undefined;
  }

  getDefaultPosition(): maplibregl.ControlPosition {
    return "top-right";
  }
}

class AddLocationControl {
  map?: maplibregl.Map;
  container: HTMLElement;
  onClick: () => void;

  constructor(onClick: () => void) {
    this.onClick = onClick;
    this.container = document.createElement("button");
    this.container.innerText = "➕ Add Location";
    this.container.style.cssText = `
      background: white;
      padding: 6px 12px;
      margin: 8px;
      border-radius: 4px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.3);
      cursor: pointer;
    `;
  }

  onAdd(map: maplibregl.Map) {
    this.map = map;
    this.container.onclick = this.onClick;
    return this.container;
  }

  onRemove() {
    this.container.remove();
    this.map = undefined;
  }
}

const page = () => {
  const mapTilerKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  const currentLoc = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (loc) => {
          const { longitude, latitude } = loc.coords;

          mapRef.current?.flyTo({
            center: [longitude, latitude],
            zoom: 14,
            essential: true,
          });

          new maplibregl.Marker()
            .setLngLat([longitude, latitude])
            .setPopup(
              new maplibregl.Popup({ offset: 25 }).setText("You are here!")
            )
            .addTo(mapRef.current!);
        },
        (error) => {
          console.log("Error: unable to get location.");
          console.log(error);
        }
      );
    } else {
      console.log("geolocation not supported");
    }
  };

  useEffect(() => {
    const map: Map = new maplibregl.Map({
      container: mapContainerRef.current!,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${mapTilerKey}`,
      center: [120.9842, 14.5995], // Manila as an example
      zoom: 12,
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");
    map.addControl(new RecenterControl(), "top-right");
    // map.addControl(new AddLocationControl(() => setShowForm(true)), "top-left");
    map.addControl(new ButtonGroupControl(), "top-right");

    map.on("load", () => {
      map.addSource("places", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [120.9842, 14.5995],
              },
              properties: {
                title: "Manila City Hall",
                description: "Historic building in the heart of Manila.",
              },
            },
          ],
        },
      });

      map.addLayer({
        id: "places-layer",
        type: "circle",
        source: "places",
        paint: {
          "circle-radius": 8,
          "circle-color": "#007cbf",
        },
      });

      map.addSource("roads", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "LineString",
                coordinates: [
                  [120.93589159989875, 14.3265118573714],
                  [120.93670337282828, 14.325270887734732],
                  [120.93832691868727, 14.326179767577614],
                  [120.93899437642972, 14.326564292557421],
                  [120.9394634007894, 14.326564292557421],
                  [120.94029321311746, 14.326774033176747],
                  [120.947184263319, 14.32686142504383],
                  [120.95062978841969, 14.327350818871096],
                  [120.94989017308302, 14.328469429322553],
                  [120.94965566090315, 14.329151079831306],
                  [120.94886192737226, 14.329605512353368],
                ],
              },
              properties: {
                name: "Example Road",
                type: "highway",
              },
            },
          ],
        },
      });

      map.addLayer({
        id: "roads-layer",
        type: "line",
        source: "roads",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#ff0000",
          "line-width": 5,
        },
      });
    });

    mapRef.current = map;

    // const searchControl = new GeocodingControl({
    //   apiKey: process.env.NEXT_PUBLIC_MAPTILER_API_KEY!,
    //   language: "en",
    //   country: "PH", // Optional: restrict to specific country
    //   showResultsWhileTyping: true,
    //   marker: true,
    // });

    // mapRef.current.addControl(searchControl, "top-left");

    // mapRef.current.on("click", (e) => {
    //   console.log(e);

    //   new maplibregl.Popup()
    //     .setLngLat(e.lngLat) // where to place the popup
    //     .setHTML(
    //       `<h3>You clicked here:</h3><p>${e.lngLat.lng}, ${e.lngLat.lat}</p>`
    //     )
    //     .addTo(mapRef.current!);
    // });

    currentLoc();

    return () => mapRef.current?.remove();
  }, []);

  return (
    <div>
      <div ref={mapContainerRef} style={{ height: "100vh", width: "100%" }} />
    </div>
  );
};

export default page;
