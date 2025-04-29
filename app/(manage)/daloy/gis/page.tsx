"use client";

import InteractiveMap from "@/components/gis/InteractiveMap";
import OffCanvas from "@/components/elements/OffCanvas";
import CustomerForm from "@/components/customer/CustomerForm";
import { useMapStore } from "@/components/gis/store";

const GIS = () => {
  const setDrawingMode = useMapStore((state) => state.setDrawingMode);

  return (
    <div>
      <InteractiveMap />
      <OffCanvas
        id="account-offcanvas"
        className="offcanvas-start"
        labelId="account-offcanvas-label"
        label="Customer"
        onShown={() => {
          setDrawingMode("draw_point");
        }}
        onHidden={() => {
          setDrawingMode("simple_select");
        }}
      >
        <CustomerForm offCanvas={true} />
      </OffCanvas>
    </div>
  );
};

export default GIS;
