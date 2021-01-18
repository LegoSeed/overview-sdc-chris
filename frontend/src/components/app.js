import React from 'react';
import Axios from 'axios';
import Product from './product.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      legos: [],
    };
  }

  componentDidMount() {
    this.getAllLegos();
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
        <Product lego={this.state.legos} />
      </div>
    );
  }
}

export default App;
