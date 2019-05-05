import React from 'react';
import './index.scss';

export default class extends React.Component {
  constructor (props) {
    super(props);
  }


  render () {
    const { scrollY, scrollX } = this.props;
    return (
      <div className={`wx-scroll-view ${scrollX ? 'scroll-x' : ''} ${scrollY ? 'scroll-y' : ''}`}
      >{this.props.children}</div>
    )
  }
}
