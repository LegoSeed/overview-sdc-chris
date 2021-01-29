/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselContainer = styled.div`
background-color: #FFFFFF;
height: 60%;
width: 100%;
`;

const CarouselComponent = (props) => (
  <CarouselContainer className="carousel-wrapper">

    <Carousel showArrows="true">
      {props.pictures.map((url, index) => (
        <div key={index}>
          <img src={url} alt="..." />
          <p>Legend</p>
        </div>
      ))}
    </Carousel>

  </CarouselContainer>
);

export default CarouselComponent;
