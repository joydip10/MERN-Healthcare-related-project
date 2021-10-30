import React from 'react';
import Banner from '../Banner/Banner';
import MiddleSection from '../MiddleSection/MiddleSection';
import ShowServices from '../ShowServices/ShowServices';
import "./Home.css"

const Home = () => {
    return (
        <div id="#home">
            <Banner></Banner>
            <MiddleSection></MiddleSection>
            <ShowServices></ShowServices>
        </div>
    );
};

export default Home;