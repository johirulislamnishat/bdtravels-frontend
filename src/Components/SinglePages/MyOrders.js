import React, { useEffect, useState } from 'react';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Row, Col, Container, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Shared/Common.css';
import Header from '../Navbar/Navigation'

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [cancelOrder, setcancelOrder] = useState([]);
    const email = sessionStorage.getItem('email');

    const location = <FontAwesomeIcon icon={faMapMarkerAlt} />

    useEffect(() => {
        fetch(`http://localhost:5000/ordersData/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    })

    //Cancel Booking
    const handleCancelBooking = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://chilling-pirate-27336.herokuapp.com/deleteOrders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Delete Success');
                        const remainingOrder = cancelOrder.filter(order => order._id !== id);
                        setcancelOrder(remainingOrder);
                    }
                })
        }
    }

    return (
        <>
            <div>
                <Header />
            </div>
            <div className='my-5'>

                <h2 className='text-center textColor'>Your Booked Travels</h2>
                <Container>

                    <Row xs={1} md={3} className="g-4 mt-2">

                        {
                            orders.map(order => (
                                <Col key={order._id}>
                                    <Card>
                                        <Card.Img variant="top" className='destinationImage' src={order.img} />
                                        <Card.Body>
                                            <div className='d-flex justify-content-between'>

                                                <Card.Title>{order.title}</Card.Title>

                                                <Card.Title>$ {order.discount}</Card.Title>
                                            </div>
                                            <Card.Text>{order.description}
                                            </Card.Text>

                                            <Card.Text><i className='text-secondary'>{location} </i> {order.location}</Card.Text>

                                            <div className='d-flex justify-content-between'>

                                                <Button onClick={() => handleCancelBooking(order._id)} variant="danger" className='py-2 px-5 rounded-pill'>Cancel</Button>

                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }

                    </Row>

                </Container>
            </div>
        </>
    );
};

export default MyOrders;