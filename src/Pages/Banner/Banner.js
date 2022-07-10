import React from 'react';
import banner from '../../Asset/banner1.png'
import './Banner.css'


const Banner = () => {
    return (
        <div>
            <img className='banner' src={banner} alt="" />
        </div>
    );
};

export default Banner;