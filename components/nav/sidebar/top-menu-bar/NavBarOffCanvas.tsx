"use client";

const NavBarOffCanvas = () => {
  return (
    <div className="header-element">
      <a
        onClick={(e) => e.preventDefault()}
        className="header-link switcher-icon"
        data-bs-toggle="offcanvas"
        data-bs-target="#switcher-canvas"
      >
        <i className="bx bx-cog header-link-icon" />
      </a>
    </div>
  );
};

export default NavBarOffCanvas;
