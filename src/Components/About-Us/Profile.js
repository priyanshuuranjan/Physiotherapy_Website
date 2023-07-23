import React from "react";
import "./Profile.css";

export default function Profile({ name, about, job }) {
  const goBack = () => {
    window.location.href = "/"; // navigate to home page
  };

  return (
    <div className="Card">
      <div className="upper-container">
        <div className="image-container imgg">
          <img src="./assets/Profile.jpg" alt="" height="100px" width="100px" />
        </div>
      </div>
      <div className="lower-container">
        <h3>{name}</h3>
        <h4>{job}</h4>
        <p>{about}</p>
        <button onClick={goBack}>Go Back</button>
      </div>
    </div>
  );
}







// code without navigation button ... upper code is all about navigate to home page
// import React,{useState} from "react";
// import "./Profile.css";

// export default function Profile({name,about,job}) {
//     return (
//     <div className="Card">
//     <div className="upper-container">
//       <div className="image-container imgg">
//         <img src="./assets/Profile.jpg" alt="" height="100px" width="100px" />
//       </div>
//     </div>
//     <div className="lower-container">
//       <h3>{name}</h3>
//       <h4>{job}</h4>
//       <p>{about}</p>
//       <button>Go Back</button>
//     </div>
//   </div>
// );
// }

