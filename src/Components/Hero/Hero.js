import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <header>
      <div className="header-section ">
        <div className="header-left">
          <h1  className="poster">Pain-Free Living Is Within Reach</h1>
          <h2 className="poster1"> Online Physiotherapy Treatment</h2>
          <p className="poster2">
           <h5> Quality Physiotherapy with a team of Best Physiotherapist, via Video
            consultation</h5>
          </p>
          <button type="button" onClick={()=>navigate('/contact')} className="btn btn-primary poster3">
            Start Your Treatment
          </button>
        </div>
        <div className="header-right" >
          <img  className="img1" src="./assets/home.png" alt="img"/>
        </div>
      </div>
    </header>
  );
}
