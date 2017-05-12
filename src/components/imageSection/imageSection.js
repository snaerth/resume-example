import React from 'react';
import PropTypes from 'prop-types';
import CoverPhoto from '../coverPhoto';
import './imageSection.css';

const ImageSection = ({src, alt}) => (
  <div className="image-container text-center">
    <CoverPhoto
      src={src}
      alt={alt}
      className="coverImage"
    />
    <div className="overlay" />
  </div>
);

ImageSection.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default ImageSection;
