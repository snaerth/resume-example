import React, {Component} from 'react';
import {TimelineLite} from 'gsap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter, Link} from 'react-router-dom';
import Processbars from '../processBars';
import Button from '../button';
import PolaroidImages from '../polaroidImages';
import ColumnImages from '../columnImages';
import * as actionCreators from '../../common/actions';
import {withinViewport} from '../../common/utils';
import './resume.css';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.animateRow = this.animateRow.bind(this);
    this.back = this.back.bind(this);
    this.state = {
      tl: new TimelineLite(),
      processbarVisible: false,
    };
  }

  componentWillMount() {
    window.onpopstate = e => {
      e.preventDefault();
      this.state.tl.timeScale(4).reverse();
      this.props.actions.revealAnimationBackward(true);
      setTimeout(this.props.history.push, 1500, '/');
    };
  }

  componentWillUnmount() {
    withinViewport(true);
  }

  initElementInViewportChecker() {
    withinViewport(null, 'onscroll-reveal', 'inViewport', (isVisble, el) => {
      if (isVisble && !el.isAnimated) {
        this.animatePolaroidImages(el);
        el.isAnimated = true;

        if (el.classList.contains('processbars')) {
          this.setState((prevState, props) => {
            return {processbarVisible: true};
          });
        }
      }
    });
  }

  componentDidMount() {
    this.initElementInViewportChecker();
    const {tl} = this.state;
    const {title, back, row_1} = this.refs;
    const rows = row_1.children;

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

    tl.play();
  }

  back(ev) {
    ev.preventDefault();
    this.state.tl.timeScale(4).reverse();
    this.props.actions.revealAnimationBackward();
    setTimeout(this.props.history.push, 1500, '/');
  }

  renderSections() {
    const {resumeSections, images} = this.props.translations;
    return resumeSections.map((section, i) => {
      const index = i;
      const rows = this.renderRows(section.rows);
      const polarImages = section.images.map((image, i) => (
        <PolaroidImages key={'image' + i} image={image} />
      ));

      const begin = index % 2 !== 0 ? index + 1 : index;
      const end = index % 2 !== 0 ? index + 1 + 2 : index + 2;
      const colImages = images
        .slice(begin, end)
        .map((image, i) => <ColumnImages key={'image' + i} image={image} className={index % 2 === 0 ? 'even' : 'odd'} />);

      return (
        <div className={'resume-section section-' + index} key={index}>
          <h1 className={index === 0 ? 'name relative' : 'name visible relative'}>
            <span ref={index === 0 ? 'title' : ''}>{section.title}</span>
          </h1>
          {
            <div ref={index === 0 ? 'row_1' : ''} className="resume-section--row">
              {rows}
            </div>
          }
          <div className="column-images-container">{colImages}</div>
          <div className="images-section onscroll-reveal"></div>
        </div>
      );
    });
  }

  onChange(isVisible, visibilityRect, el) {
    if (isVisible) {
      this.animatePolaroidImages(el);
    }
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

  animateTitle(el, tl) {
    tl
      .set(el, {rotationX: -45})
      .to(
        el,
        1.5,
        {
          y: '0%',
          opacity: 1,
          transformOrigin: '0 50%',
          rotationX: 0,
          ease: Power2.easeOut, // eslint-disable-line
        },
        '-=0.2',
      )
      .pause();
  }

  animatePolaroidImages(el) {
    const tl = new TimelineLite();
    for (let i = 0, len = el.children.length; i < len; i++) {
      const random = Math.round(Math.random() * 7) + 1;
      tl.to(
        el.children[i],
        1,
        {
          opacity: 1,
          scale: 1,
          rotation: i % 2 === 0 ? -random : random,
          ease: Power2.easeOut, // eslint-disable-line
        },
        0.2 * i,
      );
    }
  }

  animateRow(el, tl) {
    const rows = el.children;
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

  render() {
    const translations = this.props.translations;
    return (
      <div>
        <Link to="/" onClick={ev => this.back(ev)}>
          <div
            className="job-application--button-container button-right button-right--offset back-button"
            ref="back"
          >
            <Button text={translations.back} />
          </div>
        </Link>
        <div className="resume-container" ref="container">
          {this.renderSections()}
          <div className="resume-section">
            <h1 className="name visible relative">
              <span>{translations.processbar.title}</span>
            </h1>
            <div className="onscroll-reveal processbars">
              {this.state.processbarVisible
                ? <Processbars
                    height={20}
                    data={translations.processbar.items}
                  />
                : null}
            </div>
          </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Resume));
