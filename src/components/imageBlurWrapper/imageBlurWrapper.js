import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { processImage } from '../../common/stackBlur';
import './imageBlurWrapper.css';

/**
 * Image blur wrapper component
 * Loads thumbnail image in canvas and performes
 * blur algoritim to blur image. When bigger image has loaded
 * it hides canvas and shows bigger image
 */
class ImageBlurWrapper extends Component {
	static propTypes = {
		src: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
		txt: PropTypes.string,
		thumbnail: PropTypes.string.isRequired,
		visible: PropTypes.bool,
		blur: PropTypes.string,
		id: PropTypes.number.isRequired,
		overlay: PropTypes.bool,
		overlayTitle: PropTypes.string,
		overlayText: PropTypes.string
	};

	constructor() {
		super();

		this.state = {
			loaded: false
		};
	}

	componentDidMount() {
		const { blur, thumbnail } = this.props;
		let img = new Image();
		img.src = thumbnail || 'images/thumbnails/placeholder.png';
		img.onload = () => {
			let canvas = this.refs.canvas;
			processImage(img, canvas, blur || 10);
		};
	}

	loadBigImage(src, alt) {
		let img = new Image();
		img.src = src;
		img.onload = () => {
			this.setState({ loaded: true });
			this.refs.canvas.parentNode.style.height = 'auto';
		};
	}

	render() {
		const {
			src,
			alt,
			className,
			text,
			overlay,
			overlayText,
			overlayTitle,
			visible
		} = this.props;

		const { loaded } = this.state;

		if (visible === undefined || visible === true) {
			this.loadBigImage(src, alt);
		}

		return (
			<div className={classnames('image-blur--wrapper', className)}>
				<figure className="image-blur--wrapper-image">
					<div>
						<img
							src={loaded ? src : ''}
							alt={alt}
							className={classnames('image-blur--image', loaded ? 'show' : '')}
						/>
						<canvas
							ref="canvas"
							className={classnames('image-blur--canvas', loaded ? 'hide' : '')}
						/>
					</div>
					{overlay
						? <div className="image-blur--wrapper-overlay">
								<h2>{overlayTitle}</h2>
								<p>{overlayText}</p>
							</div>
						: null}
				</figure>
				{text
					? <figcaption>
							<p>{text}</p>
						</figcaption>
					: null}
			</div>
		);
	}
}

export default ImageBlurWrapper;
