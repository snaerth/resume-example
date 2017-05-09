import React, { Component } from 'react';
import { TimelineLite } from 'gsap';
import WaveSvg from '../waveSvg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router-dom';
import classnames from 'classnames';
import ProcessBarsList from '../processBarsList';
import Button from '../button';
import ImageBlurWrapper from '../imageBlurWrapper';
import * as actionCreators from '../../common/actions';
import { withinViewport } from '../../common/utils';
import './resume.css';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
    this.removeHiddenClass = this.removeHiddenClass.bind(this);
    this.state = {
      tl: new TimelineLite(),
      processbarVisible: this.props.translations.processbars.map(() => false)
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
        if (el.classList.contains('processbars')) {
          let processbarState = this.state.processbarVisible;
          for (let i = 0, len = processbarState.length; i < len; i++) {
            if (el.classList.contains('processbar-' + i)) {
              let newArr = [...processbarState];
              newArr[i] = true;
              this.setState((prevState, props) => {
                return { processbarVisible: newArr };
              });
            }
          }
        }

        el.isAnimated = true;
      }
    });
  }

  componentDidMount() {
    this.initElementInViewportChecker();
    const { tl } = this.state;
    const { title, back, row_1 } = this.refs;
    const rows = row_1.children;

    tl
      .set(title, { rotationX: -45 })
      .to(back, 1, { x: '0%', opacity: 1, ease: Power2.easeOut }, 0.2) // eslint-disable-line
      .to(
        title,
        1.5,
        {
          y: '0%',
          opacity: 1,
          transformOrigin: '0 50%',
          rotationX: 0,
          ease: Power2.easeOut // eslint-disable-line
        },
        0.8
      )
      .pause();

    for (let i = 0, len = rows.length; i < len; i++) {
      const cols = rows[i].children;
      for (let j = 0, len = cols.length; j < len; j++) {
        const delayBetween = 0.4 + (i + 1) / 10 + (j + i + 1) / 10;
        tl.to(
          cols[j],
          1.5,
          { y: '0%', opacity: 1, ease: Power2.easeOut }, // eslint-disable-line
          delayBetween
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
    const { resumeSections, images, more } = this.props.translations;

    return resumeSections.map((section, i) => {
      const index = i;
      const rows = this.renderRows(section.rows);
      const colImages = this.renderColImages(images, index);

      return (
        <div className={'resume-section section-' + index} key={index}>
          <div>
            <h1
              className={
                index === 0 ? 'name relative' : 'name visible relative'
              }
            >
              <span ref={index === 0 ? 'title' : ''}>{section.title}</span>
            </h1>
            {
              <div
                ref={index === 0 ? 'row_1' : ''}
                className="resume-section--row"
              >
                {rows}
                {rows.length > 2 
                  ? <div className="text-center"><button className="more" onClick={e => this.removeHiddenClass(e)}>{more}...<span class="icon-right"></span><span class="icon-right after"></span></button></div>
                  : null}
              </div>
            }
            <div className="image-blur--container">
              {colImages}
            </div>
          </div>
          <WaveSvg />
        </div>
      );
    });
  }

  renderColImages(images, index) {
    const begin = index % 2 !== 0 ? index + 1 : index;
    const end = index % 2 !== 0 ? index + 1 + 2 : index + 2;

    return images.slice(begin, end).map((image, i) => {
      return (
        <div key={'image' + i} className={index % 2 === 0 ? 'even' : 'odd'}>
          <ImageBlurWrapper
            id={'image' + i}
            src={'images/' + image.url}
            thumbnail={'images/' + image.thumbnail}
            alt={image.text}
            text={image.text}
          />
        </div>
      );
    });
  }

  renderRows(rows) {
    return rows.map((row, i) => {
      const hidden = i > 2 ? 'hidden' : '';

      return (
        <div className={classnames('resume-row', hidden)} key={'row-' + i}>
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
      .set(el, { rotationX: -45 })
      .to(
        el,
        1.5,
        {
          y: '0%',
          opacity: 1,
          transformOrigin: '0 50%',
          rotationX: 0,
          ease: Power2.easeOut // eslint-disable-line
        },
        '-=0.2'
      )
      .pause();
  }

  removeHiddenClass(e) {
    e.preventDefault();
    alert('útfæra sýna meira');
  }

  render() {
    const { translations } = this.props;
    const { processbars } = translations;
    const { processbarVisible } = this.state;

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
            <div>
              <h1 className="name visible relative">
                <span>skills</span>
              </h1>
              <ProcessBarsList
                processbars={processbars}
                visibleArr={processbarVisible}
              />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Resume));
