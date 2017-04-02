import React, {Component, PropTypes} from 'react';
import {TimelineLite} from 'gsap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from '../button';
import * as actionCreators from '../../common/actions';
import './resume.css';

class Resume extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            tl: new TimelineLite()
        };
    }

    componentDidMount() {
        const {tl} = this.state;
        const {title} = this.refs;
        tl.set(title, {rotationX: -45})
        .to(title, 1.5, { y: '0%', opacity: 1, transformOrigin: '0 50%', rotationX: 0,ease: Power2.easeOut}, 0.8) // eslint-disable-line
        .play();
    }

    back() {
        const {tl} = this.state;
        tl.timeScale(3).reverse();
    }

    render() {
        return (
            <div className="resume-container">
                <div className="job-application--button-container button-right"><Button text="Forsíða" onClick={() => this.back()}/></div>
                <div className="container-inner">
                    <h1 className="name">
                        <span ref="title">ferilskrá</span>
                    </h1>
                </div>
            </div>
        );
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
    return {common: state.common};
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