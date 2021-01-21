// import Bootstrap from 'bootstrap';
import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  render() {
    return (
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="..." className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
        </div>

        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </a>

        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </a>

      </div>
    );
  }
}

export default Carousel;
