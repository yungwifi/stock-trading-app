import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import StocksPage from './components/StocksPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/stocks" component={StocksPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
