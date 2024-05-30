import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import mike1PNG from "./mike1.png"
import jared1PNG from './jared1.png';
import francesco1PNG from './francesco1.png';

function Avaleht() {
  return (
    <div><br />
        <Carousel >

              <Carousel.Item>
            <img src={mike1PNG} alt="mike" text="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item >
            <img src={jared1PNG} alt="jared" text="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={francesco1PNG} alt="fransesco" text="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
  
        </Carousel>     
  </div>
  )
}

export default Avaleht 