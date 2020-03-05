import React from "react";
import "../scss/animation.scss";
import title from "../images/logo.svg";
import logo from "../images/logoMain.svg";
import arrow from "../images/arrow.svg";

function Home() {
  return (
    <div className="section">
      <div className="page home">
      <img src={logo} className="logo" alt="" />
        <img src={title} className="home__heading animated zoomInUp" alt="" />
        <div className="scroll-indicator">
          <span>scroll down</span>
          <img src={arrow} className="arrow" alt="scroll indicator"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
