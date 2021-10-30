import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand><Link className='navLink' to="/home">Logo</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Link className='navLink' to="/home">Home</Link>
                        <Link className='navLink' to="/destination">Destination</Link>
                        <Link className='navLink' to="/about">About Us</Link>
                        <Link className='navLink' to="/contact">Contact Us</Link>

                    </Nav>
                    <Nav>
                        <Link className='navLink py-1 px-5 bg-primary text-white rounded-pill mr-2' to="/login">Login</Link>
                        <Link className='navLink py-1 px-5 bg-primary text-white rounded-pill' to="/login">Admin</Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;