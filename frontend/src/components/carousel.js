import React from 'react';
// import ImageGallery from 'react-image-gallery';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext 
}
  from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
// import 'react-image-gallery/styles/css/image-gallery.css';

const CarouselComponent = (props) => (
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   };
  // }

  // render() {
  //   return (
  //     <div>
  //       <CarouselProvider
  //         naturalSlideWidth={100}
  //         naturalSlideHeight={125}
  //       />
  //       <Slider>
  // {this.props.pictures.map((pic, index) => <Slide index={index}><img src={pic} alt="..." 
  // /></Slide>)}
  //       </Slider>
  //     </div>
  //   );
  // }

  // const settings = {
  //   showArrows: true,
  //   showThumbs: true,
  //   thumbnailPosition: "right",
  // };
  // return (

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
