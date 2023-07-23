import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <form action="https://formspree.io/f/mnqyeera" method="post">
        <div className="background">
          <div className="container1">
            <div className="screen">
              <div className="screen-header">
                <div className="screen-header-left">
                  <div className="screen-header-button close"></div>
                  <div className="screen-header-button maximize"></div>
                  <div className="screen-header-button minimize"></div>
                </div>
                <div className="screen-header-right">
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                </div>
              </div>
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="app-title">
                    <span>Book </span>
                    <span>Appointment</span>
                  </div>
                </div>
                <div className="screen-body-item">
                  <div className="app-form">
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="Enter Your Name"
                        type="text"
                        name="Name: "
                        id="subject"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="Enter Your Email"
                      for="email"
                      name="From: "
                      id="form"
                      autoComplete="off"
                    />
                  </div>
                  <div className="app-form-group message">
                    <input
                      className="app-form-control"
                      placeholder="Drop your Message Here!"
                      id="message"
                      name="Message: "
                      autocomplete="off"
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
