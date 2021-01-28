/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Styled from 'styled-components';
import ProductInfo from './productInfo';
import CarouselComponent from './carousel';
import ProductFooter from './productFooter';
import Header from './header';

const AppComponent = Styled.div`
 background-color: #F7F7F7
`;

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
    // Axios.get('http://3.141.14.195:3003/legos/ducati')
    Axios.get('http://localhost:3003/legos/ducati')
      .then((results) => {
        this.setState({
          legos: results.data,
          pictures: results.data.pictures,
        });
      });
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

  render() {
    return (
      <AppComponent>

        <Row>
          <Header />
        </Row>

        <Container>
          <Row>
            <Col xs={8} className="carouselComponent">
              <CarouselComponent pictures={this.state.pictures} />
            </Col>
            <Col class="col-lg-auto" className="productInfo">
              <ProductInfo lego={this.state.legos} pictures={this.state.pictures} />
            </Col>
          </Row>
        </Container>

        <ProductFooter lego={this.state.legos} />
      </AppComponent>
    );
  }
}

export default App;
