import React from 'react';
import "./About.css";
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";

const About = () => {
    return (
        <div className="container container1">
        <div className="d-flex flex-column flex-lg-row">
          <div className="img-holder-about-me"></div>
          <div className="text d-flex justify-content-center align-items-center">
            <div>
              <h1>
                <span className="heading">About me</span>
              </h1>
              <h2>Hasan Mohammad</h2>
              <p>
                I am working day and night to be full stock web developer. It's sometime very hard to focus but I am fully determined to achieve my dream. At the same time, growing my learning habit which is very important for a developer. 
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;