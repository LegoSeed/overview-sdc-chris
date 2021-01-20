import React from 'react';
import StarRatings from 'react-star-ratings';
import Quantity from './quantity';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="product">

        <div className="brand" style={{ textTransform: 'uppercase' }}>
          {this.props.lego.brand}
        </div>

        <div className="name">
          {this.props.lego.name}
        </div>

        <div className="stars reviewCount">
          <StarRatings
            rating={this.props.lego.reviewAvg}
            starRatedColor="yellow"
            numberOfStars={5}
          />
          {this.props.lego.reviewTotal} Reviews
        </div>

        <div className="price">
          {this.props.lego.price}
        </div>

        <div className="quantity">
          <Quantity />
        </div>

        <div>
          <button className="button" type="button">Add to Bag</button>
        </div>

      </div>
    );
  }
}

export default ProductInfo;
