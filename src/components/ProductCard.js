import React, { Component } from 'react';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <h2>{product.title}</h2>
        <img src={ product.thumbnail } alt="" />
        <p>
          {`R$ ${product.price}`}
        </p>
      </div>
    );
  }
}
