import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TimelineLite } from 'gsap';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../common/actions';
import ImageSection from './imageSection';
import ContentSection from './contentSection';
import PageSlideEffect from './pageSlideEffect';
import DelayWrapper from './delay';
import Resume from './resume';
import Page from './page';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tl: new TimelineLite(),
      loading: true
    };
  }

  componentDidMount() {
    this.props.actions.getTranslations();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.loading) {
      this.startAnimation();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.common.showPage) {
      const { tl } = this.state;
      setTimeout(() => {
        tl.timeScale(1).play();
      }, 1000);
    }
    if(nextProps.translations && this.state.loading) {
      this.setState({loading: false});
      this.removePageLoading();
    }
  }

  startAnimation() {
    const tl = this.state.tl;
    const { left, right, firstName, lastName, github } = this.refs;

    tl.set(github, { scale: 0.5 })
      .set(firstName, { rotationX: -45 })
      .set(lastName, { rotationX: -45 })
      .to(left, 1.5, { x: '0%', opacity: 1, ease: Power2.easeOut }) // eslint-disable-line
      .to(right, 1.5, { x: '0%', opacity: 1, ease: Power2.easeOut }, 0) // eslint-disable-line
      .to(firstName, 1.5, { y: '0%', opacity: 1, transformOrigin: '0 50%', rotationX: 0, ease: Power2.easeOut }, 0.8) // eslint-disable-line
      .to(lastName, 1.5, { y: '0%', opacity: 1, transformOrigin: '0 50%', rotationX: 0, ease: Power2.easeOut }, 1) // eslint-disable-line
      .to(github, 1.5, { scale: 1, opacity: 1, ease: Elastic.easeOut }, 1) // eslint-disable-line
      .pause();

    setTimeout(() => {
      tl.play();
    }, 800); 
  }

  addPageLoading() {
    document.body.classList.add('loading');
  }

  removePageLoading() {
    const minTime = 1000;
    const now = new Date();
    const next = new Date();
    const timeDiff = next.getTime() - now.getTime();
    if (timeDiff < minTime) {
      const delay = minTime - timeDiff;
      setTimeout(() => {
        document.body.classList.remove('loading');
      }, delay, );
    } else {
      document.body.classList.remove('loading');
    }
  }

  renderPreEffect() {
    if (this.props.common.pageRevealer) {
      const { tl } = this.state;
      tl.timeScale(3).reverse();
    }
  }

  renderPage() {
    return <DelayWrapper delay={1000}><Page title={this.props.translations.resume.title} delay={1000}><Resume /></Page></DelayWrapper>;
  }

  render() {
    if(this.state.loading) return null;
    const type = this.props.common.pageRevealerType;

    return (
      <div>
        <h1 className="name"><span ref="firstName">{this.props.translations.firstName}</span><span ref="lastName">{this.props.translations.firstName}</span></h1>
        <div className="container">
          <div className="col-50">
            <div className="left" ref="left">
              <ContentSection />
            </div>
          </div>
          <div className="col-50">
            <a ref="github" href="https://github.com/snaerth?tab=repositories" className="github-link">
              <svg className="icon-github">
                <use href="#icon-github" />
              </svg>
            </a>
            <div className="right" ref="right">
              <ImageSection />
            </div>
          </div>
        </div>
        {this.renderPreEffect()}
        {this.props.common.showPage
          ? this.renderPage()
          : null}
        {this.props.common.pageRevealer ? <PageSlideEffect type={type} /> : null}
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
  return { common: state.common, translations: state.common.translations };
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