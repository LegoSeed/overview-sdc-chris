import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

const CarouselContainer = styled.div`
background-color: #FFFFFF;
height: 70%;
width: 100%;
`;

const CarouselComponent = (props) => (
  <CarouselContainer className="carousel-wrapper">

    <Carousel showArrows="true">
      {props.pictures.map((url, index) => (
        <div index={index}>
          <img src={url} alt="..." />
          <p>Legend</p>
        </div>
      ))}
    </Carousel>

  </CarouselContainer>
);

export default CarouselComponent;
