import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Spinner, Button, Card, Row, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import Header from '../Navbar/Navigation';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const DestinationDetails = () => {

    const map = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const [travels, setTravels] = useState({});
    const { img, title, discount, description, location } = travels;


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // const [cancelTravels, setCancelTravels] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const url = `https://chilling-pirate-27336.herokuapp.com/travelData/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                reset()
                setTravels(data)
            })
    }, []);

    const email = sessionStorage.getItem('email')
    const onSubmit = data => {
        data.email = (email)

        axios.post('https://chilling-pirate-27336.herokuapp.com/orders', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('Success');
                    reset();
                }
            })

        // console.log(data)
    };


    return (

        <>
            <div>
                <Header />
            </div>

            <div className='mb-5'>

                <Container>

                    {travels.length === 0 ? <Button className='w-100 mx-auto' variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        <span className='ml-2'>Loading...</span>
                    </Button> :
                        <Row xs={1} md={2} className="g-4 mt-2">

                            <Col xs={6}>
                                <Card>
                                    <Card.Img variant="top" className='destinationImage' src={img} />
                                    <Card.Body>
                                        <div className='d-flex justify-content-between'>

                                            <Card.Title>{title}</Card.Title>

                                            <Card.Title>$ {discount}</Card.Title>
                                        </div>
                                        <Card.Text>{description}
                                        </Card.Text>

                                        <Card.Text><i className='text-secondary'>{map} </i> {location}</Card.Text>


                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6}>
                                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column w-75 mx-auto'>

                                    <input className='inputStyle form-control' {...register("img")} value={img} />

                                    <input className='inputStyle form-control' {...register("title")} value={title} />

                                    <input type='number' className='inputStyle form-control' {...register("discount")} value={discount} />


                                    <textarea className='inputStyle form-control' {...register("description")} value={description} />

                                    <input className='inputStyle form-control' {...register("location")} value={location} />


                                    {errors.exampleRequired && <span>This field is required</span>}

                                    <input className='inputBtnStyle mt-4 w-50 mx-auto rounded-pill bg-primary py-2 px-4' type="submit" value='Confirm' />


                                </form>
                            </Col>

                        </Row>
                    }
                </Container>

            </div >
        </>
    );
};

export default DestinationDetails;