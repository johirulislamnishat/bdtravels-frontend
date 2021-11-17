import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import Header from '../../Navbar/Navigation';
import { Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../../../src/logo.png';
import useAuth from '../../Hooks/useAuth';

const Dashboard = () => {
    const { user, logOut } = useAuth();
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
                            <h4>Dashboard</h4>
                            <p>Explore This!!!!</p>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;