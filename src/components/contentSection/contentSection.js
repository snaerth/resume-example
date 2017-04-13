import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../common/actions';
import Button from '../button';
import './contentSection.css';

class Right extends Component {
    clickHandler() {
        history.pushState({}, 'profile', 'profile');
        this.props.actions.pageAnimationForward();
    }

    render() {
        return (
            <div className="content-container">
                <div className="job-application--button-container">
                    <Button text="Ferilskrá" onClick={() => this.clickHandler()}/>
                </div>
            </div>
        );
    }
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

export default connect(null, mapDispatchToProps)(Right);