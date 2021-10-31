import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="w-100 bannerImg"
                    src="https://media.istockphoto.com/photos/boat-catamaran-as-car-of-natural-color-picture-id495664772?k=20&m=495664772&s=612x612&w=0&h=H9RzxE_jyPMJyutOi2L6URNjieJTrf2PQORuQySyJCM="
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>We offer 60% off for international travel</h3>
                    <p>We're real travelers, as well as travel content creative professionals ready to provide travel articles, blog posts, guides, website copy and more!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100 bannerImg"
                    src="https://media.istockphoto.com/photos/surfboard-picture-id661834254?k=20&m=661834254&s=612x612&w=0&h=E9-54395wAYiphhHodio6Kb3G_szns-edQNEhBHsWs4="
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Let our professional writers help you create inspiring travel</h3>
                    <p>Most travel who want to feel inspired. So, here are top quality from travel industry that will inspire</p>
                </Carousel.Caption>
            </Carousel.Item>

            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    );
};

export default Slider;