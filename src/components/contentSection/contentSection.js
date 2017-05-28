import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router-dom';
import * as actionCreators from '../../common/actions';
import Button from '../button';
import './contentSection.css';

class Right extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  clickHandler(e, type) {
    e.preventDefault();
    this.props.actions.revealAnimationForward();
    setTimeout(this.props.history.push, 1500, '/' + type);
  }

  render() {
    const { translations } = this.props;
    return (
      <div className="content-container">
        <div className="job-application--button-container">
          <Link to="/profile" onClick={e => this.clickHandler(e, 'profile')}>
            <Button text={translations.resume} />
          </Link>
          <Link to="/profile" onClick={e => this.clickHandler(e, 'contact')}>
            <Button
              className="hidden-mobile-480"
              text={translations.sendEmail}
            />
          </Link>
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
  return {
    common: state.common,
    translations: state.common.translations,
    routing: state.routing
  };
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Right));
