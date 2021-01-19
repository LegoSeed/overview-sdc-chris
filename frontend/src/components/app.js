import React from 'react';
import Axios from 'axios';
import Product from './product.js';

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
        <Product lego={this.state.legos} pictures={this.state.pictures} />
      </div>
    );
  }
}

export default App;
