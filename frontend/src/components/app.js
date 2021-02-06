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

  getAllLegos() {
    // Axios.get('http://3.141.14.195:3003/legos')
    Axios.get('http://localhost:3003/legos/ducati')
      .then((results) => {
        this.setState({
          legos: results.data,
        });
      });
  }

  findById(id) {
    // Axios.get('http://3.141.14.195:3003/legos/ducati')
    Axios.get(`http://localhost:3003/legos/${id}`)
      .then((results) => {
        this.setState({
          legos: results.data,
          pictures: results.data.pictures,
        });
      });
  }

  postProduct() {
    const newObj = createObject();
    Axios.post('/legos', { product: newObj })
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
