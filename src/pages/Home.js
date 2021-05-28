import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import CategoryFilter from '../components/CategoryFilter';
import ProductCard from '../components/ProductCard';

export default class Home extends Component {
  render() {
    const {
      categories,
      searchProduct,
      onChange,
      products,
      selectCategory,
      addToCart,
    } = this.props;
    return (
      <div>
        <CartButton />
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
          {products.map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
              addToCart={ addToCart }
            />
          ))}
        </section>
      </div>
    );
  }
}
