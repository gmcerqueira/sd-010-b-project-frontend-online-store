import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryFilter from '../components/CategoryFilter.js';
import ProductCard from '../components/ProductCard.js';

export default class Home extends Component {
  render() {
    const { categories, searchProduct, onChange, products, selectCategory } = this.props;
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          cart
        </Link>
        <label htmlFor="search">
          <input
            name="searchInput"
            data-testid="query-input"
            type="text"
            onChange={ onChange }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ searchProduct }
          >
            search
          </button>
        </label>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <section>
          {categories.map((category) => (
            <CategoryFilter
              key={ category.id }
              category={ category }
              selectCategory={ selectCategory }
            />
          ))}
        </section>
        <section>
          {products && products.map((product) => (
            <ProductCard key={ product.id } product={ product } />
          ))}
        </section>
      </div>
    );
  }
}
