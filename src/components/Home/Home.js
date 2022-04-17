import React from 'react';
import AboutPhoto from '../AboutPhoto/AboutPhoto';
import Slider from '../Slider/Slider';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AboutPhoto></AboutPhoto>
        </div>
    );
};

export default Home;
