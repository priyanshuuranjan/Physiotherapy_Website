import React from "react";
import { useNavigate } from "react-router-dom";

export default function Feature() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="features text-success my-3"> OUR SERVICE'S</h1>
      <div className="container text-danger text-capitialize my-5">
        <div className="row">
          <div className="col-md-3 ">
            <div className="card w-100 shadow">
              <img
                className="card-img-top w-100 shadow"
                src="./assets/Sport.jpg"
                alt=" img"
              />
              <div className="card-body">
                <h5 className="card-title">Sports Injury</h5>
                <p className="card-text">
                  Physical harm caused by sports activities, including strains,
                  sprains, fractures, and other trauma during athletic
                  engagement.
                </p>
                <a
                  href="https://www.niams.nih.gov/health-topics/sports-injuries"
                  target={"blank"}
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card w-100 shadow">
              <img
                className="card-img-top w-100 shadow"
                src="./assets/neck.jpg"
                alt=" img"
              />
              <div className="card-body">
                <h5 className="card-title">Cervical Spondylosis</h5>
                <p className="card-text">
                  Cervical Spondylosis is a degenerative condition of the neck
                  that causes pain and stiffness due to wear and tear of the
                  spinal discs.
                </p>
                <a
                  href="https://my.clevelandclinic.org/health/diseases/17685-cervical-spondylosis"
                  target={"blank"}
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card w-100 shadow">
              <img
                className="card-img-top w-100 shadow"
                src="./assets/joint.jpeg"
                alt=" img"
              />
              <div className="card-body">
                <h5 className="card-title">Joint Pain</h5>
                <p className="card-text">
                  Joint pain is discomfort or soreness in the joints, which can
                  result from injury, inflammation, arthritis, or other
                  conditions.
                </p>
                <a
                  href="https://medlineplus.gov/ency/article/003261.htm"
                  target={"blank"}
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card w-100 shadow">
              <img
                className="card-img-top w-100 shadow"
                src="./assets/Arthritis.jpeg"
                alt=" img"
              />
              <div className="card-body">
                <h5 className="card-title">Arthritis</h5>
                <p className="card-text">
                  It is a painful joint condition causing inflammation,
                  stiffness, and reduced mobility. It affects millions
                  worldwide, requiring proper management.
                </p>
                <a
                  href="https://my.clevelandclinic.org/health/diseases/12061-arthritis"
                  target={"blank"}
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-5">
            <div className="card w-100 shadow">
              <img
                className="card-img-top w-100 shadow"
                src="./assets/JJJ.jpeg"
                alt=" img"
              />
              <div className="card-body">
                <h5 className="card-title">Joint Stiffness</h5>
                <p className="card-text">
                  Joint stiffness refers to reduced range of motion and
                  discomfort, often caused by inflammation, injury, or medical
                  conditions like arthritis.
                </p>
                <a
                  href="https://www.webmd.com/rheumatoid-arthritis/ss/slideshow-stiff-joints"
                  target={"blank"}
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-5">
            <div className="card w-100 shadow">
              <img
                className="card-img-top w-100 shadow"
                src="./assets/frozen.jpg"
                alt=" img"
              />
              <div className="card-body">
                <h5 className="card-title">Frozen Shoulder</h5>
                <p className="card-text">
                  A condition causing pain and stiffness, limiting shoulder
                  movement. Gradual recovery with physical therapy and pain
                  management.
                </p>
                <a
                  href="https://my.clevelandclinic.org/health/diseases/15359-frozen-shoulder"
                  target={"blank"}
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-5">
            <div className="card w-100 shadow">
              <img
                className="card-img-top w-100 shadow"
                src="./assets/neurological.png"
                alt="img"
              />
              <div className="card-body">
                <h5 className="card-title">Neurological Problems</h5>
                <p className="card-text">
                  This problems are disorders affecting the brain, spinal cord,
                  and nerves, leading to issues with movement, sensation,
                  cognition, or behavior.
                </p>
                <a
                  href="who.int/news-room/questions-and-answers/item/mental-health-neurological-disorders"
                  target={"blank"}
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-5">
            <div className="card w-100 shadow">
              <img
                className="card-img-top w-100 shadow"
                src="./assets/R.jpeg"
                alt=" img"
              />
              <div className="card-body">
                <h5 className="card-title">Joint Mobilization</h5>
                <p className="card-text">
                  Joint Mobilization is a technique that aims to restore joint
                  movement and reduce pain through manual therapy interventions.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Joint_mobilization"
                  target={"blank"}
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="last-sample">
        <p>
          <h1 className="sample">GET STARTED TODAY!</h1>
        </p>
        <p>
          <h5 className="sample1">Your Pain-Free Life Is Within Your Reach</h5>
        </p>
        <button
          type="button"
          onClick={() => navigate("/contact")}
          className="btn btn-dark ms-3"
        >
          REQUEST APPOINTMENT
        </button>
      </div>
    </>
  );
}
