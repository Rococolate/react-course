import React , { Component } from 'react';

class Range extends Component {
  render(){
    let { update, value } = this.props;
    return (
      <input type="range"
            value={value} 
            min="0"
            max="100"
            onChange={update}/>
    )
  }
}



export default Range;