/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const FooterContainer = Styled.div`
line-height: 3.125rem;
background-color: white;
`;

const ProductFooter = (props) => (
  <FooterContainer className="footer">

    <Container style={{ 'padding-top': '20px', 'margin-top': '10px', 'margin-bottom': '10px' }}>

      <Row>
        <Col class="col-3 text-center" className="footerColumn">
          <Row style={{
            'font-size': '2rem',
            'justify-content': 'center',
            'border-right': '1px solid #ccc',
          }}
          >
            &#127874;
          </Row>

          <Row style={{
            'font-size': '2.3rem',
            'justify-content': 'center',
            'border-right': '1px solid #ccc',
          }}
          >
            {props.lego.ageRec}
            +
          </Row>

          <Row style={{
            'font-size': '1rem',
            'justify-content': 'center',
            'border-right': '1px solid #ccc',
          }}
          >
            Ages
          </Row>
        </Col>

        <Col class="col-3" className="footerColumn">
          <Row style={{
            'font-size': '2rem',
            'justify-content': 'center',
            'border-right': '1px solid #ccc',
          }}
          >
            🧱
          </Row>

          <Row style={{
            'font-size': '2.3rem',
            'justify-content': 'center',
            'border-right': '1px solid #ccc',
          }}
          >
            {props.lego.pieceCount}
          </Row>
          <Row style={{
            'font-size': '1rem',
            'justify-content': 'center',
            'border-right': '1px solid #ccc',
          }}
          >
            Pieces
          </Row>

        </Col>

        <Col class="col-3" className="footerColumn">
          <Row style={{
            'font-size': '2rem',
            'justify-content': 'center',
            'border-right': '1px solid #ccc',
          }}
          >
            &#128081;
          </Row>

          <Row style={{
            'font-size': '2.3rem',
            'justify-content': 'center',
            'border-right': '1px solid #ccc',
          }}
          >
            {props.lego.vipPoints}
          </Row>

          <Row style={{
            'font-size': '1rem',
            'justify-content': 'center',
            'border-right': '1px solid #ccc',
          }}
          >
            VIP Points
          </Row>
        </Col>

        <Col class="col-3">
          <Row style={{ 'font-size': '2rem', 'justify-content': 'center' }}>
            &#35;
          </Row>

          <Row style={{ 'font-size': '2.3rem', 'justify-content': 'center' }}>
            {props.lego.itemNum}
          </Row>

          <Row style={{ 'font-size': '1rem', 'justify-content': 'center' }}>
            Item
          </Row>
        </Col>

      </Row>

    </Container>

  </FooterContainer>
);

export default ProductFooter;
