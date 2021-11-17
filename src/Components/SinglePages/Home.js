import React from 'react';
import Feature from '../Features/Feature';
import Slider from '../Slider/Slider';
import TopDestination from '../TopDestinations/TopDestination';
import HomeDestination from './HomeDestination';
import Header from '../Navbar/Navigation';

const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <Feature />
            <HomeDestination />
            <TopDestination />


        </div>
    );
};

export default Home;