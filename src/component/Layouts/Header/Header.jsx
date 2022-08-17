import Topber from "./Topbar";
import "./nav.css";
import { Link } from "react-router-dom";
import { useAuth } from "./../../context/AuthProvider";

export default function Header() {
  const { logout, currentUser } = useAuth();
  // console.log(currentUser);
  return (
    <header>
      <Topber />
      <nav className="navbar navbar-expand-lg navigation" id="navbar">
        <div className="container">
          <Link className="navbar-brand" to="">
            <img src="/assets/images/logo.png" alt="" className="img-fluid" />
          </Link>

          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarmain"
            aria-controls="navbarmain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icofont-navigation-menu"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarmain">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item position-relative">
                <Link className="nav-link" to="/alarm">
                  Alarm
                </Link>
              </li>
              {currentUser?.email ? (
                <li className="nav-item position-relative">
                  <Link
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      return logout();
                    }}
                    to=""
                  >
                    Logout
                  </Link>
                  <div className="profile">
                    {currentUser?.photoURL && (
                      <img
                        src={currentUser?.photoURL}
                        alt={currentUser?.displayName}
                      />
                    )}

                    <span className="name">{currentUser?.displayName}</span>
                  </div>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
