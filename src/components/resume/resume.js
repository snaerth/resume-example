import React, { Component } from 'react';
import { TimelineLite } from 'gsap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../button';
import * as actionCreators from '../../common/actions';
import './resume.css';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tl: new TimelineLite(),
            waiting: true
        };
    }


    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                waiting: false
            });
            const { tl } = this.state;
            const { title, back } = this.refs;
            tl.set(title, { rotationX: -45 })
                .to(back, 1, { x: '0%', opacity: 1, ease: Power2.easeOut }, 0.2) // eslint-disable-line
                .to(title, 1.5, { y: '0%', opacity: 1, transformOrigin: '0 50%', rotationX: 0, ease: Power2.easeOut }, 0.8) // eslint-disable-line
                .play();
        }, this.props.delay);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    back() {
        const { tl } = this.state;
        tl.timeScale(3).reverse();
        setTimeout(() => {
            this.props.actions.pageRevealerStart('bottom');
        }, 200);

        setTimeout(() => {
            this.props.actions.pageAnimationBackward();
        }, this.props.delay);
    }

    render() {
        if (!this.state.waiting) {
            return (
                <div className="resume-container">
                    <div className="job-application--button-container button-right button-right--offset"
                        ref="back"><Button text="Back" onClick={() => this.back()} /></div>
                    <h1 className="name">
                        <span ref="title">ferilskrá</span>
                    </h1>
                    <div className="container-inner">
                        <a
                            href="mailto:snaerth@gmail.com"
                            title="Senda póst snaerth@gmail.com"
                            className="link-slideright">snaerth@gmail.com</a>
                    </div>
                </div>
            );
        }

        return null;
    }
}

/**
 * Maps state to components props
 *
 * @param {Object} state - Application state
 * @returns {Object}
 * @author Snær Seljan Þóroddsson
 */
function mapStateToProps(state) {
    return { common: state.common };
}

/**
 * Maps dispatch to components props
 *
 * @param {Object} dispatch - Redux dispatch medhod
 * @returns {Object}
 * @author Snær Seljan Þóroddsson
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Resume);