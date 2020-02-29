import React from "react";

function Aperture() {
  return (
    <div className="page aperture">
      <div className="text">
        <h2 className="text__heading">Aperture or shutter priority</h2>
        <p>
          In the two priority modes you gain control over either the aperture or
          the shutter speed and the camera will automatically choose the other.
          This means that in one mode you can decide the shutter speed to fit if
          your motive is still or fast moving or perhaps if you wish to add
          motion blur to your image while in the other mode you can adjust the
          aperture thus controlling the depth of field (bokeh) and let the
          camera decide on the shutter speed.  These modes are great for fast
          photography, where you still want to retain control over one essential
          setting.
        </p>
      </div>
      <img src="collage.png" alt=""/>
    </div>
  );
}

export default Aperture;
