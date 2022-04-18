import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cards.css";

const Cards = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-center pb-3 heading">Services</h1>
      <div className="services">
        <div className="service-1 service text-center">
            <div className="line"></div>
            <h5 className="py-2">$ 3000</h5>
            <h3 className="py-2">FASHION SHOOTING</h3>
            <button onClick={()=>navigate("/checkout")} className="btn1">BOOK NOW</button>
            <p className="description">I am working with fashion photography for so long. Have vast experience. you can choose this package if you need any fashion related photography</p>

        </div>
        <div className="service-2 service text-center">
            <div className="line"></div>
            <h5 className="py-2">$ 5000</h5>
            <h3 className="py-2">INTERIOR SHOOTING</h3>
            <button onClick={()=>navigate("/checkout")} className="btn1">BOOK NOW</button>
            <p className="description">My interior photography have long reputation since I started working in this field. the package could be your best choice </p>

        </div>
        <div className="service-3 service text-center">
            <div className="line"></div>
            <h5 className="py-2">$ 2000</h5>
            <h3 className="py-2">PRODUCT SHOOTING</h3>
            <button onClick={()=>navigate("/checkout")} className="btn1">BOOK NOW</button>
            <p className="description">I am offering very affordable rate of product photography where I cam offering almost photos with $2000. I think I would be best deal for you</p>

        </div>
      </div>
    </div>
  );
};

export default Cards;
