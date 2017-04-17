import React, {PropTypes} from 'react';
import './polaroidImages.css';

const PolaroidImages = ({image}) => (
  <div className="image-wrapper">
    <img src={`images/${image.url}`} alt={image.text} />
    <p>{image.text}</p>
  </div>
);

PolaroidImages.propTypes = {
  image: PropTypes.object.isRequired
};

export default PolaroidImages;
