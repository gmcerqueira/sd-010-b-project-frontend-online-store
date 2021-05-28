import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as auxApi from '../services/auxApi';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await auxApi.getProductfromId(id);
    if (product) this.setState({ product });
  }

  render() {
    const { addToCart } = this.props;
    const { product } = this.state;
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          cart
        </Link>
        <section>
          <h3 data-testid="product-detail-name">{product.title}</h3>
          <h4>{product.price}</h4>
          <img src={ product.thumbnail } alt="" />
          <button
            id={ product.id }
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ addToCart }
          >
            add
          </button>
        </section>
      </div>
    );
  }
}
