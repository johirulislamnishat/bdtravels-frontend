import React, { useEffect, useState } from 'react';
import '../Dashboard/Dashboard.css';
import { Link } from 'react-router-dom';
import Header from '../../Navbar/Navigation';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../../../src/logo.png';
import useAuth from '../../Hooks/useAuth';
import './ManageOrder.css';

const ManageAll = () => {

    const [cancelOrder, setcancelOrder] = useState([]);
    const [orders, setOrders] = useState([]);
    const { user, logOut } = useAuth();

    useEffect(() => {
        fetch('https://chilling-pirate-27336.herokuapp.com/ordersData/')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setOrders(data))
    })

    //Cancel Booking
    const handleCancelOrder = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/deleteOrders/${id}`;
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
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Product Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Location</th>
                                                    <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            {
                                                orders.map(order => (
                                                    <tbody key={order._id}>
                                                        <tr>
                                                            <th className='d-flex' scope="row"><p>{order.title}</p>
                                                                <img className='imgSize' src={order.img} alt="" /></th>
                                                            <td>{user?.email}</td>
                                                            <td>{order.discount}</td>
                                                            <td>{order.location}</td>
                                                            <td>
                                                                <button onClick={() => handleCancelOrder(order._id)} type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                ))
                                            }
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAll;