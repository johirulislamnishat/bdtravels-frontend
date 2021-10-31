import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import '../Shared/Common.css'

const Feature = () => {
    return (

        <div className='mt-5'>
            <Container>

                <h2 className='text-center'>Why Choose Us</h2>

                <Row xs={1} md={4} className="g-4 mt-2">

                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title className='textColor'>1,000+ local guides</Card.Title>
                                <Card.Text>We have lot's of local guides. Best quality service provided.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button variant="success">Success</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button variant="success">Success</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Feature;