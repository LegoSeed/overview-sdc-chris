import React from 'react';
import MainPic from './mainPic.js';

const Product = (props) => (
  <div className="product">
    <MainPic lego={props.lego} pictures={props.pictures} />
  </div>
);

export default Product;
