import React, { Component } from 'react';
import Amount from '../components/Amount';

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
            <Amount
              id={ item.id }
              plusCart={ plusCart }
              minusCart={ minusCart }
              removeCart={ removeCart }
            />
          </div>
        ))}
      </div>
    );
  }
}
