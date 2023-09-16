import React from "react";
import "./Logo.css";
import Tilt from "react-parallax-tilt";
import Brain from "./brain-100.png";

const Logo = () => {
  return (
    <div className="ma4 ">
      <Tilt
        className="Tilt br2 shadow-2"
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "darkgreen",
        }}
      >
        <div className="Tilt-inner pa3">
          <img src={Brain} style={{ paddingTop: "5px" }}></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
