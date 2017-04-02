import React, {Component, PropTypes} from 'react';
import {TimelineLite} from 'gsap';

class CoverPhoto extends Component {
    componentDidMount() {
        const image = this.refs.image;
        const tl = new TimelineLite();
        let initialWidth =  this.getWindowWidth();
        this.setImagePosition(initialWidth, tl, image);
    }

    getWindowWidth() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }

    setImagePosition(initialWidth, tl, image) {
        const finalWidth = this.getWindowWidth();
        let posX = 0;
        
        if (initialWidth < finalWidth) {
            posX = (finalWidth / initialWidth) * 100;
            tl.to(image, 0.1, {backgroundPositionX: posX  + '%',ease: Linear.easeNone}); // eslint-disable-line
        } else {
            posX = (finalWidth / initialWidth) * 100;
            tl.to(image, 0.1, {backgroundPositionX: posX / 2 + '%',ease: Linear.easeNone}); // eslint-disable-line
        }

        initialWidth = finalWidth;
    }

    render() {
        const {src, alt, onClick, className} = this.props;

        return (
            <div style={{ backgroundImage: `url(${src})`}}
                role="img"
                aria-label={alt}
                onClick={onClick}
                className={className}
                ref="image"/>
        );
    }
}

CoverPhoto.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default CoverPhoto;
