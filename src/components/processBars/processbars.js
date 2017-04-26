import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TimelineMax, TimelineLite} from 'gsap';
import './processbars.css';

class Processbar extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.animateProcessbar = this.animateProcessbar.bind(this);
    this.resize = this.resize.bind(this);
    this.state = {
      tl: new TimelineMax(),
    };
  }

  resize() {
    const tl = new TimelineLite();

    for (let i = 0, len = this.props.data.length; i < len; i++) {
      const counterEl = this.refs['processcounter-' + i];
      const processbarEl = this.refs['processbar-' + i];
      const percentage = this.props.data[i].percentage;
      const fullWidth = processbarEl.viewportElement.clientWidth;
      const calcPercentageWidth = percentage / 100 * fullWidth;
      console.log(percentage);
      tl
        .to(
          counterEl,
          0.3,
          {
            x: calcPercentageWidth,
            ease: Power2.easeOut, // eslint-disable-line
          },
          '-=0.3',
        )
        .to(
          processbarEl,
          0.5,
          {
            width: percentage + '%',
            ease: Power2.easeOut, // eslint-disable-line
          },
          '-=0.5',
        );
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    const tl = this.state.tl;
    tl.add(this.animateColumns());
    tl.add(this.animateProcessbar(), 0);
  }

  animateColumns(timeScale) {
    const tl = new TimelineLite();
    const tlL = new TimelineLite();
    const tlR = new TimelineLite();
    tlL
      .set('.processbar-left', {
        autoAlpha: 0,
        x: '-200px',
      })
      .staggerTo(
        '.processbar-left',
        1,
        {autoAlpha: 1, x: '0%', ease: Elastic.easeOut, easeParams: [0.9, 1]}, // eslint-disable-line
        1.4,
      );
    tlR
      .set('.processbar-right', {
        autoAlpha: 0,
        x: '200px',
      })
      .staggerTo(
        '.processbar-right',
        1,
        {autoAlpha: 1, x: '0%', ease: Elastic.easeOut, easeParams: [0.9, 1]}, // eslint-disable-line
        1.4,
      );

    tl.add(tlL, 0);
    tl.add(tlR, 0);

    return tl;
  }

  animateProcessbar() {
    const tl = new TimelineLite();
    let counters = [];

    for (let i = 0, len = this.props.data.length; i < len; i++) {
      const counterEl = this.refs['processcounter-' + i];
      const processbarEl = this.refs['processbar-' + i];
      const percentage = this.props.data[i].percentage;
      const fullWidth = processbarEl.viewportElement.clientWidth;
      const calcPercentageWidth = percentage / 100 * fullWidth;
      counters.push({score: 0});

      tl
        .set(counterEl, {
          autoAlpha: 0,
          scale: 0,
          z: 0.01,
          y: '20px',
        })
        .to(counterEl, 1.5, {
          scale: 1,
          y: '0%',
          autoAlpha: 1,
          ease: Elastic.easeOut, // eslint-disable-line
          easeParams: [1.2, 0.3],
        })
        .to(
          counterEl,
          1.5,
          {
            x: calcPercentageWidth,
            ease: Power2.easeOut, // eslint-disable-line
          },
          '-=1.5',
        )
        .to(
          counters[i],
          1.5,
          {
            score: '+=' + percentage,
            roundProps: 'score',
            onUpdate: () => {
              counterEl.children[0].innerHTML = counters[i].score;
            },
            ease: Linear.easeNone, // eslint-disable-line
          },
          '-=1.5',
        )
        .to(
          processbarEl,
          1.5,
          {
            width: percentage + '%',
            ease: Power2.easeOut, // eslint-disable-line
          },
          '-=1.5',
        );
    }

    return tl;
  }

  renderRows(rows) {
    return rows.map((row, i) => {
      return (
        <div className="processbar-row" key={i}>
          <div className="processbar-left">
            <h2>{row.name}</h2>
          </div>
          <div className="processbar-right">
            <span className="processbar-counter" ref={'processcounter-' + i}>
              <span>0</span><span>%</span>
            </span>
            <svg
              viewBox="0 0 622 20"
              preserveAspectRatio="xMidYMid meet"
              className="processbar-svg"
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
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="processbar-container">
        {this.renderRows(this.props.data)}
      </div>
    );
  }
}

export default Processbar;
