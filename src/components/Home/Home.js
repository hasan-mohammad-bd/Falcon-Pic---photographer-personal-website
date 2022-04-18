import React from 'react';
import AboutPhoto from '../AboutPhoto/AboutPhoto';
import Cards from '../Cards/Cards';
import Slider from '../Slider/Slider';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AboutPhoto></AboutPhoto>
            <Cards></Cards>
        </div>
    );
};

export default Home;
