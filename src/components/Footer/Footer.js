import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import img from "../../img/logo (5).png";

const Footer = () => {
  return (
    <div className="container-2 sticky-top">
      <div className="d-flex justify-content-between container align-items-center py-3">
        <div className="img-holder">
          <img className="w-100" src={img} alt="" />
        </div>
        <div>
            <h4>Contracts</h4>
            <p>Phone: +8801688861610</p>
            <p>email: hasan.md.east@gamil.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
