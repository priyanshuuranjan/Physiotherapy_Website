import React, { useState } from "react";
import Profile from "./Profile";
export default function About() {
  const [name, setName] = useState("Your Name");
  const [job, setJob] = useState("Job Title");
  const [about, setAbout] = useState(
    "Are you ready to achieve your fitness goals and overcome your physical limitation?  Look no further than ultraphysiocare where you'll find the best physiotherapist in town Dr. Rahul kumar expertise In rehabilitation of sci-injury cerebral palsy, stroke patient and many more Book your consultation today and start your journey towards a healthier, happier, stronger, better."
  );
  return (
    <div className="Props">
      <Profile name={"Rahul Singh"} job={"Physiotherapist"} about={about} />
    </div>
  );
}
