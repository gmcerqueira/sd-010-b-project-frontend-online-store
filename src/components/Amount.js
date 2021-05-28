import React, { Component } from 'react';

export default class Amount extends Component {
  render() {
    const { id, plusCart, minusCart, removeCart } = this.props;

    return (
      <div>
        <button
          id={ id }
          type="button"
          onClick={ plusCart }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <button
          id={ id }
          type="button"
          onClick={ minusCart }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <button id={ id } type="button" onClick={ removeCart }>
          x
        </button>
      </div>
    );
  }
}
