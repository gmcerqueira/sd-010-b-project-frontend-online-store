import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import * as api from './services/api';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categories = await api.getCategories();

    this.setState({ categories });
  }

  rendersRoutes = () => {
    const { categories } = this.state;
    return (
      <Router>
        <Switch>
          <Route path="/cart" component={ Cart } />
          <Route exact path="/" render={ () => <Home categories={ categories } /> } />
        </Switch>
      </Router>
    );
  }

  render() {
    return (
      <div>{this.rendersRoutes()}</div>
    );
  }
}
