import React, { Component } from 'react';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return <div data-testid="product">{product.title}</div>;
  }
}
