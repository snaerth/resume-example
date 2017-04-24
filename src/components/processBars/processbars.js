import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TimelineMax} from 'gsap';
import './processbars.css';

class Processbar extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      tl: new TimelineMax(),
    };
  }

  componentDidMount() {
    const tl = this.state.tl;
    const refs = this.refs;
    let counters = [];
    for (let i = 0, len = this.props.data.length; i < len; i++) {
      counters.push({score: 0});
      tl
        .to(
          counters[i],
          1.5,
          {
            score: '+=' + this.props.data[i].percentage,
            roundProps: 'score',
            onUpdate: () => {
              refs['processcounter-' + i].innerHTML = counters[i].score;
            },
            ease: Linear.easeNone, // eslint-disable-line
          },
          '-=1',
        )
        .to(
          this.refs['processbar-' + i],
          1.5,
          {
            width: this.props.data[i].percentage + '%',
            autoAlpha: 1,
            ease: Power2.easeOut, // eslint-disable-line
          },
          '-=1',
        );
    }
  }

  renderRows(rows) {
    return rows.map((row, i) => {
      return (
        <div className="processbar-row" key={i}>
          <div className="processbar-left">
            <h2>{row.name}</h2>
          </div>
          <div className="processbar-right">
            <svg
              ref="svg"
              height={this.props.height}
              width="100%"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height={this.props.height} fill="#fff" width="100%" />
              <rect
                height={this.props.height}
                fill="#FF92F6"
                ref={'processbar-' + i}
              />
            </svg>
            <span className="processbar-counter">
              <span ref={'processcounter-' + i}>0</span><span>%</span>
            </span>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderRows(this.props.data)}
      </div>
    );
  }
}

export default Processbar;
