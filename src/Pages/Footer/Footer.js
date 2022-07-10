import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div>
            <hr className='hLine'/>
            <div className='footerContainer'>
                <div className='footerLi'>
                    <p>Event</p>
                    <p>Community</p>
                    <p>Crypto</p>
                    <p>Pricing</p>
                    <p>Help</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;