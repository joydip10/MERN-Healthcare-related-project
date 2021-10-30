import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "./consultdoctors.jpg";
import img2 from "./labtest.jpg";
import img3 from "./Therapy.jpg";
const Banner = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    style={{height:"500px"}}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>"Medical Consultancy"</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    style={{height:"500px"}}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h1>"Lab Tests"</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    style={{height:"500px"}}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h1 className="">"Therapies"</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;