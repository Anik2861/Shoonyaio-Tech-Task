import Button from 'react-bootstrap/Button';
import React from 'react';
import './Events.css'
import { Link } from 'react-router-dom';
import img1 from '../../Asset/events/Screenshot_1.png'
import img2 from '../../Asset/events/Screenshot_2.png'
import img3 from '../../Asset/events/Screenshot_3.png'

const Events = () => {
    return (
        <div>
            <div className='createEvent'>
                <h1>Events</h1>
                <div>
                    <Link to='/eventDetails'>
                        <Button variant="outline-danger">+ Create Event</Button>
                    </Link>
                </div>
            </div>
            <div className='eventRoute'>
                <span>Upcoming</span>
                <span>Past</span>
                <span>Embed</span>
                <span>Credit Packs</span>
                <span id='allEvents'>All Events</span>
            </div>
            < hr />
            <div className='eventImg'>
                <img className='img1' src={img2} alt="" />
                <img className='img2' src={img1} alt="" />
                <img className='img3' src={img3} alt="" />
            </div>
            <div className='text-center mt-lg-5'>
                <h3>Host Events with Luma</h3>
                <p>Beautiful event pages. Sell tickets. Automatic reminders.<br /> Reviews and analytics. Luma has all you need for a successful virtual event.</p>
                <Link to='/eventDetails'>
                    <Button variant="danger">Create New Event</Button>
                </Link>
            </div>
        </div>
    );
};

export default Events;