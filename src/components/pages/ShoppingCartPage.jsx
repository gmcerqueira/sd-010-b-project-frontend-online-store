import React, { Component } from 'react';

export default class ShoppingCartPage extends Component {
  render() {
    return (
      <>
        <h1>
          Shopping Cart Page
        </h1>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </>
    );
  }
}
