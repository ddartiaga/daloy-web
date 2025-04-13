"use client";

import { useState } from "react";
import Script from "next/script";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { signUpSchema, signUpSchemaType } from "./schemas";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);

  // const {
  //   register,
  //   formState: { errors },
  // } = useForm<signUpSchemaType>({
  //   resolver: zodResolver(signUpSchema),
  // });

  return (
    <>
      <Script
        src="/assets/js/authentication-main.js"
        strategy="afterInteractive"
      />

      <div className="container">
        <div className="row justify-content-center align-items-center authentication authentication-basic h-100">
          <div className="col-xxl-6 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="card custom-card">
              <div className="card-body p-5">
                <p className="h5 fw-semibold mb-2 text-center">Sign Up</p>
                <p className="mb-4 text-muted op-7 fw-normal text-center">
                  Welcome, please fill up the form.
                </p>
                <div className="row gy-3 mb-2">
                  <div className="col-12">
                    <label
                      htmlFor="signup-email"
                      className="form-label text-default"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="signup-email"
                      placeholder="example@domain.com"
                    />
                  </div>
                </div>
                <div className="row gy-3 mb-2">
                  <div className="col-sm-12 col-md-6">
                    <label
                      htmlFor="signup-firstname"
                      className="form-label text-default"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="signup-firstname"
                      placeholder="Juan"
                    />
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <label
                      htmlFor="signup-lastname"
                      className="form-label text-default"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="signup-lastname"
                      placeholder="Dela Cruz"
                    />
                  </div>
                </div>
                <div className="row gy-3 mb-2">
                  <div className="col-12">
                    <label
                      htmlFor="signup-mobile"
                      className="form-label text-default"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="signup-mobile"
                      placeholder="0913-424-2441"
                    />
                  </div>
                </div>
                <div className="row gy-3">
                  <div className="col-xl-12">
                    <label
                      htmlFor="signup-password"
                      className="form-label text-default"
                    >
                      Password
                    </label>
                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control form-control-lg"
                        id="signup-password"
                        placeholder="password"
                      />
                      <button
                        className="btn btn-light"
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        <i
                          className={
                            showPassword
                              ? "ri-eye-line align-middle"
                              : "ri-eye-off-line align-middle"
                          }
                        />
                      </button>
                    </div>
                  </div>
                  <div className="col-xl-12 mb-2">
                    <label
                      htmlFor="signup-confirmpassword"
                      className="form-label text-default"
                    >
                      Confirm Password
                    </label>
                    <div className="input-group">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="form-control form-control-lg"
                        id="signup-confirmpassword"
                        placeholder="confirm password"
                      />
                      <button
                        className="btn btn-light"
                        type="button"
                        onClick={() => setConfirmPassword((prev) => !prev)}
                      >
                        <i
                          className={
                            showConfirmPassword
                              ? "ri-eye-line align-middle"
                              : "ri-eye-off-line align-middle"
                          }
                        />
                      </button>
                    </div>
                    <div className="form-check mt-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck1"
                      />
                      <label
                        className="form-check-label text-muted fw-normal"
                        htmlFor="defaultCheck1"
                      >
                        By creating a account you agree to our{" "}
                        <a
                          href="terms_conditions.html"
                          className="text-success"
                        >
                          <u>Terms &amp; Conditions</u>
                        </a>{" "}
                        and{" "}
                        <a className="text-success">
                          <u>Privacy Policy</u>
                        </a>
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-12 d-grid mt-2">
                    <button className="btn btn-lg btn-primary">
                      Create Account
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="fs-12 text-muted mt-3">
                    Already have an account?{" "}
                    <a href="sign-in-basic.html" className="text-primary">
                      Sign In
                    </a>
                  </p>
                </div>
                <div className="text-center my-3 authentication-barrier">
                  <span>OR</span>
                </div>
                <div className="btn-list text-center">
                  <button className="btn btn-icon btn-light">
                    <i className="ri-facebook-line fw-bold text-dark op-7" />
                  </button>
                  <button className="btn btn-icon btn-light">
                    <i className="ri-google-line fw-bold text-dark op-7" />
                  </button>
                  <button className="btn btn-icon btn-light">
                    <i className="ri-twitter-x-line fw-bold text-dark op-7" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script src="/assets/js/show-password.js" strategy="afterInteractive" />
    </>
  );
};

export default SignUpForm;
