import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-scroll fixed-top shadow-0 border-bottom border-dark">
        <div className="container">
          {/* Use CSS class to control logo size */}
          <Link to="/">
            <img
              src="./assets/rahul.png"
              className="logo"
              alt="logo"
            />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <button onClick={() => navigate('/contact')} type="button" className="btn btn-dark ms-3">
                Book Appointment
              </button>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="d-flex align-items-center justify-content-center text-center"
        style={{ height: 100 }}
      ></div>
    </>
  );
}
