import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../../src/logo.png';
import './Footer.css'

const Footer = () => {

    const fb = <FontAwesomeIcon icon={faFacebook} />
    const ig = <FontAwesomeIcon icon={faInstagram} />
    const ln = <FontAwesomeIcon icon={faLinkedin} />
    const yt = <FontAwesomeIcon icon={faYoutube} />


    return (

        <div className="bg-dark">
            <Container>
                {/* Footer */}
                <footer
                    className="text-center text-lg-start text-white"
                >

                    <div className="py-4">
                        {/* Section: Links */}
                        <section>
                            {/*Grid row*/}
                            <div className="row">
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <img className='footerLogo' src={logo} alt="" />
                                    <p>
                                        Welcome the latest travel booking world. This is the world class company. So let's enjoy!!!!!
                                    </p>
                                </div>
                                {/* Grid column */}

                                <hr className="w-100 clearfix d-md-none" />

                                {/* Grid column */}
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Destination</h6>
                                    <p>
                                        <a className="text-white">Bangladesh</a>
                                    </p>
                                    <p>
                                        <a className="text-white">USA</a>
                                    </p>
                                    <p>
                                        <a className="text-white">UK</a>
                                    </p>
                                    <p>
                                        <a className="text-white">Canada</a>
                                    </p>
                                </div>
                                {/* Grid column */}

                                <hr className="w-100 clearfix d-md-none" />

                                {/* Grid column */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a className="text-white">Your Account</a>
                                    </p>
                                    <p>
                                        <a className="text-white">Become an Affiliate</a>
                                    </p>
                                    <p>
                                        <a className="text-white">Shipping Rates</a>
                                    </p>
                                    <p>
                                        <a className="text-white">Help</a>
                                    </p>
                                </div>

                                {/* Grid column */}
                                <hr className="w-100 clearfix d-md-none" />

                                {/* Grid column */}
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                    <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                    <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                                    <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                    <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                                </div>
                                {/* Grid column */}
                            </div>
                            {/*Grid row*/}
                        </section>
                        {/* Section: Links */}

                        <hr className="my-3" />

                        {/* Section: Copyright */}
                        <section className="px-3 pt-0">
                            <div className="row d-flex align-items-center">
                                {/* Grid column */}
                                <div className="col-md-7 col-lg-8 text-center text-md-start">
                                    {/* Copyright */}
                                    <div className="p-3">
                                        © 2020 Copyright:
                                        <a className="text-white" href="#"
                                        >Happy Travelling</a>
                                    </div>
                                    {/* Copyright */}
                                </div>
                                {/* Grid column */}

                                {/* Grid column */}
                                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end ">
                                    {/* Facebook */}
                                    <a
                                        className="btn btn-outline-light btn-floating m-1 text-white mr-2"
                                        role="button"
                                    >{fb}</a>

                                    {/* Twitter  */}
                                    <a
                                        className="btn btn-outline-light btn-floating m-1 text-white mr-2"
                                        role="button"
                                    >{ln}</a>

                                    {/* Google  */}
                                    <a
                                        className="btn btn-outline-light btn-floating m-1 text-white mr-2"
                                        role="button">{yt}</a>

                                    {/* Instagram  */}
                                    <a
                                        className="btn btn-outline-light btn-floating m-1 text-white"
                                        role="button"
                                    >{ig}</a>
                                </div>
                            </div>
                        </section>
                    </div>
                </footer>
            </Container>
        </div>

    );
};

export default Footer;