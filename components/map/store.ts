import { create } from "zustand";
import type { Feature } from "geojson";

type DrawingMode =
  | "draw_polygon"
  | "draw_point"
  | "draw_line_string"
  | "simple_select";

interface MapState {
  drawingMode: string;
  setDrawingMode: (mode: DrawingMode) => void;

  drawnFeature: Feature | null;
  setDrawnFeature: (feature: Feature | null) => void;
  drawnReverseGeoCode: string | null;
  setDrawnReverseGeoCode: (geocode: string | null) => void;

  selectedFeature: Feature | null;
  setSelectedFeature: (feature: Feature | null) => void;
}

export const useMapStore = create<MapState>((set) => ({
  drawingMode: "simple_select",
  setDrawingMode: (mode) => set({ drawingMode: mode }),
  drawnFeature: null,
  setDrawnFeature: (feature) => set({ drawnFeature: feature }),
  drawnReverseGeoCode: null,
  setDrawnReverseGeoCode: (geocode) => set({ drawnReverseGeoCode: geocode }),
  selectedFeature: null,
  setSelectedFeature: (feature) => set({ selectedFeature: feature }),
}));

export type { DrawingMode };
