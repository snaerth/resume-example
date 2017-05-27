import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TimelineLite, Power2 } from 'gsap';
import ImageBlurWrapper from '../imageBlurWrapper';

class Evenodd extends Component {
  static propTypes = {
    left: PropTypes.array.isRequired,
    right: PropTypes.array.isRequired,
    type: PropTypes.string,
    visible: PropTypes.bool
  };

  constructor() {
    super();

    this.state = {
      hasShown: false
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.hasShown === false) {
      this.setState((prevState, props) => {
        return { hasShown: true };
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.visible && !nextState.hasShown;
  }

  startAnimation(elements) {
    const tl = new TimelineLite();
    elements = elements[0].classList.contains('odd')
      ? [elements[1], elements[0]]
      : elements;
    tl.staggerTo(
      elements,
      1,
      { y: '0%', opacity: 1, ease: Power2.easeOut },
      0.2
    );
  }

  renderCol(images) {
    return images.map((image, i) => this.renderImages(image));
  }

  renderImages(image) {
    const { visible } = this.props;
    return (
      <ImageBlurWrapper
        key={image.id}
        id={image.id}
        src={'images/' + image.url}
        thumbnail={'images/' + image.thumbnail}
        alt={image.text}
        text={image.text}
        visible={visible}
      />
    );
  }

  render() {
    const { left, right, type, visible } = this.props;

    if (visible === true) {
      this.startAnimation(this.refs.container.children);
    }

    return (
      <div className="image-blur--container" ref="container">
        <div className={type ? type : 'even'}>{this.renderCol(left)}</div>
        <div className={type ? type : 'odd'}>{this.renderCol(right)}</div>
      </div>
    );
  }
}

export default Evenodd;
