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
                        <Button variant="primary">Login</Button>
                        <Link eventKey={2} to="#memes">
                            Dank memes
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;