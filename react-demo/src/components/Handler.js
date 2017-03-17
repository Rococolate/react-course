import React , { Component , PropTypes } from 'react';
import ReactDom from 'react-dom';
import Message from './Message';
export default class Handler extends Component {
  constructor(){
    super();
    // init state
    this.state = { 
      val: 0,
      destroyed: false
     }
  }
  up = (e) => {
    this.setState({
      val: this.state.val + 1
    });
  }

  destroy = (e) => {
    this.setState({
      destroyed: true 
    });
  }

  remove = () => {
    ReactDom.unmountComponentAtNode(document.getElementById('app'));
  }

  componentWillUnmount(){console.log('headler Will UnMount');}

  render (){
    if (this.state.destroyed) return null;
    return (
      <div id='headler'>
        <Message val={this.state.val} />
        <button onClick={this.up}>{this.state.val}</button>
        <button onClick={this.destroy}>destroy</button>
        <button onClick={this.remove}>remove</button>
      </div>
    )
  }
}

