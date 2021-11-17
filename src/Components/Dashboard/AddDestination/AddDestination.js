import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddDestination.css';
import '../Dashboard/Dashboard.css';
import { Link } from 'react-router-dom';
import Header from '../../Navbar/Navigation';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../../../src/logo.png';
import useAuth from '../../Hooks/useAuth';

const AddDestination = () => {
    const { user, logOut } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://chilling-pirate-27336.herokuapp.com/travelData', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Success');
                    reset();
                }
            })
    };

    return (

        <div>
            <div className="d-sm-block d-md-none">
                <Header />
            </div>

            <div className="container-fluid">
                <div className="row content">
                    <div className="col-sm-2 d-none d-md-block sidenav">
                        <Navbar.Brand><Link className='navLink' to="/admin"><img className='logo' src={logo} alt="" /></Link></Navbar.Brand>

                        <Nav className="d-flex flex-column">

                            <Link className='active navLink mt-3' to="/admin">Dashboard</Link>
                            <Link className='navLink mt-2' to="/admin/add-destinations">Add Destination</Link>
                            <Link className='navLink mt-2' to="/manage-orders">Manage Orders</Link>
                            {/* <Link className='navLink mt-2' to="/contact">Contact Us</Link> */}
                            <div className='mt-5'>
                                {
                                    user?.email ? <button className='signOut' onClick={logOut}><Link className='navLink py-2 px-5 bg-primary text-white rounded-pill' to="/home">Signout</Link></button> : <Link className='navLink py-2 px-5 bg-primary text-white rounded-pill mr-2' to="/login">Signin</Link>
                                }
                            </div>
                        </Nav>
                    </div>
                    <br />

                    <div className="col-sm-10">
                        <div className="well">
                            <Container className='my-5'>
                                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column w-75 mx-auto'>

                                    <input className='inputStyle form-control' {...register("img", { required: true })} placeholder='Enter Image Url' />

                                    <input className='inputStyle form-control' {...register("discount", { required: true })} placeholder='Enter Discount Price' />
                                    <input className='inputStyle form-control' {...register("location", { required: true })} placeholder='Enter Location' />
                                    <input className='inputStyle form-control' {...register("title", { required: true })} placeholder='Enter Title' />
                                    <textarea className='inputStyle form-control' {...register("description", { required: true })} placeholder='Enter Description' />
                                    <input type='number' className='inputStyle form-control' {...register("rating", { required: true })} placeholder='Enter Rating' />
                                    <input type='number' className='inputStyle form-control' {...register("price", { required: true })} placeholder='Enter Price' />

                                    {errors.exampleRequired && <span>This field is required</span>}

                                    <input className='inputBtnStyle mt-4 w-50 mx-auto rounded-pill bg-primary py-3' type="submit" />
                                </form>
                            </Container>
                        </div>



                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddDestination;