/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import StarRatings from 'react-star-ratings';
import Styled from 'styled-components';
import { Row } from 'react-bootstrap';
import Quantity from './quantity';

const ProductInfoContainer = Styled.div`
background-color: #FFFFFF;
height: 95%;
width: 80%;
`;

const Brand = Styled.div`
text-transform: uppercase;
font-style: oblique;
font-size: 3rem;
`;
const Name = Styled.div`
font-size: 20px;
font-weight: 600;
font-family: Cera Pro,sans-serif;
`;
const Available = Styled.div`
margin-bottom: 15px;
color: rgb(53, 143, 53);
`;
const Stars = Styled.div`
line-height: 2;
align-self: center;
font-size: 0.5rem;
float: left;
align-self: left;
margin-bottom: 120px;
color: blue;
text-decoration: underline;
`;

const Price = Styled.div`
font-weight: 800;
 font-family: Cera Pro,sans-serif;

`;
const QuantityComponent = Styled.div`

`;

const AddToBag = Styled.button`
color: black;
background-color: rgb(253, 128, 36);
border-color: rgb(253, 128, 36);
font-family: Cera Pro,sans-serif;
width: 100%;
height: 50px;
border-radius: 5px;
&:hover {
  background-color: white;
  color:black;
  border-color: rgb(253, 128, 36);
  font-family: Cera Pro,sans-serif;
  width: 100%;
  height: 50px;
  border-radius: 5px;
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
          <Stars className="stars reviewCount">
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
