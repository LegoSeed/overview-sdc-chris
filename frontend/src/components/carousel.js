/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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

const arrowStyles = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(50% - 15px)',
  width: 30,
  height: 30,
  cursor: 'pointer',
};

const CarouselComponent = (props) => (
  <CarouselContainer class="d-flex" className="carousel-wrapper">

    <Carousel
      renderArrowPrev={(onClickHandler, hasPrev, label) => hasPrev && (
      <span onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
        <i style={{ color: '#F6C500', 'font-size': '2.75rem' }} className="fas fa-arrow-circle-left" />
      </span>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => hasNext && (
      <span onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 30 }}>
        <i style={{ color: '#F6C500', 'font-size': '2.75rem' }} className="fas fa-arrow-circle-right" />
      </span>
      )}
    >
      {props.pictures.map((url, index) => (
        <div key={index}>
          <img src={url} alt="..." />
        </div>
      ))}
    </Carousel>

  </CarouselContainer>
);

export default CarouselComponent;
