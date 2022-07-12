import React from 'react';
import './SessionReg.css'
import hostImg from '../../Asset/male-profile.jpg'
import { BiChevronRight } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { Link } from 'react-router-dom';



const SessionReg = () => {
    return (
        <div className='sessionContainer'>
            <div className='registration'>
                <h1 className='text-white'>Ragistration</h1>
                <p>Hello! please register below. You will be able to join the event when the host approves your registration.</p>
                <div className='detailsCard'>
                    <div className='hostInfo'>
                        <img className='hostImg' src={hostImg} alt="" />
                        <div >
                            <h2>Pushpak Hurpade</h2>
                            <h2>pushpak.developer@gmail.com</h2>
                        </div>
                    </div>
                    <button className='regBtn'>Register</button>
                </div>
            </div>

            <div>
                <div className='hostInfo'>
                    <img className='hostImg' src={hostImg} alt="" />
                    <div>
                        <h4>Pushpak Hurpade</h4>
                        <small>Host</small>
                    </div>
                    <BiChevronRight className='ml-3 mt-3' />
                </div>
                <p><ImInstagram />
                    <Link to='/'>
                        <span className='mt-4 ml-3'> Connect the host</span>
                    </Link>
                </p>
                <hr />
                <div>
                    <h3>Location</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.1419971642!2d73.72288019713787!3d18.524564859228065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sbd!4v1657453301138!5m2!1sen!2sbd" width="300" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <p>Pune,Maharashtra</p>
                </div>
                <hr />
                <button className='shareBtn'><FaShareAlt /> Share This Event</button>
            </div>
        </div>
    );
};

export default SessionReg;