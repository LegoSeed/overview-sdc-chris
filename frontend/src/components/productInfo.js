/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import Quantity from './quantity';

const ProductInfoContainer = styled.div`
background-color: #FFFFFF;
height: 95%;
width: 85%;
`;

const Brand = styled.div`
textTransform: uppercase;
font-style: oblique;
font-size: 3rem;
`;
const Name = styled.div`
font-size: 20px;
font-weight: 600;
font-family: Cera Pro,sans-serif;
`;
const Available = styled.div`
margin-bottom: 15px;
color: rgb(53, 143, 53);
`;
const Stars = styled.div`
line-height: 2;
align-self: center;
font-size: 0.5rem;
float: left;
align-self: left;
margin-bottom: 120px;
color: blue;
text-decoration: underline;
`;

const Price = styled.div`
font-weight: 800;
 font-family: Cera Pro,sans-serif;

`;
const QuantityComponent = styled.div`

`;
const AddToBag = styled.button`

`;
class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <ProductInfoContainer class="flex-fill" className="product">

        <Row>
          <Brand className="brand">
            {this.props.lego.brand}
          </Brand>
        </Row>

        <Row>
          <Name className="name">
            {this.props.lego.name}
          </Name>
        </Row>

        <Row>
          <Stars class="fixed-bottom" className="stars reviewCount">
            <StarRatings
              rating={this.props.lego.reviewAvg}
              starRatedColor="gold"
              numberOfStars={5}
              starDimension="1.2rem"
              starSpacing="1px"
            />
            <span>
              {this.props.lego.reviewTotal}
              {'  '}
              Reviews
            </span>
          </Stars>

        </Row>

        <Row>
          <Price class="align-text-bottom" className="price">
            $
            {this.props.lego.price}
          </Price>
        </Row>

        <Row>
          <Available style={{ display: (this.props.lego.quantity > 0) ? 'block' : 'none' }} className="available">
            Available Now
          </Available>
        </Row>

        <QuantityComponent>
          <Row>
            {this.props.lego.quantity > 0 ? (
              <Quantity />
            ) : (<span>Temporarily out of stock</span>
            )}
          </Row>
        </QuantityComponent>

        <Row>
          <div>
            <AddToBag className="button" type="button">Add to Bag</AddToBag>
          </div>
        </Row>

      </ProductInfoContainer>
    );
  }
}

export default ProductInfo;
