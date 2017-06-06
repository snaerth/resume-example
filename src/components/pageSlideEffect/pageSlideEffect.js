import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class PageSlideEffect extends Component {
  render() {
    const { type, visible } = this.props;
    const classes = visible
      ? 'anim--effect-' + type + ' revealer--' + type
      : '';

    return (
      <div className={classnames('revealer revealer--animate', classes)}>
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
