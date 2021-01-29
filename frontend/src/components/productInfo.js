/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unused-state */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import StarRatings from 'react-star-ratings';
import Styled from 'styled-components';
import {
  Row,
  Accordion,
  Card,
  Button,
  Form,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import Quantity from './quantity';

const ProductInfoContainer = Styled.div`
background-color: #FFFFFF;
height: 95%;
width: 90%;
`;

const Brand = Styled.div`
color: white;
text-shadow: rgb(0, 0, 0) 4px 0px 0px, rgb(0, 0, 0) 3.875px 0.984375px 0px, rgb(0, 0, 0) 3.5px 1.90625px 0px, rgb(0, 0, 0) 2.921875px 2.71875px 0px, rgb(0, 0, 0) 2.15625px 3.359375px 0px, rgb(0, 0, 0) 1.25px 3.78125px 0px, rgb(0, 0, 0) 0.28125px 3.984375px 0px, rgb(0, 0, 0) -0.703125px 3.921875px 0px, rgb(0, 0, 0) -1.65625px 3.625px 0px, rgb(0, 0, 0) -2.5px 3.109375px 0px, rgb(0, 0, 0) -3.203125px 2.390625px 0px, rgb(0, 0, 0) -3.6875px 1.515625px 0px, rgb(0, 0, 0) -3.953125px 0.5625px 0px, rgb(0, 0, 0) -3.96875px -0.421875px 0px, rgb(0, 0, 0) -3.734375px -1.390625px 0px, rgb(0, 0, 0) -3.28125px -2.28125px 0px, rgb(0, 0, 0) -2.609375px -3.015625px 0px, rgb(0, 0, 0) -1.78125px -3.578125px 0px, rgb(0, 0, 0) -0.828125px -3.90625px 0px, rgb(0, 0, 0) 0.140625px -3.984375px 0px, rgb(0, 0, 0) 1.125px -3.828125px 0px, rgb(0, 0, 0) 2.046875px -3.421875px 0px, rgb(0, 0, 0) 2.828125px -2.8125px 0px, rgb(0, 0, 0) 3.4375px -2.03125px 0px, rgb(0, 0, 0) 3.828125px -1.109375px 0px, rgb(0, 0, 0) 3.984375px -0.125px 0px;
text-transform: uppercase;
font-style: oblique;
font-size: 3.233rem;
letter-spacing: 10px;
`;
const Name = Styled.div`
font-size: 1.65rem;
font-weight: 600;
letter-spacing: 1px;
font-family: Arial;
width: 90%
`;
const Available = Styled.div`
margin-bottom: 15px;
font-size: 0.875rem;
font-family: Arial;
color: rgb(53, 143, 53);
`;
const Stars = Styled.div`
line-height: 2;
align-self: center;
font-size: 0.875rem;
float: left;
align-self: left;
margin-top: 20px;
margin-left: 5px;
margin-bottom: 120px;
color: blue;
text-decoration: underline;
`;

const TotalReviews = Styled.span`
margin-left: 15px;
`;

const Price = Styled.div`
font-weight: 800;
font-size: 2rem;
 font-family: Cera Pro,sans-serif;

`;
const AccordianComponent = Styled.div`
margin-top: 20px;
`;
const AddToWishList = Styled.div`
margin-top: 20px;
margin-left: 10px;
`;
const QuantityComponent = Styled.div`
margin-top: 15px;
`;

const AddToBag = Styled.button`
color: black;
margin-top: 15px;
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
      heartClicked: false,
      quantity: 0,
    };
    this.heartWasClicked = this.heartWasClicked.bind(this);
    this.getQuantity = this.getQuantity.bind(this);
    this.passQuantityAddedToBag = this.passQuantityAddedToBag.bind(this);
  }

  getQuantity(amountToAdd) {
    this.setState({
      quantity: amountToAdd,
    });
  }

  heartWasClicked() {
    this.setState({
      heartClicked: !this.state.heartClicked,
    });
  }

  passQuantityAddedToBag() {
    this.props.addToBag(this.state.quantity);
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
            <TotalReviews>
              <a href="https://www.amazon.com/review/R2JGNJ5ZPJT4YC">{this.props.lego.reviewTotal} Reviews</a>
            </TotalReviews>
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
              <Quantity getQuantity={this.getQuantity} />
            ) : (<span>Temporarily out of stock</span>
            )}
          </Row>
        </QuantityComponent>

        <Row>
          <div>
            <AddToBag className="button" type="button" onClick={() => {
              this.passQuantityAddedToBag();
            }}>Add to Bag</AddToBag>
          </div>
          <AddToWishList>
            {this.state.heartClicked === true ? (
              <span id="heart">
                <i
                  class="fas fa-heart"
                  onClick={() => {
                    console.log('clicked');
                    this.heartWasClicked();
                  }}
                >
                </i> Add to wishlist
              </span>
            ) : (
              <span id="heart">
                <i
                  class="far fa-heart"
                  onClick={() => {
                    console.log('clicked');
                    this.heartWasClicked();
                  }}
                >
                </i> Add to wishlist
              </span>
            )}
          </AddToWishList>
        </Row>

        <Row>
          <AccordianComponent>
            <Accordion>

              <Card>
                <Card.Header style={{ color: 'black', 'background-color': 'white' }}>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Check Store Stock
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey="0">

                  <Card.Body style={{ 'font-size': '0.875rem' }}>
                    Enter your address to find a LEGO® Store near you. Please call to ensure item availability and inquire about the possibility for curbside pick-up.
                    {'\n'}

                    <Form inline>
                      <InputGroup>
                        <FormControl
                          style={{ 'font-size': '0.875rem' }}
                          placeholder="Enter a city and state or zip code"
                        />
                        <InputGroup.Append>
                          <Button type="submit"><i class="fas fa-search"></i></Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </Form>

                  </Card.Body>

                </Accordion.Collapse>
              </Card>

            </Accordion>
          </AccordianComponent>
        </Row>

      </ProductInfoContainer>
    );
  }
}

export default ProductInfo;
