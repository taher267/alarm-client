import { Link } from "react-router-dom";
import "./topbar.css";
import { BiSupport, BiLocationPlus } from "react-icons/bi";
import { FcCallback } from "react-icons/fc";
export default function Topber() {
  return (
    <div className="header-top-bar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <ul className="top-bar-info list-inline-item pl-0 mb-0">
              <li className="list-inline-item">
                <Link to="mailto:support@gmail.com">
                  <BiSupport /> support@novena.com
                </Link>
              </li>
              <li className="list-inline-item">
                <BiLocationPlus /> Address Ta-134/A, New York, USA{" "}
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
              <Link to="tel:+23-345-67890">
                <span style={{ fontSize: "23px" }}>
                  <FcCallback />{" "}
                </span>
                <span className="h4">823-4565-13456</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
