import React from "react";

import Banner1 from "../img/banner/banner1.jpg";

export const Banner = () => {
  return (
    <div className="container-1">
      <div className="banner">
        <div className="banner__left">
          <div className="banner__left__title">Creative harmonious living</div>
          <div className="banner__left__desc">
            RAOUF Products are all made to standard sizes so that you can mix
            and match them freely.
          </div>
          <button className="banner__left__button">SHOP NOW</button>
        </div>
        <div className="banner__img">
          <img src={Banner1} />
        </div>
      </div>
    </div>
  );
};
