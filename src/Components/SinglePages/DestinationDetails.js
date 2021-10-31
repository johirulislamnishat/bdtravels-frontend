import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DestinationDetails = () => {

    const [travels, setTravels] = useState({});

    const [cancelTravels, setCancelTravels] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/travelData/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTravels(data))
    }, [])

    //Cancel Travel
    const handleCancelTravel = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/travelData/${id}`;
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
            <h1>Image: {travels.img}</h1>
            <Button className='bd-danger' onClick={() => handleCancelTravel(travels._id)}>Cancel</Button>

        </div>
    );
};

export default DestinationDetails;