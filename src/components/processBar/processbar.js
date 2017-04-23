import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TweenMax} from 'gsap';

class Processbar extends Component {
  static propTypes = {
    size: PropTypes.number,
    title: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  };

  componentDidMount() {
    TweenMax.to(this.refs.line, 1, {width: '92%'});
  }

  render() {
    const {size, title, percentage, height} = this.props;
    return (
      <div>
        <h1 className="name visible relative">
          <span>Skills</span>
        </h1>
        <div className="resume-row">
          <div className="resume-left">
            <h2>{title}</h2>
          </div>
          <div className="resume-right">
            <svg
              ref="svg"
              height={height}
              width="100%"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect ref="line" height={height} fill="#FF92F6" />
            </svg>
            <div id="score">0</div>
            <button id="add20Btn">add 20</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Processbar;
