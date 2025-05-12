"use client";

import InteractiveMap from "@/components/map/InteractiveMap";
import OffCanvas from "@/components/elements/OffCanvas";
import CustomerForm from "@/components/customer/CustomerForm";
import { useMapStore } from "@/components/map/store";

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
      >
        <CustomerForm offCanvas={true} />
      </OffCanvas>
    </div>
  );
};

export default GIS;
