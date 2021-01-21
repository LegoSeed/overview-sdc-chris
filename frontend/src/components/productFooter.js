/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const FooterContainer = styled.div`
line-height: 3.125rem;
text-align: center;
justify-conter: center;
align-items: center;
`;

const ProductFooter = (props) => (
  <FooterContainer className="footer">

    <Container>

      <Row>
        <Col class="col-3 text-center" className="footerColumn">
          <Row style={{ 'font-size': '2rem', 'justify-content': 'center' }}>
            &#127874;
          </Row>

          <Row style={{ 'font-size': '2.3rem', 'justify-content': 'center' }}>
            {props.lego.ageRec}
            +
          </Row>

          <Row style={{ 'font-size': '1rem', 'justify-content': 'center' }}>
            Ages
          </Row>
        </Col>

        <Col class="col-3" className="footerColumn">
          <Row style={{ 'font-size': '2rem', 'justify-content': 'center' }}>
            🧱
          </Row>

          <Row style={{ 'font-size': '2.3rem', 'justify-content': 'center' }}>
            {props.lego.pieceCount}
          </Row>
          <Row style={{ 'font-size': '1rem', 'justify-content': 'center' }}>
            Pieces
          </Row>

        </Col>

        <Col class="col-3" className="footerColumn">
          <Row style={{ 'font-size': '2rem', 'justify-content': 'center' }}>
            &#128081;
          </Row>

          <Row style={{ 'font-size': '2.3rem', 'justify-content': 'center' }}>
            {props.lego.vipPoints}
          </Row>

          <Row style={{ 'font-size': '1rem', 'justify-content': 'center' }}>
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
