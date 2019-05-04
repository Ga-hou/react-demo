import React from 'react';
import './index.scss';

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
    });
  }

  handleAdd () {
    const { addTodo } = this.props;
    const { newTodo } = this.state;
    if(!newTodo) return;
    addTodo && addTodo(newTodo);
    this.setState({
      newTodo: ''
    })
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
