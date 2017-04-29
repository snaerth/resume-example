import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './columnImages.css';

class ColumnImages extends Component {
  render() {
    const {image, className} = this.props;

    return (
      <div className={className + ' column-images-wrapper'}>
        <img src={`images/${image.url}`} alt={image.text} />
        <p>{image.text}</p>
      </div>
    );
  }
}

ColumnImages.propTypes = {
  image: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default ColumnImages;
