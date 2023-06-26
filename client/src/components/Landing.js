import React from "react";
import "./Landing.css"
import img from "./farmer.jpg"
const LandingPage = () => {
  return (
    
    <div className="LandingPage">
      <img
        className="landing-image"
        src={img}
        alt="Green Market"
      />
    </div>
  );
};
export default LandingPage;