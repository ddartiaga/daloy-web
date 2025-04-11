"use client";

const NavBarFullScreen = () => {
  return (
    <div className="header-element header-fullscreen">
      <a
        onClick={(e) => {
          e.preventDefault();

          console.log("TODO: Implement openFullscreen()");
          // openFullscreen();
        }}
        className="header-link"
      >
        <i className="bx bx-fullscreen full-screen-open header-link-icon" />
        <i className="bx bx-exit-fullscreen full-screen-close header-link-icon d-none" />
      </a>
    </div>
  );
};

export default NavBarFullScreen;
