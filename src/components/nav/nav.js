import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { TimelineLite, Power2 } from 'gsap';
import './nav.css';

class Nav extends Component {
  static propTypes = {
    linksState: PropTypes.array.isRequired,
    links: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);

    this.state = {
      tl: new TimelineLite()
    };
  }

  componentDidMount() {
    const winW = window.innerWidth;
    const { ul } = this.refs;
    const { tl } = this.state;
    let animateOptions = { x: '0%', opacity: 1, ease: Power2.easeOut };
    if (winW <= 1500) {
      animateOptions = { y: '0%', opacity: 1, ease: Power2.easeOut };
    }

    tl.staggerTo(ul.children, 0.7, animateOptions, 0.1).pause();

    setTimeout(() => {
      tl.play();
    }, 1000);
  }

  onClickHandler(id) {
    const element = document.querySelector('div[data-navid="' + id + '"]');
    window.scroll(0, id !== 0 ? element.offsetTop - 50 : 0);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.common.back === true) {
      this.state.tl.timeScale(4).reverse();
    }
  }

  render() {
    const { links, linksState } = this.props;

    return (
      <nav>
        <ul className="nav" ref="ul">
          {links.map((link, i) => {
            const active = linksState[i] ? 'active' : '';

            return (
              <li
                key={link.id}
                className={active}
                onClick={() => this.onClickHandler(i)}
              >
                {link.text}
                <svg className={classnames('icon-line', active)}>
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#svg_line"
                  />
                </svg>
              </li>
            );
          })}
        </ul>
      </nav>
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

export default connect(
  mapStateToProps,
  null
)(Nav);
