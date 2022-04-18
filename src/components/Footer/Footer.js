import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import img from "../../img/logo (5).png";
import { GrInstagram } from "@react-icons/all-files/gr/GrInstagram";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";

const Footer = () => {
  return (
    <div className="container-2 sticky-top footer text-center text-md-start mx-auto">
      <div className="d-flex flex-column flex-md-row justify-content-between container pt-4">
        <div className="img-holder d-flex mx-auto mx-lg-0 justify-content-between align-items-center">
          <img className="w-100 " src={img} alt="" />
        </div>
        <div className="social">
        <h4 className="m-3 m-lg-0">Social</h4>
            <hr className="mx-auto mx-lg-0"/>
            <a  href="https://www.instagram.com/hasan_mohammad_7/" target="_blank"><span className="me-2"><GrInstagram></GrInstagram></span> Instagram</a>
            <a href="https://www.facebook.com/hasan.md.007/" target="_blank"><span className="me-2"><FaFacebookF></FaFacebookF></span> Facebook</a>
            <a href="https://www.linkedin.com/in/hasan19947/" target="_blank"><span className="me-2"><FaLinkedinIn></FaLinkedinIn></span> Linkdin</a>
        </div>
        <div>
            <h4 className="m-3 m-lg-0">Contracts</h4>
            <hr className="mx-auto mx-lg-0"/>
            <p className="my-1">Phone: +8801688861610</p>
            <p className="my-1">email: hasan.md.east@gamil.com</p>
            <p className="mt-3">Copyright &copy; 2022 FALCON PIC</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
