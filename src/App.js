import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Animals from './Components/Animals/Animals.js'
import Plants from './Components/Plants/Plants.js'
import Home from './Components/Home/Home.js'
import About from './Components/About/About.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Router Affine Lecture</h1>
        <Router>
          <div>
            <ul>
              <li><Link to="/"> Home </Link></li>
              <li><Link to="/about"> About </Link></li>
              <li><Link to="/plants"> Plants </Link></li>
              <li><Link to="/animals"> Animals </Link></li>
            
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/plants" component={Plants} />
            <Route path="/animals" component={Animals} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
