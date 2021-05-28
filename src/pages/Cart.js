import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        {cart.map(({ product, quantity }) => (
          <div key={ product.id }>
            <h3 data-testid="shopping-cart-product-name">{product.title}</h3>
            <span data-testid="shopping-cart-product-quantity">{quantity}</span>
          </div>
        ))}
      </div>
    );
  }
}
