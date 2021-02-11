/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Styled from 'styled-components';
import ProductInfo from './productInfo';
import CarouselComponent from './carousel';
import ProductFooter from './productFooter';
import Header from './header';

import { createObject } from '../../../sdc-backend/objectGenerator';

const AppComponent = Styled.div`
 background-color: #F7F7F7
`;
const containerId = Math.random() * 10;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      legos: [],
      pictures: [],
      bagCount: 0,
    };
    this.addToBag = this.addToBag.bind(this);
    this.postProduct = this.postProduct.bind(this);
  }

  componentDidMount() {
    this.findById(24);
  }

  findById(id) {
    // Axios.get(`http://3.17.151.84/legos/${id}`)
    Axios.get(`/legos/${id}`)
      .then(({ data }) => {
        console.log(data, containerId);
        this.setState({
          legos: data,
          pictures: data.pictures,
        });
      });
  }

  postProduct() {
    const newObj = createObject();
    Axios.post('/legos', { product: newObj })
    // Axios.post('http://3.17.151.84/legos', { product: newObj })
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  }

  addToBag(quantity) {
    this.setState({
      bagCount: (this.state.bagCount + quantity),
    });
  }

  render() {
    return (
      <AppComponent>

        <Row>
          <Header bagCount={this.state.bagCount} />
          <button onClick={this.postProduct}> Click to Generate new object and POST </button>
        </Row>

        <Container>
          <Row>
            <Col xs={8} className="carouselComponent">
              <CarouselComponent pictures={this.state.pictures} />
            </Col>
            <Col class="d-md-flex" className="productInfo">
              <ProductInfo addToBag={this.addToBag} lego={this.state.legos} pictures={this.state.pictures} bagCount={this.state.bagCount} />
            </Col>
          </Row>
        </Container>

        <ProductFooter lego={this.state.legos} />
      </AppComponent>
    );
  }
}

export default App;
