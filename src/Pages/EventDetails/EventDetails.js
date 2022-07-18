import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import './EventDetails.css'
import { FaCalendarAlt } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Link, Outlet } from 'react-router-dom';


const EventDetails = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [covers, setCover] = useState([])
    const [event, setEvent] = useState([])
    const [agree, setAgree] = useState(false)
    const [agree2, setAgree2] = useState(false)


    // Get user Data for banner
    useEffect(() => {
        fetch('https://enigmatic-fjord-72408.herokuapp.com/allData')
            .then(res => res.json())
            .then(data => setCover(data))
    }, [])

    // Get event
    useEffect(() => {
        fetch('https://enigmatic-fjord-72408.herokuapp.com/event')
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [])


    const imgbbApi = 'eb7029e2c67ae133bd4c4ba548af171d'
    const onSubmit = (data) => {

        const url = `https://api.imgbb.com/1/upload?key=${imgbbApi}`
        const image = data.img[0]
        const formData = new FormData()
        formData.append('image', image);

        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {

                if (result.success) {
                    const uploadImg = result.data.url;
                    console.log(uploadImg)
                    const userData = {
                        img: uploadImg,
                        url: data.url,
                        title: data.title,
                        date: data.date,
                        time: data.time
                    }
                    // send data to database
                    fetch('https://enigmatic-fjord-72408.herokuapp.com/userData', {
                        method: "POST",
                        headers: {
                        "content-type": "application/json"
                    },
                        body: JSON.stringify(userData)
                    })
            .then(res => res.json())
            .then(insertData => {
                reset()
                toast.success("Create Event Sucessfully")
            })
    }
})
    };



return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='eventBanner'>
            {
                covers.map(cover => <div>
                    <img className="coverImg" src={cover.img} alt="" /><br />
                </div>)
            }
            <div>

            </div>
            <input
                name='url'
                type="file"
                placeholder="Enter your Url"
                className=""
                {...register("img")}
            />

            <div >
                <h4>Event Name</h4>
                <input
                    name='title'
                    type="text"
                    placeholder="Enter Title"
                    className="inputStyle "
                    {...register("title")}
                />
                < hr />
            </div>
        </div>

        <div className='formEvent'>
            <h3>Where is the event taking place?</h3>
            {
                event.map(e => <Link className='nastedNav'
                    key={e._id}
                    to={`/eventDetails/:${e._id}`}
                >{e.title}</Link>)
            }
            <Outlet></Outlet>
            <input
                name='url'
                type="text"
                placeholder="Enter your Url"
                className="inputStyle "
                {...register("url")}
            />

            <h5 className='text-danger'><FaCalendarAlt /><span className='ms-2'>When will it happen?</span></h5>

            <p>Start Time</p>

            <div className='timeDate'>
                <input
                    name='date'
                    type="date"
                    placeholder="Enter your Date"
                    className="date "
                    {...register("date")}
                />

                <input
                    name='time'
                    type="time"
                    placeholder="Enter your Time"
                    className="time"
                    {...register("time")}
                />
            </div>

            <div>
                <h3 className='text-success'>🔑 Access</h3>
                <div className='access'>
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="" id="" />
                    <div>
                        <h6>Require Registration</h6>
                        <p>If selected, guests must register to receive meeting details.</p>
                    </div>
                </div>
                <div className='access'>
                    <input onClick={() => setAgree(!agree2)} type="checkbox" name="" id="" />
                    <div>
                        <h6>Require Registration Approval</h6>
                        <p>If selected, meeting information will only be sent to manually approved guests.</p>
                    </div>
                </div>

                <label htmlFor="" className={`ps-4  ${agree2 || agree ? 'text-primary' : 'text-danger'}`}>Must be selected one checkbox</label>
            </div>

            <input disabled={!agree || agree2} type="submit" className='form-button' value="Create Event" />
            <Footer></Footer>
        </div>


    </form>
);
};

export default EventDetails;