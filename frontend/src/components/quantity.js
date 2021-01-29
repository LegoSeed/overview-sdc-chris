/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import styled from 'styled-components';
import { Col, Button } from 'react-bootstrap';

const StyledCounter = styled.div`

`;
const Paragraph = styled.p`
 float:left;
 display: inline;
 width: 10%;
 align-items: center;
 justify-content: center;
 background-color: white;
 line-height: 3;
`;
const Button1 = styled.div`
width: 20%;
float:left;
display: inline;
background-color: white;
border-radius: 4px; 
border: 0px 2px 0 0 dark gray;
  color: black;
  cursor: pointer;
`;
const Button2 = styled.div`
width: 20%;
float:left;
display: inline;
border-radius: 4px; 
background-color: white; 
border: 2px dark black;
  color: black;
  cursor: pointer;
`;
const Text = styled.span`
float: center;
font-size: 0.875rem;
font-family: Arial;
font-weight: bold;
line-height: 3;
`;
class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      this.props.getQuantity(this.state.count);
    }
  }

  increment() {
    if (this.state.count === 3) {
      this.setState({
        count: 3,
      });
    } else {
      this.setState({
        count: this.state.count + 1,
      });
    }
  }

  decrement() {
    if (this.state.count === 0) {
      this.setState({
        count: 0,
      });
    } else {
      this.setState({
        count: this.state.count - 1,
      });
    }
  }

  render() {
    return (
      <Col>
        <StyledCounter>
          <div>
            <Button1>
              <Button variant="outline-secondary" size="lg" onClick={this.decrement}>-</Button>
            </Button1>
            <div>
              <Paragraph>{this.state.count}</Paragraph>
              <div>
                <Button2>
                  <Button variant="outline-secondary" size="lg" onClick={this.increment}>+</Button>
                </Button2>
              </div>
              <Text style={{ 'text-align': 'center' }}>limit 3</Text>
            </div>
          </div>
        </StyledCounter>
      </Col>
    );
  }
}

export default Quantity;
// style={{ 'justify-content': 'center' }}
