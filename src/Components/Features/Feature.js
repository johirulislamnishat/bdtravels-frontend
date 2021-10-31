
import { faCar, faFighterJet, faRoad, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import '../Shared/Common.css'

const Feature = () => {

    const bag = <FontAwesomeIcon icon={faSuitcaseRolling} />
    const air = <FontAwesomeIcon icon={faFighterJet} />
    const car = <FontAwesomeIcon icon={faCar} />
    const road = <FontAwesomeIcon icon={faRoad} />

    return (

        <div className='mt-5'>
            <Container>

                <h2 className='text-center textColor'>Why Choose Us</h2>

                <Row xs={1} md={4} className="g-4 mt-2">

                    <Col>
                        <Card>
                            <i className='text-center text-secondary fs-1'>{bag}</i>
                            <Card.Body>
                                <Card.Title className='textColor'>1,000+ local guides</Card.Title>
                                <Card.Text>We have lot's of local guides. Best quality service provided. Mainly suit for 7-8m with 25 seats bus.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <i className='text-center text-secondary fs-1'>{car}</i>
                            <Card.Body>
                                <Card.Title className='textColor'>Aircondition Transport</Card.Title>
                                <Card.Text>Danfoss provides bus and train air conditioning parts for energy-efficient systems.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <i className='text-center text-secondary fs-1'>{air}</i>
                            <Card.Body>
                                <Card.Title className='textColor'>Airplane Transport</Card.Title>
                                <Card.Text>Transport air conditioning is mainly suit for 7-8m with 25 seats bus, it should be installed on the rooftop.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <i className='text-center text-secondary fs-1'>{road}</i>
                            <Card.Body>
                                <Card.Title className='textColor'>Personal Road Guide</Card.Title>
                                <Card.Text>Autoclima is offering a specialized range of products for air condition any type of vehicles
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Feature;