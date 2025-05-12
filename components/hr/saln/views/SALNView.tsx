import React from "react";
import SALNEmployeeView from "./SALNEmployeeView";
import SALNViewChildren from "./SALNViewChildren";

const SALNView = () => {
  return (
    <div className="bg-white mt-3 py-4 px-5">
      <div className="pt-5 text-center">
        <strong>SWORN STATEMETN OF ASSETS, LIABILITIES AND NET WORTH</strong>
      </div>
      <div className="text-center">As of December 31, 2024</div>
      <div className="text-center">(Required by R.A. 6713)</div>
      <SALNEmployeeView />
      <hr style={{ borderTop: "2px dashed black" }} />
      <SALNViewChildren />
    </div>
  );
};

export default SALNView;
