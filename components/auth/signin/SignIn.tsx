import { signIn } from "@/auth";
import { version } from "@/package.json";

const SignIn = () => {
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
              <p className="h5 fw-semibold mb-4 text-center">
                <span className="text-primary">Welcome to DALOY</span> <br />{" "}
                Please sign in
              </p>
              <div>
                <form
                  action={async () => {
                    "use server";
                    await signIn("google", { redirectTo: "/daloy/dashboard" });
                  }}
                >
                  <div className="d-grid mt-2">
                    <button type="submit" className="btn btn-danger label-btn">
                      <i className="ri-google-line fw-bolder" /> Sign In with
                      Google
                    </button>
                  </div>
                </form>
              </div>

              {/* <div className="text-center">
                <p className="fs-12 text-muted mt-3">
                  Dont have an account?{" "}
                  <a href="sign-up-basic.html" className="text-primary">
                    Sign Up
                  </a>
                </p>
              </div> */}
              <div className="text-center my-3 authentication-barrier">
                <span>OR</span>
              </div>
              <p className="text-muted fw-normal text-center">
                Passwordless Sign In
              </p>
              <form
                action={async (formData) => {
                  "use server";
                  await signIn("resend", formData, {
                    redirectTo: "/daloy/dashboard",
                  });
                }}
              >
                <div className="row gy-3">
                  <div className="col-xl-12">
                    <div className="input-group">
                      <span className="input-group-text" id="signin-email">
                        Email
                      </span>
                      <input
                        id="signin-email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="youremail@example.com"
                        aria-describedby="signin-email"
                      />
                    </div>
                  </div>

                  <div className="col-xl-12 d-grid">
                    <button type="submit" className="btn btn-primary">
                      Passwordless Sign In
                    </button>
                  </div>
                </div>
              </form>
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

export default SignIn;
