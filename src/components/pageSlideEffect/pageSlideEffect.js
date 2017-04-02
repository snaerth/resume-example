import React, {Component, PropTypes} from 'react';
import './pageSlideEffect.css';

class PageSlideEffect extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired
    };

    render() {
        const {type} = this.props;
        return (
            <div className={`revealer revealer--animate anim--effect-${type} revealer--${type}`}>
                <div className="layer"/>
                <div className="layer"/>
            </div>
        );
    }
}

export default PageSlideEffect;