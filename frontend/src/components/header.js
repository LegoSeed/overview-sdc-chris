/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';

import { NavDropdown } from 'react-bootstrap';
import Styled from 'styled-components';

const OfferAndSales = Styled.li`

`;

const Header = (props) => (
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-warning">
      <div class="container-fluid">

        <a class="navbar-brand" style={{ 'font-weight': '600' }} href="https://www.lego.com/en-us">LEGO®</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <NavDropdown title="THEMES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Marvel</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">DC Comics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Disney Probably</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="SHOP BY" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">New Stuff</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Old Stuff</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cheap Stuff</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Best Stuff</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="INTEREST" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Interest A</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Interest B</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Interest C</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Another Interest</NavDropdown.Item>
            </NavDropdown>

            <OfferAndSales class="nav-item">
              <a class="nav-link active d-flex" aria-current="page" style={{ width: '150px' }}>OFFERS & SALES</a>
            </OfferAndSales>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page">EXCLUSIVES</a>
            </li>

            <NavDropdown title="SUPPORT" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Support A</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Support B</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Support C</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Even more support</NavDropdown.Item>
            </NavDropdown>

          </ul>
          <div class="nav-item">
            <a href="#!" class="nav-link navbar-link-2 waves-effect">
              <span style={{ color: 'black', 'font-weight': 'bolder', 'margin-right': '10px' }}>{props.bagCount}</span>
              <i class="fas fa-shopping-cart" style={{ 'justify-content': 'center' }}></i>
            </a>
          </div>
          <form class="d-flex">
            <div class="input-group rounded">
              <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
              <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
              </span>
            </div>
          </form>

        </div>
      </div>
    </nav>
  </div>
);

export default Header;
