import React from 'react';
import './Slider.css'
import { Carousel } from 'react-bootstrap';
import slideFirst from '../../images/pic-1.jpg';
import slideSecond from '../../images/pic-2.jpg';
import slideThird from '../../images/pic-3.jpg';

const Slider = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                  <img className="d-block w-100" src={slideFirst} alt="First slide"/>
                  <Carousel.Caption>
                    <h2>Learn Code Effectively</h2>
                    <p>We are ensuring you to learn code effectively with us</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={slideSecond} alt="Second slide"/>
                  <Carousel.Caption>
                    <h2>Learn Basic To Advanced</h2>
                    <p>You will be learn the code from basic to advanced</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={slideThird} alt="Third slide"/>
                  <Carousel.Caption>
                    <h2>Learn World Class Coding</h2>
                    <p>We are teching you world class coding strategy</p>
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;