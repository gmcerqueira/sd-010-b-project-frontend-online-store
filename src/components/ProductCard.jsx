import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { item, addProductIntoCart } = this.props;
    const { title, thumbnail, price } = item;

    return (
      <div className="card" data-testid="product">
        <p data-testid="shopping-cart-product-name">{title}</p>
        <div className="img">
          <img src={ thumbnail } alt="img" />
        </div>
        <p>{price}</p>
        <button
          type="button"
          onClick={ () => addProductIntoCart(item) }
          data-testid="product-add-to-cart"
        >
          Adicionar
        </button>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: '/datails', state: { item } } }
        >
          Detalhes
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  addProductIntoCart: PropTypes.func.isRequired,
};
