import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import * as api from './services/api';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      searchInput: '',
      searchedProducts: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categories = await api.getCategories();

    this.setState({ categories });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  searchProduct = async () => {
    const { searchInput } = this.state;
    const response = await api.getProductsFromCategoryAndQuery('', searchInput);
    const products = response.results;

    this.setState({ searchedProducts: products });
  }

  rendersRoutes = () => {
    const { categories, searchedProducts } = this.state;
    return (
      <Router>
        <Switch>
          <Route path="/cart" component={ Cart } />
          <Route
            exact
            path="/"
            render={ () => (
              <Home
                categories={ categories }
                searchProduct={ this.searchProduct }
                onChange={ this.handleChange }
                products={ searchedProducts }
              />
            ) }
          />
        </Switch>
      </Router>
    );
  };

  render() {
    return <div>{this.rendersRoutes()}</div>;
  }
}
