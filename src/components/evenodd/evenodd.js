import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageBlurWrapper from '../imageBlurWrapper';

class Evenodd extends Component {
	renderCol(images) {
		return images.map((image, i) => this.renderImages(image));
	}

	renderImages(image) {
		return (
			<ImageBlurWrapper
				key={image.id}
				id={image.id}
				src={'images/' + image.url}
				thumbnail={'images/' + image.thumbnail}
				alt={image.text}
				text={image.text}
			/>
		);
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

Evenodd.propTypes = {
	left: PropTypes.array.isRequired,
	right: PropTypes.array.isRequired
};

export default Evenodd;