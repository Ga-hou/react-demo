import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './views/Home';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <header className='App-header'>
          <NavLink activeClassName='selected' to='/'>Home</NavLink>
        </header>
        <Route exact path='/' component={Home} />
      </div>
  </Router>
  );
}

export default App;
