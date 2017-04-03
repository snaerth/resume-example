import React, {Component, PropTypes} from 'react';

class CoverPhoto extends Component {
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
