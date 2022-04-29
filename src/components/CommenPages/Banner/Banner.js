import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../images/Banner/phono-slider-1.webp';
import banner2 from '../../../images/Banner/phono-slider-2.webp';
import banner3 from '../../../images/Banner/phono-slider-3.webp';

const Banner = () => {
  return (
    <div className='banner'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
           <h1>ZANIA BLACK EDITION</h1>
           <h1>CURVY BEVEL DUAL AUDIO</h1>
           <button className="btn btn-danger mt-3 mb-5">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
           <h1 className='text-dark'>4K RESOLUTION</h1>
           <h1 className='text-dark'>EXCLUSIVE STEEL FRAME</h1>
           <button className="btn btn-danger mt-3 mb-5">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>DELTA ZERTIGA PROCESSOR</h1>
            <h1>FULL SCREEN DISPLAY</h1>
            <button className="btn btn-danger mt-3 mb-5">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;