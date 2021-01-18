import React from 'react';
import Item from './item.js';

const Product = (props) => (
  <div className="product">
    {props.lego.map((lego) => <ul><Item lego={lego}/></ul>)}
  </div>
);

export default Product;
