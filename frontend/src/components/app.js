import React from 'react';
import Axios from 'axios';
import ProductInfo from './productInfo.js';
import CarouselComponent from "./carousel";
import ProductFooter from './productFooter.js';
import { Container, Row, Col } from 'react-bootstrap';

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
            <Col>
              <CarouselComponent pictures={this.state.pictures} />
            </Col>
            <Col>
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
