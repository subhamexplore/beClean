import React from "react";
import "../assets/styles/Gallery.css";
import gallery from "../assets/images/gall.png"
import view from "../assets/images/phView.png";

const Gallery = () => {
  return (
    <div>
      <div className="Bann-y">
        <div className="top-main-y">
          <div className="who-y">
            <div
              className="heading-con"
              id="astro"
              style={{ fontSize: "4rem", color: "white" }}
            >
              GALLERY
            </div>
          </div>
        </div>
      </div>
      <div className="gall-gallery">
        <img className="gallery" src={gallery} alt=""/>
        <div>
          <img className="ph-gallery" src={view} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
