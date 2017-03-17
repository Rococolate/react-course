import React, { Component, Children } from "react";
import ReactDOM, { render, findDOMNode } from "react-dom";
import Header from "../../components/Header/";
import Footer from "../../components/Footer/";
import "./index.less";

import Handler from '../../components/Handler'

import Profile from '../../components/profile/Profile.js';
import Range from '../../components/Range/Range.js';

const data = {
  "login": "Rococolate",
  "id": 7875598,
  "avatar_url": "https://avatars0.githubusercontent.com/u/7875598?v=3",
}

export default class App extends Component {
    constructor(){
      super();
      // init state
      this.state = { 
        one: 0,
        two: 0,
        three: 0,
       }
    }
    componentWillUnmount(){console.log('app Will UnMount');}
    update = (e) => {
      console.log( findDOMNode(this.refs.one) )
      this.setState({
        one: findDOMNode(this.refs.one).value,
        two: findDOMNode(this.refs.two).value,
        three: findDOMNode(this.refs.three).value,
      });
    }

    render (){
        return (
      <div>
        <Handler />
        <Header />

        {/*<Profile name={data.login} id={data.id} url={data.avatar_url} />*/}
        <List>
          <h1>hello</h1>
          <h1>react</h1>
        </List>

        <Range ref="one" value={this.state.one} update={this.update}/>{this.state.one}
        <Range ref="two" value={this.state.two} update={this.update}/>{this.state.two}
        <Range ref="three" value={this.state.three} update={this.update}/>{this.state.three}

        <Footer />
      </div>
        ); 
    }
}

class List extends Component {
  render(){
    let node = Children.map(this.props.children, ( item ) => {
      return <li>{item}</li>
    })
    return (
      <ul>{node}</ul>
    )
  }
}