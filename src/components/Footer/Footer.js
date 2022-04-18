import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import img from "../../img/logo (5).png";
import { GrInstagram } from "@react-icons/all-files/gr/GrInstagram";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";

const Footer = () => {
  return (
    <div className="container-2 sticky-top footer">
      <div className="d-flex justify-content-between container pt-4">
        <div className="img-holder d-flex justify-content-between align-items-center">
          <img className="w-100 " src={img} alt="" />
        </div>
        <div className="social">
        <h4>Contracts</h4>
            <hr />
            <a href=""><span className="me-2"><GrInstagram></GrInstagram></span> Instagram</a>
            <a href=""><span className="me-2"><FaFacebookF></FaFacebookF></span> Facebook</a>
            <a href=""><span className="me-2"><FaLinkedinIn></FaLinkedinIn></span> Linkdin</a>
        </div>
        <div>
            <h4>Contracts</h4>
            <hr />
            <p className="my-1">Phone: +8801688861610</p>
            <p className="my-1">email: hasan.md.east@gamil.com</p>
            <p className="mt-3">Copyright &copy; 2022 FALCON PIC</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
