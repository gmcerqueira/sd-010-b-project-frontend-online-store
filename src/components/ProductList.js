import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class ProductList extends Component {
  render() {
    const { products, getName, qtd } = this.props;
    return (
      products.map(
        (product) => <Card qtd={ qtd } getName={ getName } key={ product.id } product={ product } />,
      )
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  getName: PropTypes.func.isRequired,
  qtd: PropTypes.func.isRequired,
};

export default ProductList;
