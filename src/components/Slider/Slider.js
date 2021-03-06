import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import "./Slider.css"
import { useNavigate } from "react-router-dom";

const Slider = () => {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate()

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="cover1"></div>
        <Carousel.Caption className='meddle'>
          <h1 className='text-center heading'>Meet with your professional photographer </h1>
          <button onClick={()=>navigate("/checkout/6299dfdea53fad61af6cb13c")} className='btn1'>Book Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="cover2"></div>

      <Carousel.Caption className='meddle'>
          <h1 className='text-center heading'>Seven years of fashion photography experience</h1>
          <button onClick={()=>navigate("/checkout/6299dfdea53fad61af6cb13c")} className='btn1'>Book Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="cover3"></div>

      <Carousel.Caption className='meddle'>
          <h1 className='text-center heading'>Using most latest camera technology and gears</h1>
          <button onClick={()=>navigate("/checkout/6299dfdea53fad61af6cb13c")} className='btn1'>Book Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Slider;