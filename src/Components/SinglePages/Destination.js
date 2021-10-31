import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Destination = () => {

    const [travelPackages, settravelPackage] = useState([]);

    const heart = <FontAwesomeIcon icon={faHeart} />

    useEffect(() => {
        fetch('http://localhost:5000/travelData')
            .then(res => res.json())
            .then(data => settravelPackage(data))
    }, [])

    return (
        <div className='mt-5'>

            <h2 className='text-center'>Top Destinations</h2>
            <Container>
                <Row xs={1} md={3} className="g-4 mt-2">

                    {
                        travelPackages.map(travelPackage => (
                            <Col key={travelPackage._id}>
                                <Card>
                                    <Card.Img variant="top" src={travelPackage.img} />
                                    <Card.Body>
                                        <Card.Title>{travelPackage.title}</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Link to={`/destination-details/${travelPackage._id}`}><Button variant="success">Success</Button></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Destination;