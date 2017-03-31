import React, {Component} from 'react';
import {TimelineLite} from 'gsap';
import ImageSection from './imageSection';
import ContentSection from './contentSection';
import './app.css';
import GithubIcon from './github.svg';

class App extends Component {
  componentDidMount() {
    const left = this.refs.left;
    const right = this.refs.right;
    const firstName = this.refs.firstName;
    const lastName = this.refs.lastName;

    const tl = new TimelineLite();
    tl.set(left, {x: '-100%', opacity: 0.5})
      .set(right, {x: '100%', opacity: 0.5})
      .set(firstName, {y: '20%', opacity: 0, rotationX: -45})
      .set(lastName, {y: '20%', opacity: 0, rotationX: -45})
      .to(left, 1.5, { x: '0%', opacity: 1,ease: Power2.easeOut}) // eslint-disable-line
      .to(right, 1.5, { x: '0%', opacity: 1,ease: Power2.easeOut}, 0) // eslint-disable-line
      .to(firstName, 1.5, { y: '0%', opacity: 1, transformOrigin: '0 50%', rotationX: 0,ease: Power2.easeOut}, 0.8) // eslint-disable-line
      .to(lastName, 1.5, { y: '0%', opacity: 1, transformOrigin: '0 50%', rotationX: 0,ease: Power2.easeOut}, 1) // eslint-disable-line
      .pause();

    setTimeout(() => {
      tl.play();
    }, 800);
  }

  render() {
    return (
      <div>
        <h1 className="name"  ><span ref="firstName">Snær Seljan</span><span ref="lastName">Þóroddsson</span></h1>
        <a href="https://github.com/snaerth?tab=repositories" className="github-link">
          <img src={GithubIcon} alt="Github" className="github-icon" />
        </a>
        <div className="container">
          <div className="col-50">
            <div className="left" ref="left">
              <ContentSection/>
            </div>
          </div>
          <div className="col-50">
            <div className="right" ref="right">
              <ImageSection/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;