import React from 'react';
import './Footer.css'
// import { BiEnvelopeOpen} from 'react-icons/fa';

import { BiEnvelopeOpen } from "react-icons/bi";
import { FaRegSun } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
    return (
        <div>
            <hr className='hLine' />
            <div className='footerContainer'>
                <div className='footerLi'>
                    <p><FaRegSun /></p>
                    <p>Event</p>
                    <p>Community</p>
                    <p>Crypto</p>
                    <p>Pricing</p>
                    <p>Help</p>
                </div>
                <div className='mt-3'>
                    <ImInstagram />
                    <BiEnvelopeOpen className='icon' />
                </div>
            </div>
        </div>
    );
};

export default Footer;