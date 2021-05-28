import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import * as api from './services/api';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      searchInput: '',
      searchedProducts: [],
      selectedCategory: '',
      cart: [],
      productsWithQuantity: [],
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

  handleCategoryChange = async ({ target }) => {
    const response = await api.getProductsFromCategoryAndQuery(target.id);
    const products = response.results;
    this.setState({ selectedCategory: target.id, searchedProducts: products });
  };

  searchProduct = async () => {
    const { searchInput } = this.state;
    const response = await api.getProductsFromCategoryAndQuery('', searchInput);
    const products = response.results;

    this.setState({ searchedProducts: products });
  };

  addToCart = ({ target: { id } }) => {
    const { searchedProducts, cart } = this.state;
    const productToAdd = searchedProducts.find((product) => product.id === id);
    this.setState({ cart: [...cart, productToAdd] }, () => this.calcQuantity());
  };

  calcQuantity = () => {
    const { cart } = this.state;

    // const retornoNegativo = -1;
    // cart.sort((a, b) => {
    //   if (a.title < b.title) return retornoNegativo;
    //   if (a.title > b.title) return 1;
    //   return 0;
    // });

    const quantity = cart.reduce((previous, current) => {
      const key = current.id;
      if (!previous[key]) {
        previous[key] = [];
      }
      previous[key].push(current);
      return previous;
    }, {});
    const products = Object.values(quantity).map((item) => ({
      item: item[0],
      quantity: item.length,
    }));

    this.setState({ productsWithQuantity: products });
  };

  handleIncreaseQuantity = ({ target }) => {
    const { productsWithQuantity, cart } = this.state;

    const search = productsWithQuantity.find(
      ({ item }) => item.id === target.id,
    );

    const product = search.item;

    this.setState({ cart: [...cart, product] }, () => this.calcQuantity());
  }

  handleDecreaseQuantity=({ target }) => {
    const { productsWithQuantity, cart } = this.state;
    const search = productsWithQuantity.find(
      ({ item }) => item.id === target.id,
    );
    const product = search.item;

    const index = cart.map((item) => item.id).lastIndexOf(product.id);
    console.log(index);
    cart.splice(index, 1);
    this.setState({ cart }, () => this.calcQuantity());
  }

    handleRemoveFromCart = ({ target }) => {
      const { cart } = this.state;
      const newCart = cart.filter(({ id }) => id !== target.id);

      this.setState({ cart: newCart }, () => this.calcQuantity());
    }

    render() {
      const { categories, searchedProducts, productsWithQuantity } = this.state;
      return (
        <Router>
          <Switch>
            <Route
              path="/cart"
              render={ () => (
                <Cart
                  cart={ productsWithQuantity }
                  plusCart={ this.handleIncreaseQuantity }
                  minusCart={ this.handleDecreaseQuantity }
                  removeCart={ this.handleRemoveFromCart }
                />
              ) }
            />
            <Route
              path="/product/:id"
              render={ (props) => (
                <ProductDetails
                  plusCart={ this.handleIncreaseQuantity }
                  minusCart={ this.handleDecreaseQuantity }
                  removeCart={ this.handleRemoveFromCart }
                  addToCart={ this.addToCart }
                  { ...props }
                />
              ) }
            />
            <Route
              exact
              path="/"
              render={ () => (
                <Home
                  categories={ categories }
                  searchProduct={ this.searchProduct }
                  onChange={ this.handleChange }
                  products={ searchedProducts }
                  selectCategory={ this.handleCategoryChange }
                  addToCart={ this.addToCart }
                />
              ) }
            />
          </Switch>
        </Router>
      );
    }
}
