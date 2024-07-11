import Carousel from 'react-bootstrap/Carousel';
import kidsPNG from './Images/kids.png'
import menPNG from './Images/men.png'
import womenPNG from './Images/women.png'

function CarouselBanner() {
  return (
     <div className='carousel'>
        <Carousel>
          <Carousel.Item>
            <img src={kidsPNG } alt="kids" text="First slide"  className="itemC"/>
            <Carousel.Caption className="cText">
              {/* <h3>Season Sale</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <img src={menPNG } alt="men" text="Second slide" className="itemC"/>
            <Carousel.Caption className="cText">
              {/* <h3>Other Season Sale</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <img src={womenPNG } alt="women" text="Third slide" className="itemC"/>
            <Carousel.Caption className="cText">
              {/* <h3>Sale! Sale! Sale! </h3> */}
              {/* <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p>*/}
            
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CarouselBanner;