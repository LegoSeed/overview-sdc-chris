/* eslint-disable react/no-unused-state */
/* eslint-disable max-len */
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
font-size: 0.875rem;
font-weight: 500;
font-family: Arial;
`;
const Available = Styled.div`
margin-bottom: 15px;
font-size: 0.875rem;
color: rgb(53, 143, 53);
font-family: Arial;
`;
const Stars = Styled.div`
line-height: 2;
align-self: center;
font-size: 0.875rem;
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
      heartColor: 'white',
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
              <a href="https://www.amazon.com/review/R2JGNJ5ZPJT4YC">Reviews</a>
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
          <div>
            <span id="heart">
              ❤️ Add to wishlist
            </span>
          </div>
        </Row>

        <Row>
          <div class="accordion">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Check Store Stock
                </button>
              </h2>
              <div class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <span style={{ 'font-size': '0.875rem' }}>
                    Enter your address to find a LEGO® Store near you. Please call to ensure item availability and inquire about the possibility for curbside pick-up.
                  </span>
                  <div class="input-group col-md-4">
                    <input class="form-control py-2" type="search" placeholder="Enter a city and state and zip code" id="example-search-input" />
                    <span class="input-group-append">
                      <button class="btn btn-outline-secondary" type="button">
                        <i class="fa fa-search"></i>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>

      </ProductInfoContainer>
    );
  }
}

export default ProductInfo;
