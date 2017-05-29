import React, { Component } from 'react';
import { TimelineLite, Power2, Elastic } from 'gsap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router-dom';
import classnames from 'classnames';
import Button from '../button';
import * as actionCreators from '../../common/actions';
import './contactComponent.css';

class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);

    this.state = {
      tl: new TimelineLite()
    };
  }

  componentDidMount() {
    const { back, title, text, button } = this.refs;
    const { tl } = this.state;
    tl.set(button, { scale: 0, autoAlpha: 0 });
    this.animateTitle(title, tl);
    tl.to(back, 1, { x: '0%', opacity: 1, ease: Power2.easeOut }, 0.2).pause();
    tl
      .to(text, 1, { y: '0%', opacity: 1, ease: Power2.easeOut }, '-=0.8')
      .to(
        button,
        1.5,
        { scale: 1, autoAlpha: 1, ease: Elastic.easeOut },
        '-=0.6'
      )
      .play();
  }

  /**
   * Animates section title
   */
  animateTitle(title, tl) {
    return tl.set(title, { rotationX: -45 }).to(
      title,
      1.5,
      {
        y: '0%',
        opacity: 1,
        transformOrigin: '0 50%',
        rotationX: 0,
        ease: Power2.easeOut
      },
      0.5
    );
  }

  back(ev) {
    ev.preventDefault();
    this.state.tl.timeScale(4).reverse();
    this.props.actions.revealAnimationBackward();
    setTimeout(this.props.history.push, 1500, '/');
  }

  emailHandler(email) {
    window.location.href = 'mailto:' + email;
    return false;
  }

  render() {
    const { translations } = this.props;
    const {
      sendEmail,
      back,
      contact: { text, buttonText, title }
    } = translations;

    return (
      <div>
        <Link to="/" onClick={ev => this.back(ev)}>
          <div
            className={classnames(
              'job-application--button-container',
              'button-left',
              'button-left--offset'
            )}
            ref="back"
          >
            <Button text={back} />
          </div>
        </Link>
        <div className="resume-container" ref="container">
          <div className="resume-section">
            <div>
              <h1 className="name visible relative text-center no-padding">
                <span ref="title">{title}</span>
              </h1>
              <div className="resume-section--row max-768 no-padding">
                <div className="resume-row hidden-element" ref="text">
                  <p className="text-section text-center">
                    {text}
                  </p>
                </div>
                <div className="resume-row flex-center no-padding" ref="button">
                  <Button
                    text={buttonText}
                    onClick={() => this.emailHandler(sendEmail)}
                    className="max-width-300 svg"
                  >
                    <svg className="icon-paperplane">
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#icon-paperplane"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ContactComponent)
);
