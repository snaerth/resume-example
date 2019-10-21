import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import Processbars from '../processBars';
import { TimelineLite, Power2 } from 'gsap';
import classnames from 'classnames';
import './processBarsList.css';

class ProcessBarsList extends Component {
  static propTypes = {
    processbars: PropTypes.array.isRequired,
    visibleArr: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  };

  titleRef = createRef();

  state = {
    componentRenderCount: 0,
    titleVisible: false // only render title once
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.componentRenderCount <= nextProps.visibleArr.length + 2) {
      return true;
    }

    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    const { titleVisible: prevTitleVisible } = prevState;
    const { visibleArr: prevVisibleArr } = prevProps;
    const { visibleArr } = this.props;

    if (prevVisibleArr !== visibleArr && !prevTitleVisible) {
      this.setState({ titleVisible: true });
    }
  }

  renderRows = (isVisible, idx) => {
    const { processbars, visibleArr } = this.props;
    const { titleVisible } = this.state;

    if (
      visibleArr[idx] &&
      this.titleRef &&
      this.titleRef.current &&
      !titleVisible
    ) {
      this.animateTitle(this.titleRef.current.children[0]);
    }

    return (
      <div key={idx}>
        <div
          className={classnames(
            'onscroll-reveal processbars',
            'processbar' + idx
          )}
        >
          {visibleArr[idx] && (
            <Processbars
              height={20}
              data={processbars[idx].items}
              id={idx}
              title={processbars[idx].title}
            />
          )}
        </div>
      </div>
    );
  };

  /**
   * Animates section title
   */
  animateTitle(title) {
    const tl = new TimelineLite();
    tl.set(title, { rotationX: -45 }).to(
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

  render() {
    const { title, visibleArr } = this.props;

    return (
      <div>
        <h1 className="name visible relative" ref={this.titleRef}>
          <span>{title}</span>
        </h1>
        <div className="processbars-list-container">
          {visibleArr.map(this.renderRows)}
        </div>
      </div>
    );
  }
}

export default ProcessBarsList;
