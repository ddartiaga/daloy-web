import { version } from "@/package.json";

const page = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center authentication authentication-basic h-100">
        <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12">
          {/* <div className="my-5 d-flex justify-content-center">
            <a href="index.html">
              <img
                src="/assets/images/brand-logos/desktop-logo.png"
                alt="logo"
                className="desktop-logo"
              />
              <img
                src="/assets/images/brand-logos/desktop-dark.png"
                alt="logo"
                className="desktop-dark"
              />
            </a>
          </div> */}
          <div className="card custom-card">
            <div className="card-body p-5">
              <div className="text-center">
                <h6>An email was sent to you.</h6>
              </div>
            </div>
            <div className="card-footer">
              <div className="mt-auto bg-white text-center d-flex justify-content-between">
                <span className="text-muted">
                  Copyright ©{" "}
                  <span id="year"> {new Date().getFullYear()} </span>
                  <a
                    href="https://katatechservices.com"
                    className="text-primary fw-semibold"
                  >
                    Katalyst I.T. Services
                  </a>
                </span>
                {/* <span> | </span> */}
                <span className="text-muted">
                  <span className="text-dark fw-semibold ">Version: </span>{" "}
                  {version}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
