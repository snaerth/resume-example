import React, {Component} from 'react';
import {TimelineLite} from 'gsap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from '../button';
import * as actionCreators from '../../common/actions';
import './resume.css';

class Resume extends Component {
  constructor(props) {
    super(props);
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

  componentDidMount() {
    const {tl} = this.state;
    const {title, back} = this.refs;
    const rows = this.refs.rows.children;

    tl
      .set(title, {rotationX: -45})
      .to(back, 1, {x: '0%', opacity: 1, ease: Power2.easeOut}, 0.2) // eslint-disable-line
      .to(
        title,
        1.5,
        {
          y: '0%',
          opacity: 1,
          transformOrigin: '0 50%',
          rotationX: 0,
          ease: Power2.easeOut, // eslint-disable-line
        },
        0.8,
      )
      .pause();

    for (let i = 0, len = rows.length; i < len; i++) {
      const cols = rows[i].children;
      for (let j = 0, len = cols.length; j < len; j++) {
        const delayBetween = 0.4 + (i + 1) / 10 + (j + i + 1) / 10;
        tl.to(
          cols[j],
          1.5,
          {y: '0%', opacity: 1, ease: Power2.easeOut}, // eslint-disable-line
          delayBetween,
        );
      }
    }

    tl.pause();
    setTimeout(() => {
      tl.play();
    }, 800);
  }

  back() {
    this.props.actions.resumeBackAnimation();
    history.pushState(null, null, window.location.origin);
    const tl = this.state.tl;

    setTimeout(() => {
      tl.timeScale(3).reverse();
      setTimeout(
        this.props.actions.pageRevealerStart,
        this.props.delay - 400,
        'bottom',
      );
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
      const images = this.renderImagesSection(section.images);
      
      return (
        <div key={i}>
          <h1 className="name">
            <span ref="title">{section.title}</span>
          </h1>
          {<div ref="rows">{rows}</div>}
          {<div className="images-section" onScroll={this.scrollHandler}>{images}</div>}
        </div>
      );
    });
  }

  scrollHandler(e) {
    console.log(e);
  }

  renderRows(rows) {
    return rows.map((row, i) => {
      return (
        <div className="resume-row" key={'row-' + i}>
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

  renderImagesSection(images) {
    return images.map((image, i) => <div key={`${image}-i`} className="image-wrapper"><img src={`images/${image}`} alt={this.props.translations.name}/></div>);
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
