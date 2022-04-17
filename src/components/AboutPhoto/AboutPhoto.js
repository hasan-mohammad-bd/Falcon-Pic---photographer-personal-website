import React from "react";
import "./AboutPhoto.css";
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";

const AboutPhoto = () => {
  return (
    <div className="container container1">
      <div className="d-flex">
        <div className="img-holder-about"></div>
        <div className="text d-flex justify-content-center align-items-center">
          <div>
            <h1>
              <span className="heading">Why me ?</span>
            </h1>
            <p>
              I am professional photographer based in <span>NewYork</span> have
              7 years of experience in different photography filed. I worked
              with lots of big company including Target , Walmart, GAP, Tesla,
              Nike. with my professional knowledge I can work very effectively
              according to your customer needs. You can book any package
              according to your needs.{" "}
            </p>
            <p><span className="me-2 read-more">Read More <BsArrowRight></BsArrowRight> </span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPhoto;
