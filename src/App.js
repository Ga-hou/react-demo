import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './views/Home';
import TodoList from './views/TodoList';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <header className='App-header'>
          <NavLink activeClassName='selected' to='/home'>Home</NavLink>
          <NavLink activeClassName='selected' to='/todo-list'>TodoList</NavLink>
        </header>
        <Route exact path='/home' component={Home} />
        <Route exact path='/todo-list' component={TodoList} />
      </div>
  </Router>
  );
}

export default App;
