import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_conatiner">
          <div className="links">
            <Link>About</Link>
            <Link>Store locator</Link>
            <Link>FAQ's</Link>
            <Link>Carrers</Link>
            <Link>Contact Us</Link>
          </div>
          <div className="design_by">CHETAN SERIKAR</div>
        </div>
      </div>
    </footer>
  );
};
