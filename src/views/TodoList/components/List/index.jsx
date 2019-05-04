import React from 'react';

export default class extends React.Component {
  render () {
    const { todos } = this.props;
    return (
      <ul className="todos">
        {todos.map((item, index) => <li key={index}>{item.value}</li>)}
      </ul>
    )
  }
}
