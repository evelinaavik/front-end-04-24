import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import mike1PNG from "../images/mike1.png"
import jared1PNG from '../images/jared1.png';
import francesco1PNG from '../images/francesco1.png';

function Carousel1() {
  return (
    <div>
        <Carousel>
              <Carousel.Item className="item">
            <img src={mike1PNG} alt="mike" text="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p> </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="item">
            <img src={jared1PNG} alt="jared" text="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p> </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="item">
            <img src={francesco1PNG} alt="fransesco" text="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p> </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>     


    </div>
  )
}

export default Carousel1