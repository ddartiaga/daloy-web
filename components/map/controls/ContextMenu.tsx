import React from "react";

const ContextMenu = ({
  top,
  left,
  closeFn,
}: {
  top: number;
  left: number;
  closeFn: () => void;
}) => {
  return (
    <div
      className="card custom-card"
      style={{
        position: "absolute",
        top: top,
        left: left,
        width: "auto",
      }}
    >
      <div className="card-header justify-content-between gap-2">
        <div className="card-title">Actions </div>
        <button
          type="button"
          className="btn-close"
          onClick={closeFn}
          aria-label="Close"
        />
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item py-1">
          <a
            href="#account-offcanvas"
            data-bs-toggle="offcanvas"
            aria-controls="account-offcanvas"
          >
            New Account
          </a>
        </li>
        <li className="list-group-item py-1">A second item</li>
        <li className="list-group-item py-1">A third item</li>
      </ul>
    </div>
  );
};

export default ContextMenu;
