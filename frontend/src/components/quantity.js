/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

const StyledCounter = styled.div`

`;
const Paragraph = styled.p`
 float:left;
 display: inline;
 width: 10%;
 text-align: center;
 background-color: white;
 line-height: 2;
`;
const Button1 = styled.button`
width: 10%;
float:left;
display: inline;
background-color: white;
border-radius: 4px; 
border: 0px 2px 0 0 dark black;
  color: black;
  cursor: pointer;
`;
const Button2 = styled.button`
width: 10%;
float:left;
display: inline;
border-radius: 4px; 
background-color: white; 
border: 2px dark black;
  color: black;
  cursor: pointer;
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

  increment() {
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

  decrement() {
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

  render() {
    return (
      <Col>
        <StyledCounter>
          <div>
            <Button1 onClick={this.increment}>-</Button1>
            <div>
              <Paragraph>{this.state.count}</Paragraph>
              <div>
                <Button2 onClick={this.decrement}>+</Button2>
              </div>
              limit 3
            </div>
          </div>
        </StyledCounter>
      </Col>
    );
  }
}

export default Quantity;
