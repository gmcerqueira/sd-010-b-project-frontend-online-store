import { Link as NewLink } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.amount = this.amount.bind(this);
    this.state = {
      total: 0,
    };
  }

  componentDidMount() {
    this.amount();
  }

  componentDidUpdate(previusValueProps) {
    if (previusValueProps !== this.props) {
      this.amount();
    }
  }

  amount() {
    const { cartItems } = this.props;
    const number = 0;
    if (cartItems.length >= 1) {
      this.setState({
        total: cartItems.reduce(
          (acc, value) => (acc + value.price) * value.countItems,
          number,
        ),
      });
    }
  }

  render() {
    const { cartItems, addCart, removeItemCart, removeCart } = this.props;
    const { total } = this.state;

    if (cartItems.length === 0) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }

    return (
      <div>
        <ul>
          {cartItems.map((product) => (
            <li key={ product.id }>
              <ProductCard
                addCart={ addCart }
                removeItemCart={ removeItemCart }
                removeCart={ removeCart }
                product={ product }
              />
            </li>

          ))}
        </ul>

        <p>
          Valor total:
          { total }
        </p>
        <NewLink
          data-testid="checkout-products"
          to="/payment"
        >
          Finalizar Compra
        </NewLink>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.objectOf({
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
  addCart: PropTypes.func.isRequired,
  removeItemCart: PropTypes.func.isRequired,
  removeCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
