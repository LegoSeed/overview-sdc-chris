/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import ProductInfo from './productInfo.js';
import CarouselComponent from './carousel';
import ProductFooter from './productFooter.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      legos: [],
      pictures: [],
    };
  }

  componentDidMount() {
    this.getDucatiLego();
  }

  getDucatiLego() {
    Axios.get('/legos/ducati')
      .then((results) => {
        this.setState({
          legos: results.data,
          pictures: results.data.pictures,
        });
      });
  }

  getAllLegos() {
    Axios.get('/legos')
      .then((results) => {
        this.setState({
          legos: results.data,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Lego Project</h1>

        <Container>
          <Row>
            <Col xs={8} className="carouselComponent">
              <CarouselComponent pictures={this.state.pictures} />
            </Col>
            <Col class="col-md-auto" className="productInfo">
              <ProductInfo lego={this.state.legos} pictures={this.state.pictures} />
            </Col>
          </Row>
        </Container>

        <ProductFooter lego={this.state.legos} />
      </div>
    );
  }
}

export default App;
