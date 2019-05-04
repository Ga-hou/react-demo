import React from 'react';
import Event from '../../../../utils/Event';

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: []
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
    Event.listen('addTodo', value => {
      this.handleAddTodo(value)
    })
  }

  handleAddTodo (value) {
    const { todos } = this.state;
    if(!value) return;
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
      <ul className="todos">
        {todos.map((item, index) => <li key={index}>{item.value}</li>)}
      </ul>
    )
  }
}
