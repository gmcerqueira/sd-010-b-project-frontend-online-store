import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { product, addToCart } = this.props;
    return (
      <div>

        <Link to={ `/product/${product.id}` } data-testid="product-detail-link">
          <div data-testid="product">
            <h2>{product.title}</h2>
            <img src={ product.thumbnail } alt="" />
            <p>{`R$ ${product.price}`}</p>
          </div>
        </Link>
        <button id={ product.id } type="button" data-testid="product-add-to-cart" onClick={ addToCart }>
          add
        </button>
      </div>
    );
  }
}
