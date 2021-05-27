import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <Link to={ `/product/${product.id}` } data-testid="product-detail-link">
        <div data-testid="product">
          <h2>{product.title}</h2>
          <img src={ product.thumbnail } alt="" />
          <p>{`R$ ${product.price}`}</p>
        </div>
      </Link>
    );
  }
}
