import React, {Component, PropTypes} from 'react';
import './pageSlideEffect.css';

class PageSlideEffect extends Component {
    static propTypes = {
        effectNum: PropTypes.number
    };

    renderLayer() {
        const effect = this.props.effectNum || 1;
        let layers = [];
        for (let i = 0, len = effect; i < len; i++) {
            layers.push(<div className="layer" key={i}/>);
        }
        return layers;
    }

    render() {
        return (
            <div className={`revealer revealer--animate anim--effect-${this.props.effectNum || 1}`}>{this.renderLayer()}</div>
        );
    }
}

export default PageSlideEffect;