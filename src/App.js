import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './views/Home';
import TodoList from './views/TodoList';
import EventTodoList from './views/EventTodos';
import Wx from './views/wx';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <header className='App-header'>
          <NavLink activeClassName='selected' to='/home'>Home</NavLink>
          <NavLink activeClassName='selected' to='/todo-list'>TodoList</NavLink>
          <NavLink activeClassName='selected' to='/event-todo-list'>EventTodoList</NavLink>
          <NavLink activeClassName='selected' to='/wx'>Wx</NavLink>
        </header>
        <Route exact path='/home' component={Home} />
        <Route exact path='/todo-list' component={TodoList} />
        <Route exact path='/event-todo-list' component={EventTodoList} />
        <Route exact path='/wx' component={Wx} />
      </div>
  </Router>
  );
}

export default App;
