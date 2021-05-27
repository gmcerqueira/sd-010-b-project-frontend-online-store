import React, { Component } from 'react';

export default class CategoryFilter extends Component {
  render() {
    const { category, selectCategory } = this.props;
    return (
      <div>
        <label htmlFor={ category.id }>
          <input
            name="category"
            type="radio"
            data-testid="category"
            onClick={ selectCategory }
            id={ category.id }
          />
          {category.name}
        </label>
      </div>
    );
  }
}
