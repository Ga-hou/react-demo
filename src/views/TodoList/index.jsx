import React from 'react';
import TodoHeader from './components/Header';
import List from './components/List';
import './index.scss';

export default class extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      todos: []
    };
  }

  addTodo (value) {
    const { todos } = this.state;
    todos.push({
      type: 'todo',
      value
    });
    this.setState({
      todos
    });
  }

  render () {
    const { todos } = this.state;
    return (
      <div className="todo-list">
        <TodoHeader addTodo={this.addTodo.bind(this)}/>
        <List todos={todos}/>
      </div>
    )
  }
}
