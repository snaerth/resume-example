import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { processImage } from "../../common/stackBlur";
import "./imageBlurWrapper.css";

/**
 * Image blur wrapper component
 * Loads thumbnail image in canvas and performes
 * blur algoritim to blur image. When bigger image has loaded
 * it hides canvas and shows bigger image
 */
class ImageBlurWrapper extends Component {
  constructor() {
    super();

    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    const { blur, thumbnail, src, id } = this.props;
    let img = new Image();
    img.src = thumbnail || "images/image_placeholder.png";
    img.onload = () => {
      let canvas = document.getElementById("canvas-blur-" + id);
      processImage(img, canvas, blur || 10);
    };

    let imgBig = new Image();
    imgBig.src = src;
    imgBig.onload = () => {
      this.setState({ loaded: true });
    };
  }

  render() {
    const { src, alt, id, className, text } = this.props;
    return (
      <div className={classnames("image-blur--wrapper", className)}>
        <div className="image-blur--wrapper-image">
          <img
            src={src}
            alt={alt}
            className={classnames(
              "image-blur--image",
              this.state.loaded ? "show" : ""
            )}
          />
          <canvas
            id={"canvas-blur-" + id}
            className={classnames(
              "image-blur--canvas",
              this.state.loaded ? "hide" : ""
            )}
          />
        </div>
        {text ? <p>{text}</p> : null}
      </div>
    );
  }
}

ImageBlurWrapper.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  txt: PropTypes.string,
  thumbnail: PropTypes.string.isRequired,
  blur: PropTypes.string,
  id: PropTypes.string.isRequired
};

export default ImageBlurWrapper;
