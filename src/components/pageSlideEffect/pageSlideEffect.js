import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './pageSlideEffect.css';

class PageSlideEffect extends Component {
  render() {
    const { type } = this.props;
    return (
      <div
        className={`revealer revealer--animate anim--effect-${type} revealer--${type}`}
      >
        <div className="layer" />
        <div className="layer" />
      </div>
    );
  }
}

PageSlideEffect.propTypes = {
  type: PropTypes.string.isRequired
};

export default PageSlideEffect;
