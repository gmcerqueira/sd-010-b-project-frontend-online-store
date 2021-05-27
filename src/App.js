import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Route path="/cart" component={ Cart } />
      <Route exact path="/" component={ Home } />
    </Router>
  );
}

export default App;
