"use client";

import { useEffect } from "react";

import InteractiveMap from "@/components/gis/InteractiveMap";

const GIS = () => {
  // for wider map
  useEffect(() => {
    document?.getElementById("main-content")?.classList.add("no-padding");
    document?.getElementById("child-content")?.classList.add("no-padding");

    return () => {
      document?.getElementById("main-content")?.classList.remove("no-padding");
      document?.getElementById("child-content")?.classList.remove("no-padding");
    };
  }, []);
  return (
    <div>
      <InteractiveMap />
    </div>
  );
};

export default GIS;
