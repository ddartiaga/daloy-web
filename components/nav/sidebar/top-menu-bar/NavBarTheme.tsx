"use client";

const NavBarTheme = () => {
  return (
    <div className="header-element header-theme-mode">
      <a
        onClick={(e) => e.preventDefault()}
        className="header-link layout-setting"
      >
        <span className="light-layout">
          <i className="bx bx-moon header-link-icon" />
        </span>
        <span className="dark-layout">
          <i className="bx bx-sun header-link-icon" />
        </span>
      </a>
    </div>
  );
};

export default NavBarTheme;
