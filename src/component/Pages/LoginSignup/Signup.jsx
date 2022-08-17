import MainLayout from "../../Layouts/MainLayout";
import "./signupLogin.css";
import { useState } from "react";
import { useAuth } from "./../../context/AuthProvider";
import { useAlert } from "react-alert";

export default function Signup() {
  const alert = useAlert();
  const [input, setInput] = useState({});
  const { signUpWithEmailPass } = useAuth();
  const submitHandler = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = input;
    if (!name || !email || !password || !confirmPassword)
      return alert.error("All fields are mandatory");
    else if (password.trim().length < 8)
      return alert.error("Password at least 8 chars!");
    else if (password !== confirmPassword)
      return alert.error("Confirm password doesn't match!");

    signUpWithEmailPass(input)
      .then((d) => console.dir(d))
      .catch((e) => {
        alert.error(e.message);
        console.error(e);
      });
  };
  const inputHandler = ({ target: { name, value } }) => {
    setInput((p) => ({ ...p, [name]: value }));
  };

  return (
    <MainLayout title="Signup">
      <section
        className="banner"
        style={{
          background: "url(/assets/images/bg/slider-bg-1.jpg) no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xl-7 m-auto">
              <div className="block">
                <div className="divider mb-3"></div>
                <h1 className="mb-3 mt-3">Signup</h1>
                <form
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
                          name="name"
                          type="text"
                          className="form-control"
                          placeholder="Your Full Name"
                          onChange={inputHandler}
                          required={false}
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="Your Email Address"
                          onChange={inputHandler}
                          required={false}
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
                          required={false}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          name="confirmPassword"
                          type="password"
                          className="form-control"
                          placeholder="Re-write Confirm password"
                          onPaste={(e) => {
                            e.preventDefault();
                            return false;
                          }}
                          onChange={inputHandler}
                          required={false}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <input
                      className="btn btn-main btn-round-full"
                      type="submit"
                      value="Signup"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
