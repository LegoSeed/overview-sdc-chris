import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const ProductFooter = (props) => (
  <div className="footer">
    <Container>
      <Row>
        <Col className="footerColumn">
          {props.lego.ageRec}
        </Col>
        <Col className="footerColumn">
          {props.lego.pieceCount}
        </Col>
        <Col className="footerColumn">
          {props.lego.vipPoints}
        </Col>
        <Col>
          &#35;
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
