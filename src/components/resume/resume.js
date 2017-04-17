import React, {Component} from 'react';
import {TimelineLite} from 'gsap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  isElementInViewport,
  addScrollListeners,
  removeScrollListeners,
} from '../../common/utils';
import Button from '../button';
import PolaroidImages from '../polaroidImages';
import * as actionCreators from '../../common/actions';
import './resume.css';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.animateRow = this.animateRow.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
    this.state = {
      tl: new TimelineLite(),
    };
  }

  componentWillMount() {
    window.onpopstate = e => {
      if (!e.state) {
        this.back();
      } else {
        this.props.actions.pageAnimationForward();
      }
    };
  }

  scrollHandler() {
    const elements = document.querySelectorAll('.inViewport');

    for (let i = 0, len = elements.length; i < len; i++) {
      const el = elements[i];
      const inView = isElementInViewport(el);

      if (inView && !el.isAnimated) {
        el.isAnimated = true;
        const section = el.parentElement.parentElement;
        const tl = section.className.indexOf('section-0') > -1
          ? this.state.tl
          : new TimelineLite();

        const cN = el.className;
        if (cN.indexOf('images-section') > -1) {
          this.animatePolaroidImages(el);
        }

        if (cN.indexOf('resume-row') > -1) {
          this.animateRow(el, tl);
        }

        if (cN.indexOf('name') > -1) {
          this.animateTitle(el, tl);
        }
      }
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.scrollHandler();
      addScrollListeners(this.scrollHandler);
    }, 400);

    this.state.tl.to(
      this.refs.back,
      1,
      {x: '0%', opacity: 1, ease: Power2.easeOut}, // eslint-disable-line
      0.2,
    );
  }

  componentWillUnmount() {
    removeScrollListeners(function() {
      console.log('bla');
    });
  }

  back() {
    this.props.actions.resumeBackAnimation();
    history.pushState(null, null, window.location.origin);
    const tl = this.state.tl;

    setTimeout(() => {
      tl.timeScale(3).reverse();
      this.props.actions.pageRevealerStart('bottom');
      setTimeout(this.props.actions.pageAnimationBackward, this.props.delay);
    }, 800);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.common.resumeBackAnimation) {
      this.state.tl.timeScale(3).reverse();
    }
  }

  renderSections() {
    const resumeSections = this.props.translations.resumeSections;
    return resumeSections.map((section, i) => {
      const rows = this.renderRows(section.rows);
      const images = section.images.map((image, i) => (
        <PolaroidImages key={'image' + i} image={image} />
      ));

      return (
        <div className={'resume-section section-' + i} key={i}>
          <h1 className="name relative inViewport">
            <span>{section.title}</span>
          </h1>
          {<div>{rows}</div>}
          {
            <div className="vertical-scroll-hider">
              <div className="images-section inViewport">{images}</div>
            </div>
          }
        </div>
      );
    });
  }

  renderRows(rows) {
    return rows.map((row, i) => {
      return (
        <div className="resume-row inViewport" key={'row-' + i}>
          <div className="resume-left">
            <h2>{row.title}</h2>
            <h2>{row.secondTitle}</h2>
          </div>
          <div className="resume-right">
            <p>{row.content}</p>
          </div>
        </div>
      );
    });
  }

  animateTitle(el, tl) {
    tl.set(el.children, {rotationX: -45}).to(
      el.children,
      1.5,
      {
        y: '0%',
        opacity: 1,
        transformOrigin: '0 50%',
        rotationX: 0,
        ease: Power2.easeOut, // eslint-disable-line
      },
      '-=0.4',
    );
  }

  animatePolaroidImages(el) {
    const tl = new TimelineLite();
    for (let i = 0, len = el.children.length; i < len; i++) {
      const random = Math.round(Math.random() * 7) + 1;
      tl.to(
        el.children[i],
        0.5,
        {
          opacity: 1,
          scale: 1,
          rotation: i % 2 === 0 ? -random : random,
          ease: Power2.easeOut, // eslint-disable-line
        },
        0.3 * i,
      );
    }
  }

  animateRow(el, tl) {
    const cols = el.children;
    for (let i = 0, len = cols.length; i < len; i++) {
      const delayBetween = 0.4 + (i + 1) / 10;
      tl.to(
        cols[i],
        1.5,
        {y: '0%', opacity: 1, ease: Power2.easeOut}, // eslint-disable-line
        delayBetween + 0.3,
      );
    }
  }

  render() {
    const translations = this.props.translations;
    return (
      <div>
        <div
          className="job-application--button-container button-right button-right--offset back-button"
          ref="back"
        >
          <Button text={translations.back} onClick={() => this.back()} />
        </div>
        <div className="resume-container" ref="container">
          {this.renderSections()}
        </div>
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
  return {common: state.common, translations: state.common.translations};
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
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Resume);
