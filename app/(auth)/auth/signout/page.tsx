import { version } from "@/package.json";
import { signOut } from "@/auth";

const page = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center authentication authentication-basic h-100">
        <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12">
          <div className="card custom-card">
            <div className="card-body p-5">
              <p className="h5 fw-semibold mb-4 text-center">
                <span className="text-primary">Sign Out</span> <br />
              </p>
              <div>
                <form
                  action={async () => {
                    "use server";
                    await signOut({redirectTo: "/"});
                  }}
                >
                  <div className="d-grid mt-2">
                    <button type="submit" className="btn btn-danger label-btn">
                      Sign Out
                    </button>
                  </div>
                </form>
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
