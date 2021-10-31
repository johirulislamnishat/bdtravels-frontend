import React, { useEffect, useState } from 'react';
import { Spinner, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const DestinationDetails = () => {

    const [travels, setTravels] = useState({});

    const [cancelTravels, setCancelTravels] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const url = `https://chilling-pirate-27336.herokuapp.com/travelData/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTravels(data))
    }, [])

    //Cancel Travel
    const handleCancelTravel = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://chilling-pirate-27336.herokuapp.com/travelData/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete Success');
                        const remainingTravel = cancelTravels.filter(travel => travel._id !== id);
                        setCancelTravels(remainingTravel);
                    }
                })
        }
    }

    return (
        <div>
            {
                travels.length === 0 ? <Button className='w-100 mx-auto' variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    <span className='ml-2'>Loading...</span>
                </Button> :
                    <div>
                        <img src={travels.img} alt="" />
                        <h1>{travels.title}</h1>
                    </div>
            }

            <Button className='bg-danger' onClick={() => handleCancelTravel(travels._id)}>Cancel</Button>

        </div>
    );
};

export default DestinationDetails;