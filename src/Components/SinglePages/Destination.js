import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Shared/Common.css'


const Destination = () => {

    const [travelPackages, settravelPackage] = useState([]);

    // const heart = <FontAwesomeIcon icon={faHeart} />
    const location = <FontAwesomeIcon icon={faMapMarkerAlt} />

    useEffect(() => {
        fetch('https://chilling-pirate-27336.herokuapp.com/travelData')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => settravelPackage(data))
    }, [])

    return (
        <div className='my-5'>

            <h2 className='text-center textColor'>Top Destinations</h2>
            <Container>

                {travelPackages.length === 0 ? <Button className='w-100 mx-auto' variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    <span className='ml-2'>Loading...</span>
                </Button> :
                    <Row xs={1} md={3} className="g-4 mt-2">

                        {
                            travelPackages.map(travelPackage => (
                                <Col key={travelPackage._id}>
                                    <Card>
                                        <Card.Img variant="top" className='destinationImage' src={travelPackage.img} />
                                        <Card.Body>
                                            <div className='d-flex justify-content-between'>

                                                <Card.Title>{travelPackage.title}</Card.Title>

                                                <Card.Title>$ {travelPackage.discount}</Card.Title>
                                            </div>
                                            <Card.Text>{travelPackage.description}
                                            </Card.Text>

                                            <Card.Text><i className='text-secondary'>{location} </i> {travelPackage.location}</Card.Text>

                                            <div className='d-flex justify-content-between'>
                                                <Link to={`/destination-details/${travelPackage._id}`}><Button variant="primary" className='py-2 px-5 rounded-pill'>Book Now</Button>
                                                </Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }

                    </Row>
                }
            </Container>
        </div>
    );
};

export default Destination;