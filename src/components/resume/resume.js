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
            <div className="resume-row">
                <div className="resume-left">
                    <h2>Starfsferill</h2>
                    <p>Ferill minn bla bla bla</p>
                </div>
                <div className="resume-right">
                    <p>Vefforritun hjá Advania síðastliðin 2 ár.Þar hef ég sinnt störfum vefforritara og hef komið aðgerð, hönnun og þróun margra vefsíðna, kerfa og verkefna.Ég hef reynslu bæði í fram-og bakendaforritun.Einnig hef ég reynslu af verktakavinnuhjá ýmsum fyrirtækjum og má þar nefna Símann,Íslandsbanka og Borgun.Kunnáttamínog helstu verkefni má sjá nánar í kaflanumtölvukunnátta</p>
                </div>
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