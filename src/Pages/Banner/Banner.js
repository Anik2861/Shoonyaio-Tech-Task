import React, { useState } from 'react';
import banner from '../../Asset/banner1.png'
import './Banner.css'
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Banner = () => {
    const today = new Date()
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date();
    var monthName = months[d.getMonth()];
    return (
        <div>
            <img className='banner' src={banner} alt="" />

            <div className='calender'>
                <p className='month'>{monthName}</p>
                <p className='date'>{today.getDate()}</p>
                <p className='day'>{today.getDay()}</p>
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