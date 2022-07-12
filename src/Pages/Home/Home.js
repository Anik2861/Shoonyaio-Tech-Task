import React from 'react';
import { Footer } from 'react-day-picker';
import Banner from '../Banner/Banner';
import SessionReg from '../SessionReg.js/SessionReg';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SessionReg></SessionReg>
            <Footer></Footer>
        </div>
    );
};

export default Home;