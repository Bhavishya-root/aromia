import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Nav from './components/Nav';
import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Nav />
          <Route path="/" component={Home} exact></Route>
        </Router>
      </>
    );
  }
}

export default App;



