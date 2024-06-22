import React from "react";
import All from "../images/img1.jpg";
import SK from "../images/img8.jpg";
import Kit from "../images/img3.jpg";
import Ele from "../images/img4.jpg";
import { Link } from "react-router-dom";

const NewHero = () => {
  return (
    <>
      <div className="home-container">
        <div className="container-1">
          <div className="grid-container">
            <div className="featured grid-one">
              <Link to="categories/all">
                <div id="img1" className="lil-overlay"></div>
                <img src={All} alt="img1" />
                <p className="main-description">Live Comfortably</p>
              </Link>
            </div>
            <div className="featured grid-two">
              <Link to="categories/skin-care">
                <div id="img2" className="lil-overlay"></div>
                <img src={SK} alt="img2" />
                <p className="main-description">Skincare</p>
              </Link>
            </div>
            <div className="featured grid-four">
              <Link to="categories/kitchen">
                <div id="img3" className="lil-overlay"></div>
                <img src={Kit} alt="img3" />
                <p className="main-description">Kitchen</p>
              </Link>
            </div>
            <div className="featured grid-four-low">
              <Link to="categories/electronics">
                <div id="img4" className="lil-overlay"></div>
                <img src={Ele} alt="img4" />
                <p className="main-description">Electronics</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewHero;
