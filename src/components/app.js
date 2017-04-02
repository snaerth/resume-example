import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TimelineLite} from 'gsap';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../common/actions';
import ImageSection from './imageSection';
import ContentSection from './contentSection';
import PageSlideEffect from './pageSlideEffect';
import Resume from './resume';
import './app.css';
import GithubIcon from './github.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tl : new TimelineLite()
    };
  }

  componentDidMount() {
    const {tl} = this.state;
    const {left, right, firstName, lastName} = this.refs;

    tl.set(firstName, {rotationX: -45})
      .set(lastName, {rotationX: -45})
      .to(left, 1.5, { x: '0%', opacity: 1,ease: Power2.easeOut}) // eslint-disable-line
      .to(right, 1.5, { x: '0%', opacity: 1,ease: Power2.easeOut}, 0) // eslint-disable-line
      .to(firstName, 1.5, { y: '0%', opacity: 1, transformOrigin: '0 50%', rotationX: 0,ease: Power2.easeOut}, 0.8) // eslint-disable-line
      .to(lastName, 1.5, { y: '0%', opacity: 1, transformOrigin: '0 50%', rotationX: 0,ease: Power2.easeOut}, 1) // eslint-disable-line
      .pause();

    setTimeout(() => {
      tl.play();
    }, 800);
  }

  renderPreEffect() {
    const {tl} = this.state;
    if (this.props.common.pageRevealer) {
      tl.timeScale(3).reverse();
      setTimeout(() => {
        this.props.actions.showPage();
      }, 1000);
      return <PageSlideEffect type="top"/>;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <h1 className="name"><span ref="firstName">Snær Seljan</span><span ref="lastName">Þóroddsson</span></h1>
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
        {this.renderPreEffect()}
        {this.props.common.showPage 
          ? <Resume /> 
          : <a href="https://github.com/snaerth?tab=repositories" className="github-link">
            <img src={GithubIcon} alt="Github" className="github-icon" />
          </a>
        }
      </div>
    );
  }
}

/**
 * Maps state to components props
 *
 * @param {Object} state - Application state
 * @returns {Object}
 * @author Snær Seljan Þóroddsson
 */
function mapStateToProps(state) {
    return { common: state.common };
}

/**
 * Maps dispatch to components props
 *
 * @param {Object} dispatch - Redux dispatch medhod
 * @returns {Object}
 * @author Snær Seljan Þóroddsson
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);