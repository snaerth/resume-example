import React from 'react';
import PropTypes from 'prop-types';
import './columnImages.css';

const ColumnImages = ({image, className}) => (
  <div className={className + ' column-images-wrapper'}>
    <img src={`images/${image.url}`} alt={image.text} />
    <p>{image.text}</p>
  </div>
);

ColumnImages.propTypes = {
  image: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default ColumnImages;
