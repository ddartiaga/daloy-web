"use client";

const NavBarCountry = () => {
  return (
    <div className="header-element country-selector">
      {/* Start::header-link */}
      <a
        onClick={(e) => e.preventDefault()}
        className="header-link"
        data-bs-toggle="modal"
        data-bs-target="#countryModal"
      >
        <img
          src="/assets/images/flags/us_flag.jpg"
          alt="img"
          className="rounded-circle header-link-icon"
        />
        <span className="fw-semibold mb-0 lh-1">EN</span>
      </a>
    </div>
  );
};

export default NavBarCountry;
