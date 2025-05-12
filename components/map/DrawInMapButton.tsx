"use client";

import React from "react";
import { DrawingMode, useMapStore } from "@/components/map/store";

type DrawInMapProps = {
  mode: DrawingMode;
  entity: string;
  label?: string;
  text?: string;
  btnClass?: string;
};

const DrawInMapButton = ({
  mode,
  label,
  text = "Draw",
  btnClass = "btn btn-secondary btn-wave btn-icon",
}: DrawInMapProps) => {
  const setDrawingMode = useMapStore((state) => state.setDrawingMode);

  return (
    <div className="mb-3 d-grid">
      {label && <div className="form-text">{label}</div>}

      <button
        type="button"
        className={btnClass}
        onClick={() => {
          console.log("Drawing Mode:", mode);
          setDrawingMode(mode);
        }}
      >
        <i className="ri-map-pin"></i>
      </button>
    </div>
  );
};

export default DrawInMapButton;
