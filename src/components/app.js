import React, {Component} from 'react';
import {TimelineLite} from 'gsap';
import Left from './left';
import Right from './right';
import './app.css';

class App extends Component {
  componentDidMount() {
    const left = this.refs.left;
    const right = this.refs.right;

    const tl = new TimelineLite();
    tl.set(left, {x: '100%'});
    tl.to(left, 1, {x: '0%', ease: Power2.easeIn});// eslint-disable-line
  }

  render() {
    return (
      <div className="container">
        <div className="left" ref="left">
          <Left/>
        </div>
        <div className="right" ref="right">
          <Right/>
        </div>
      </div>
    );
  }
}

export default App;
