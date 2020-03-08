import React, { useState } from "react";
import Carousel, { Modal, ModalGateway } from 'react-images';
import image from "../images/moodboard.png";

function Footer() {

	const [ isModalOpen, toggleModal ] = useState(false);

  return (
    <footer className="section">
      <div className="page footer">
        <span className="smaller">Grab a camera</span>
        <span className="bigger">and go!</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            bottom: "8vh",
            position: "absolute"
          }}
        >
          <button
            className="button"
						onClick={() => toggleModal(!isModalOpen)}
            style={{ marginRight: "20px" }}
          >
            moodboard
          </button>
          <a href="https://adamgiebl.best" target="_blank">
            adamgiebl.best
          </a>
					<a href="https://github.com/adamgiebl/photography" target="_blank">
            repository
          </a>
        </div>
      </div>
			<ModalGateway>
        {isModalOpen &&
          <Modal onClose={()=>toggleModal(false)}>
            <Carousel views={[{ src: image }]} />
          </Modal>
				}
      </ModalGateway>
      
    </footer>
  );
}

export default Footer;
