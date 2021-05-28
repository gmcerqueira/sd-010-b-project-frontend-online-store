import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    const { cart, plusCart, minusCart, removeCart } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        {cart.map(({ item, quantity }) => (
          <div key={ item.id }>
            <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
            <span data-testid="shopping-cart-product-quantity">{quantity}</span>
            <button id={ item.id } type="button" onClick={ plusCart }>
              +
            </button>
            <button id={ item.id } type="button" onClick={ minusCart }>
              -
            </button>
            <button id={ item.id } type="button" onClick={ removeCart }>
              x
            </button>
          </div>
        ))}
      </div>
    );
  }
}
