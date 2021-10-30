import React from 'react';
import Feature from '../Features/Feature';
import Slider from '../Slider/Slider';
import TopDestination from '../TopDestinations/TopDestination';
import Destination from './Destination';

const Home = () => {
    return (
        <div>
            <Slider />
            <Feature />
            <Destination />
            <TopDestination />


        </div>
    );
};

export default Home;