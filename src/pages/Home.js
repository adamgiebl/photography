import React from "react";
import "../scss/animation.scss";
import title from "../images/logo.svg";
import logo from "../images/logoMain.svg";

function Home() {
  return (
    <div className="section">
      <div className="page home">
      <img src={logo} className="logo" alt="" />
        <img data-src={title} className="home__heading animated zoomInUp" alt="" />
        <div className="scroll-indicator">
          <span>scroll down</span>
          <svg
            className="animated slideOutDown infinite alternate"
            xmlns="http://www.w3.org/2000/svg"
            width="64.964"
            height="19.493"
            viewBox="0 0 64.964 19.493"
          >
            <g
              id="Group_1"
              data-name="Group 1"
              transform="translate(-423.95 -1020.477)"
            >
              <g
                id="Group_2"
                data-name="Group 2"
                transform="translate(424.838 1022.269)"
              >
                <line
                  id="Line_1"
                  data-name="Line 1"
                  className="cls-1"
                  x2="32.101"
                  y2="15.9"
                  transform="translate(0 0.008)"
                />
                <line
                  id="Line_2"
                  data-name="Line 2"
                  className="cls-1"
                  x1="32.101"
                  y2="15.9"
                  transform="translate(31.088 0)"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Home;
