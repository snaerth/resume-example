import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../common/actions';
import Button from '../button';
import './contentSection.css';

class Right extends Component {
    clickHandler() {
        history.pushState({}, 'profile', null);
        this
            .props
            .actions
            .pageAnimationForward();
    }

    emailHandler(email) {
        window.location.href = 'mailto:' + email;
        return false;
    }

    render() {
        const {translations} = this.props;
        return (
            <div className="content-container">
                <div className="job-application--button-container">
                    <Button text={translations.resume.title} onClick={() => this.clickHandler()}/>
                    <Button text={translations.sendEmail} onClick={() => this.emailHandler(translations.email)}/>
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
  return { common: state.common, translations: state.common.translations };
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

export default connect(mapStateToProps, mapDispatchToProps)(Right);