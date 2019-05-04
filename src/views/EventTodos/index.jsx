import React from 'react';
import TodoHeader from './components/Header';
import TodoList from './components/List';

export default class extends React.Component {
  render () {
    return (
      <div className="todo-list">
        <TodoHeader />
        <TodoList />
      </div>
    )
  }
}
