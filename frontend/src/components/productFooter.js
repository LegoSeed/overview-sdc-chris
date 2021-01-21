import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const ProductFooter = (props) => (
  <div>
    <Container>
      <Row>
        <Col>
          {props.lego.ageRec}
        </Col>
        <Col>
          {props.lego.pieceCount}
        </Col>
        <Col>
          {props.lego.vipPoints}
        </Col>
        <Col>
          {props.lego.itemNum}
        </Col>
      </Row>
    </Container>
  </div>

  // <div className="footer">

  //   <div className="container">
  //     <div className="col">
  //       {props.lego.ageRec}
  //     </div>
  //   </div>
  //   <div className="container">
  //     <div className="col">
  //       {props.lego.pieceCount}
  //     </div>
  //   </div>
  //   <div className="container">
  //     <div className="col">
  //       {props.lego.vipPoints}
  //     </div>
  //   </div>
  //   <div className="container">
  //     <div className="col">
  //       {props.lego.itemNum}
  //     </div>
  //   </div>

  // </div>
);

export default ProductFooter;
