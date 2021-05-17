import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class DetailsPage extends React.Component {
  /*  handleClick() {

  } */

  render() {
    const { match: { params: { id } }, arrProducts, addToCart } = this.props;
    const { thumbnail, title, price } = arrProducts[id];
    return (
      <div>
        <p>Detalhe do Produto</p>
        <img src={ thumbnail } alt={ title } />
        <p data-testid="product-detail-name">{ title }</p>
        <p>{ price }</p>
        <Link to="/pagecart" data-testid="shopping-cart-button">Page Cart</Link>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addToCart(arrProducts[id]) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  arrProducts: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default DetailsPage;
