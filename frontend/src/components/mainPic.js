import React from 'react';
import { Carousel } from 'react-bootstrap';
import Images from './images';

// const bootstrap = require('bootstrap');

class MainPic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // const pictures = this.props.lego.pictures;
    // console.log(this.props);
    // const myCarousel = document.querySelector('carousel slide');
    // const carousel = new bootstrap.Carousel(myCarousel);
    return (
      <Carousel>
        <div>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {this.props.pictures.map((pic, index) => {
                return <Images index={index} pic={pic}/>})}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden" />
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden" />
            </a>
          </div>
        </div>
      </Carousel>
    );
  }
}

export default MainPic;
// <img src={this.props.pictures} target="_blank" className="d-block w-100" alt="..." />
// {this.props.pictures.map((pic) => { */}
//   <div className="carousel-item active">
//  <Images pic={pic} /> 
//     </div>})} */}
