import React, { useState } from 'react';
import banner from '../../Asset/banner1.png'
import './Banner.css'
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Banner = () => {

    return (
        <div>
            <img className='banner' src={banner} alt="" />
          
           <div className='calender'>
                <p className='month'>JUL</p>
                <p className='date'>22</p>
                <p className='day'>Friday</p>
            </div>

            <div className='sessionDescription'>
                <h6>THIS IS YOUR EVENT  - <span className='nameStyle'>Manage Event</span> </h6>
                <h1 className=''>Coding Session</h1>
                <p className='sessionDate'><FaCalendarAlt /> Friday,22jul-23jul, 8:00-9:00am</p>
                <p className='nameStyle'><FaMapMarkerAlt />Pune,Maharashtra,India</p>
            </div>
        </div>
    );
};

export default Banner;