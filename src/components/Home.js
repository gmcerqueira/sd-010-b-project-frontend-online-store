import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          cart
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <section>
          {categories.map(({ name }, i) => (
            <p key={ i } data-testid="category">
              {name}
            </p>
          ))}
        </section>
      </div>
    );
  }
}
