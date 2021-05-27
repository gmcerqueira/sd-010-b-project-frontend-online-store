import React, { Component } from 'react';
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
    const { product } = this.state;
    return (
      <section>
        <h3 data-testid="product-detail-name">
          {product.title}
        </h3>
        <h4>{product.price}</h4>
        <img src={ product.thumbnail } alt="" />
      </section>
    );
  }
}
