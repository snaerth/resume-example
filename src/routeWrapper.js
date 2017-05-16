import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from './common/actions';
import PageSlideEffect from './components/pageSlideEffect';

class RouterWrapper extends Component {
	componentWillMount() {
		this.props.actions.setLanguage('en');
		if (window.location.pathname !== '/') {
			this.props.actions.removePageLoading();
		}
	}

	render() {
		return (
			<div>
				{this.props.children}
				{this.props.common.pageRevealer
					? <PageSlideEffect type={this.props.common.pageRevealerType} />
					: null}
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

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(RouterWrapper)
);
