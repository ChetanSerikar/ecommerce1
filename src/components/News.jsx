import React from "react";

export const News = () => {
  return (
    <div className="news">
      <div className="container-1">
        <div className="news_container">
          <div className="news_title">NEWSLETTER</div>
          <form className="form">
            <input placeholder="enter the email@gmail.com" />
            <button>SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
};
