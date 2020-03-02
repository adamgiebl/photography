import React from "react";
import logo from "../images/logoMain.svg";

function Manual() {
  return (
    <div className="section">
      <div className="page manual">
      <img data-src={logo} className="logo" alt="" />
        <div className="text">
        </div>
        <div className="text">
          <h2 className="manual__heading">Manual mode</h2>
          <p>
            Contrary to the automatic mode, the manual mode offers you complete
            control over all camera settings. This of course is much more of a
            challenge and will require you to understand, what the settings do
            in order to choose the right ones for the task. It used to require a
            high level of experience or a considerable amount of calculating to
            figure out all the settings for the right exposure. This is
            currently becoming much less demanding as a new technology has
            gained popularity: The mirrorless camera.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Manual;
