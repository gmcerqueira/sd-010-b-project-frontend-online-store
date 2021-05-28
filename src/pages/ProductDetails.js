import React, { Component } from 'react';
import Amount from '../components/Amount';
import CartButton from '../components/CartButton';
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
    const { match: { params: { id } }, addToCart, plusCart, minusCart, removeCart } = this.props;
    const { product } = this.state;
    return (
      <div>
        <CartButton />
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
          {/* <Amount
            id={ id }
            plusCart={ plusCart }
            minusCart={ minusCart }
            removeCart={ removeCart }
          /> */}
        </section>
      </div>
    );
  }
}
