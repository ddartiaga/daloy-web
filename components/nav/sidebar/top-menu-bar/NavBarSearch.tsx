"use client";

const NavBarSearch = () => {
  // TODO: Fix error "TypeError: Cannot read properties of undefined (reading 'backdrop')"
  return (
    <div className="header-element header-search">
      <a
        onClick={(e) => e.preventDefault()}
        className="header-link"
        data-bs-toggle="modal"
        data-bs-target="#searchModal"
      >
        <i className="bx bx-search-alt-2 header-link-icon" />
      </a>
    </div>
  );
};

export default NavBarSearch;
