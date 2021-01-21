import React from 'react';

const Images = (props) => {
  if (props.index === 0) {
    return (
      <div className="carousel-item active">
        <div>
          <img src={props.pic} target="_blank" className="d-block w-100" alt="..." />
        </div>
      </div>
    );
  }
  return (
    <div className="carousel-item">
      <img src={props.pic} className="d-block w-100" alt="..." />
    </div>
  );
};

export default Images;
