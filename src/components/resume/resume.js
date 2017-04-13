import React, { Component } from 'react';
import { TimelineLite } from 'gsap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../common/actions';
import './resume.css';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = { tl: new TimelineLite() };
    }

    componentDidMount() {
        const container = this.refs.container;
        const rows = container.children;
        const { tl } = this.state;

        for (let i = 0, len = rows.length; i < len; i++) {
            const cols = rows[i].children;

            for (let j = 0, len = cols.length; j < len; j++) {
                const delayBetween = 0.4 + ((i + 1) / 10) + ((j + i + 1) / 10);
                tl.to(cols[j], 1.5, { y: '0%', opacity: 1, ease: Power2.easeOut }, delayBetween); // eslint-disable-line
            }
        }

        tl.pause();
        setTimeout(() => {
            tl.play();
        }, 800);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.common.resumeBackAnimation) {
            this.state.tl.timeScale(3).reverse();
        }
    }

    render() {
        return (
            <div className="resume-container" ref="container">
                <div className="resume-row">
                    <div className="resume-left">
                        <h2>Starfsferill</h2>
                    </div>
                    <div className="resume-right">
                        <p>Vefforritun hjá Advania síðastliðin 2 ár.Þar hef ég sinnt störfum vefforritara og hef komið aðgerð, hönnun og þróun margra vefsíðna, kerfa og verkefna.Ég hef reynslu bæði í fram-og bakendaforritun.Einnig hef ég reynslu af verktakavinnuhjá ýmsum fyrirtækjum og má þar nefna Símann,Íslandsbanka og Borgun.Kunnáttamínog helstu verkefni má sjá nánar í kaflanumtölvukunnátta</p>
                    </div>
                </div>
                <div className="resume-row">
                    <div className="resume-left">
                        <h2>Starfsferill</h2>
                    </div>
                    <div className="resume-right">
                        <p>Vefforritun hjá Advania síðastliðin 2 ár.Þar hef ég sinnt störfum vefforritara og hef komið aðgerð, hönnun og þróun margra vefsíðna, kerfa og verkefna.Ég hef reynslu bæði í fram-og bakendaforritun.Einnig hef ég reynslu af verktakavinnuhjá ýmsum fyrirtækjum og má þar nefna Símann,Íslandsbanka og Borgun.Kunnáttamínog helstu verkefni má sjá nánar í kaflanumtölvukunnátta</p>
                    </div>
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