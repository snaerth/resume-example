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

  onClickHandler(i) {
    TweenMax.to(window, 1, {
      scrollTo: {
        y: 'div[data-navid="' + i + '"]',
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
