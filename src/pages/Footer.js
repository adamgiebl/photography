import React from "react";

function Footer() {
  return (
    <footer className="section">
        <div className="page footer">
            <span className="smaller">Grab a camera</span>
            <span className="bigger">and go!</span>
            <div style={{ display: 'flex', alignItems: 'center', bottom: '8vh', position: 'absolute' }}>
            <a class="button" href="../images/moodboard.png" style={{ marginRight: '20px' }}>moodboard</a>
            <a href="https://adamgiebl.best" target="_blank">adamgiebl.best</a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;