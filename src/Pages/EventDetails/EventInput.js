import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EventInput = () => {
    const { eventId } = useParams()
    const [event, setEvent] = useState([])

    console.log("bal mal chal", event, eventId)

    useEffect(() => {
        fetch(`https://enigmatic-fjord-72408.herokuapp.com/
event/${eventId}`)
            .then(res => res.json())
            .then(data => {
                console.log("voda", data)
                setEvent(data)
            })
    }, [eventId])

    return (
        <div>
            <p>Click for {eventId}</p>
            <p>{event.title}</p>
            <h1>{event.name}</h1>
        </div>
    );
};

export default EventInput;

