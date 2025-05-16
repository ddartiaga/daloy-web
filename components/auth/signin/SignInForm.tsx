import { signIn } from "@/auth";
import { redirect } from "next/navigation";

const SignInForm = () => {
  return (
    <>
      <div>
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/daloy/dashboard" });
          }}
        >
          <div className="d-grid">
            <button type="submit" className="btn btn-danger label-btn">
              {/* <i className="ri-google-line fw-bolder" />  */}
              Sign In with Google
            </button>
          </div>
        </form>
      </div>

      <div className="text-center my-3 authentication-barrier">
        <span>OR</span>
      </div>
      <div>
        <form
          action={async (formData) => {
            "use server";

            const email = formData.get("email") as string;
            const encodedEmail = encodeURIComponent(email);

            await signIn("resend", {
              email,
              redirectTo: `/auth/verify-request?email=${encodedEmail}`,
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
                  required
                />
              </div>
            </div>

            <div className="col-xl-12 d-grid">
              <button type="submit" className="btn btn-primary">
                Continue with Email
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="text-center">
        <p className="fs-12 text-muted mt-4">
          Dont have an account?{" "}
          <a href="sign-up-basic.html" className="text-primary">
            Sign Up
          </a>
        </p>
      </div>
    </>
  );
};

export default SignInForm;
