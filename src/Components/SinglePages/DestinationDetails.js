import React, { useEffect, useState } from 'react';
import { Spinner, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

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
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={travels.img} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{travels.title}</h5>
                                        <h5 className="card-title">$ {travels.discount}</h5>
                                        <p className="card-text">{travels.description}</p>
                                        <p className="card-text"><small className="text-muted">{travels.location}</small></p>


                                        <Link to=''><Button variant="primary" className='py-2 px-4 rounded-pill'>Update</Button></Link>

                                        <Button className='bg-danger' onClick={() => handleCancelTravel(travels._id)}>Delete</Button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
            }



        </div >
    );
};

export default DestinationDetails;