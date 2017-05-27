import React, { Component } from 'react';
import classnames from 'classnames';
import { TweenMax, Power3 } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin'; // eslint-disable-line
import './nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(id) {
    const { linksState } = this.props;
    let currentSection = 0;

    for (let i = 0; i < linksState.length; i++) {
      if (linksState[i]) {
        currentSection = i;
        break;
      }
    }

    let timeSec = 1;
    let diff = Math.abs(currentSection - id);
    timeSec += diff * 0.4;

    TweenMax.to(window, timeSec, {
      scrollTo: {
        y: 'div[data-navid="' + id + '"]',
        autoKill: true,
        offsetY: 150
      },
      ease: Power3.easeOut
    });
  }

  render() {
    const { links, linksState } = this.props;

    return (
      <nav>
        <ul className="nav">
          {links.map((link, i) => {
            const active = linksState[i] ? 'active' : '';

            return (
              <li key={link.id} onClick={() => this.onClickHandler(i)}>
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

export default Nav;
