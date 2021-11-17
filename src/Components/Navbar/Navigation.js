import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Navbar.css';
import logo from '../../../src/logo.png'

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand><Link className='navLink' to="/home"><img className='logo' src={logo} alt="" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Link className='navLink' to="/home">Home</Link>
                        <Link className='navLink' to="/destination">Destination</Link>
                        <Link className='navLink' to="/my-orders">My Orders</Link>
                        <Link className='navLink' to="/about">About Us</Link>
                        <Link className='navLink' to="/contact">Contact Us</Link>

                    </Nav>
                    <Nav>

                        <span className='text-white text-truncate displayUser'>{user.displayName} </span>
                        {
                            user?.email ? <button className='signOut' onClick={logOut}><Link className='navLink py-2 px-5 bg-primary text-white rounded-pill' to="/home">Signout</Link></button> : <Link className='navLink py-2 px-5 bg-primary text-white rounded-pill mr-2' to="/login">Signin</Link>
                        }
                        <Link className='navLink py-2 px-5 bg-primary text-white rounded-pill' to="/admin">Admin</Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;