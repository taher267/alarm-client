import MainLayout from "../../Layouts/MainLayout";
import { useAuth } from "./../../context/AuthProvider";
import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
export default function Login() {
  const {
    signinWithGoogle,
    signinWithGithub,
    currentUser,
    signInWithTwiiter,
    signInWithFb,
  } = useAuth();
  if (currentUser?.accessToken) {
    console.dir(currentUser);
  }

  const submitHandler = () => {};
  const inputHandler = () => {};
  return (
    <MainLayout title="Login">
      <section
        className="banner"
        style={{
          background: `url("/assets/images/bg/slider-bg-1.jpg") no-repeat`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xl-5 m-auto">
              <div className="block">
                <div className="divider mb-3"></div>
                <h1 className="mb-3 mt-3">SignIn</h1>
                {/* <form
                  onSubmit={submitHandler}
                  id="contact-form"
                  className="contact__form loginSignup"
                >
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="alert alert-success contact__msg"
                        style={{ display: "none" }}
                        role="alert"
                      >
                        Your message was sent successfully.
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="Your Email Address"
                          onChange={inputHandler}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          name="password"
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          onChange={inputHandler}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <input
                      className="btn btn-main btn-round-full"
                      type="submit"
                      value="SignIn"
                    />
                  </div>
                </form> */}

                <hr />
                <div className="thirdPartyLogin">
                  <div className="row ">
                    <div className="col-6 mt-3">
                      <button
                        className="btn btn-main d-block"
                        onClick={signinWithGoogle}
                      >
                        <FcGoogle /> Signin With Google
                      </button>
                    </div>

                    <div className="col-6 mt-3">
                      <button
                        className="btn btn-main d-block"
                        onClick={signinWithGithub}
                      >
                        <FaGithub /> Signin With Github
                      </button>
                    </div>
                    <div className="col-6 mt-3">
                      <button
                        className="btn btn-main d-block"
                        onClick={signInWithTwiiter}
                      >
                        <FaTwitter /> Signin With Twitter
                      </button>
                    </div>
                    <div className="col-6 mt-3">
                      <button
                        className="btn btn-main d-block"
                        onClick={signInWithFb}
                      >
                        <FaFacebookF /> Signin With Facebook
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
