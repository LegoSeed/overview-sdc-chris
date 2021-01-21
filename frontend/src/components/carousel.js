import React from 'react';
// import ImageGallery from 'react-image-gallery';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import {
//   CarouselProvider, Slider, Slide, ButtonBack, ButtonNext
// }
// from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
// import 'react-image-gallery/styles/css/image-gallery.css';

const CarouselComponent = (props) => (
  <div className="carousel-wrapper">
    <Carousel>
      {props.pictures.map((url, index) => (
        <div key={index}>
          <img src={url} alt="..." />
          <p>Legend</p>
        </div>
      ))}
    </Carousel>
  </div>
);

export default CarouselComponent;
