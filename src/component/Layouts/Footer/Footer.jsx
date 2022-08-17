import { FaFacebookF, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer section gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mr-auto col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <div className="logo mb-4">
                <img
                  src="/assets/images/logo.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <p>
                Tempora dolorem voluptatum nam vero assumenda voluptate, facilis
                ad eos obcaecati tenetur veritatis eveniet distinctio possimus.
              </p>

              <ul className="list-inline footer-socials mt-4">
                <li className="list-inline-item">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://twitter.com"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.pinterest.com/"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">Quick Links</h4>
              <div className="divider mb-4"></div>

              <ul className="list-unstyled footer-menu lh-35">
                <li>
                  <Link to="/">Home </Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/doctors">Doctors</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">Support</h4>
              <div className="divider mb-4"></div>

              <ul className="list-unstyled footer-menu lh-35">
                <li>
                  <Link to="#!">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="#!">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#!">Company Support </Link>
                </li>
                <li>
                  <Link to="#!">FAQuestions</Link>
                </li>
                <li>
                  <Link to="#!">Company Licence</Link>
                </li>
              </ul>
            </div>
          </div> */}

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget widget-contact mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">Get in Touch</h4>
              <div className="divider mb-4"></div>

              <div className="footer-contact-block mb-4">
                <div className="icon d-flex align-items-center">
                  <FaEnvelope /> &nbsp;
                  <span className="h6 mb-0">Support Available for 24/7</span>
                </div>
                <h4 className="mt-2">
                  <Link to="mailto:support@email.com">Support@email.com</Link>
                </h4>
              </div>

              <div className="footer-contact-block">
                <div className="icon d-flex align-items-center">
                  <BiSupport />
                  &nbsp;
                  <span className="h6 mb-0">Mon to Fri : 08:30 - 18:00</span>
                </div>
                <h4 className="mt-2">
                  <Link to="tel:+23-345-67890">+23-456-6588</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-btm py-4 mt-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="copyright">Copyright &copy; 2022.</div>
            </div>
            <div className="col-lg-6">
              <div className="subscribe-form text-lg-right mt-5 mt-lg-0">
                <form action="#" className="subscribe">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email address"
                    required
                  />
                  <button
                    type="submit"
                    className="btn btn-main-2 btn-round-full"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <Link className="backtop scroll-top-to" to="#top">
                <i className="icofont-long-arrow-up"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
