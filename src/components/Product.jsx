import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { id, title, price, thumbnail } = this.props;
    return (
      <div>
        <h1>{ title }</h1>
        <img src={ thumbnail } alt={ thumbnail } />
        <h2>{ price }</h2>
        {/* {console.log(id)} */}
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  thumbnail: PropTypes.string,
}.isRequired;

export default Product;
