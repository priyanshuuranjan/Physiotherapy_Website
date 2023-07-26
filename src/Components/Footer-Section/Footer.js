import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3>
                <span>Ultra</span>Physiocare Biomagical Pain Relief Therapy
              </h3>
              <p>
                UltraPhysiocare Biomagical Pain Relief Therapy is a center
                providing comprehensive treatments for head and spinal cord
                injuries, back pain management, stroke, and cerebral-palsy.
              </p>
              <div className="footer-icons">
                <a
                  href="https://www.instagram.com/priyanshu_singh45/"
                  target={"blank"}
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/priyanshu_singh45/"
                  target={"blank"}
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/priyanshu_singh45/"
                  target={"blank"}
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.instagram.com/priyanshu_singh45/"
                  target={"blank"}
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Quick Links</h5>
              <ul>
                <li className="nav-item">
                  <Link className="" to="/contact">
                    Contact Us
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>Contact</h5>
              <p>
                <i className="fa-solid fa-phone-volume"></i> +91 8789026276
              </p>
              <p>
                <i className="fa-solid fa-envelope"></i>{" "}
                rahulsingh808379@gmail.com
              </p>
              <p>
                <i className="fa-solid fa-paper-plane"></i> Faridabad, Noida.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <p>Dr. Rahul Singh</p>
      </div>
    </>
  );
}
