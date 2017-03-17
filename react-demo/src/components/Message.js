import React , { Component } from 'react';

export default class Message extends Component {

  componentWillReceiveProps(nextProps){
    console.log('Receive Props');
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillMount(){console.log('Will Mount');}
  componentDidMount(){console.log('Did Mount');}
  componentWillUpdate(){console.log('Will Update');}
  componentDidUpdate(){console.log('Did Update');}
  componentWillUnmount(){console.log('Will UnMount');}

  render (){
    console.log('render~');
      return <span>{this.props.val}</span> 
  }
}

