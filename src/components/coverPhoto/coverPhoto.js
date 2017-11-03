import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { initElementTilt } from '../../common/utils';

class CoverPhoto extends Component {
  componentWillUnmount() {
    initElementTilt(this.refs.image, true);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.common.showPage && !this.state.ie) {
      initElementTilt(this.refs.image, true);
    }
  }

  render() {
    const { src, alt, onClick, className } = this.props;

    return (
      <div
        style={{ backgroundImage: `url(${src})` }}
        role="img"
        aria-label={alt}
        onClick={onClick}
        className={className}
        ref="image"
      />
    );
  }
}

CoverPhoto.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

/**
 * Maps state to components props
 *
 * @param {Object} state - Application state
 * @returns {Object}
 * @author Snær Seljan Þóroddsson
 */
function mapStateToProps(state) {
  return { common: state.common };
}

export default connect(mapStateToProps, null)(CoverPhoto);
