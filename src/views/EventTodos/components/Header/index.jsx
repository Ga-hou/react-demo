import React from 'react';
import Event from '../../../../utils/Event';

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      newTodo: ''
    };

  }

  handleChange (e) {
    this.setState({
      newTodo: e.target.value
    })
  }

  handleAdd () {
    Event.trigger('addTodo', this.state.newTodo);
    this.setState({
      newTodo: ''
    });
  }

  handleKeyAdd (e) {
    if(e.key !== 'Enter') return;
    this.handleAdd()
  }

  render () {
    const { newTodo } = this.state;
    return (
      <div className="todo-header">
        <input type="text" value={newTodo} onChange={this.handleChange.bind(this)} onKeyPress={this.handleKeyAdd.bind(this)}/>
        <button onClick={this.handleAdd.bind(this)} >+</button>
      </div>
    )
  }
}
