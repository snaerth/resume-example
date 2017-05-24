import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  render() {
    const { left, right, type } = this.props;

    return (
      <div className="image-blur--container">
        <div className={type ? type : 'even'}>{this.renderCol(left)}</div>
        <div className={type ? type : 'odd'}>{this.renderCol(right)}</div>
      </div>
    );
  }
}

export default Evenodd;
