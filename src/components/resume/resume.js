import React, { Component } from 'react';
import { TimelineLite } from 'gsap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../button';
import * as actionCreators from '../../common/actions';
import './resume.css';

class Resume extends Component {
    render() {
        return (
            <div className="container-inner">
                <a
                    href="mailto:snaerth@gmail.com"
                    title="Senda póst snaerth@gmail.com"
                    className="link-slideright">snaerth@gmail.com</a>
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