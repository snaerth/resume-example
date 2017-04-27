import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../common/actions';
import PageSlideEffect from '../components/pageSlideEffect';
import DelayWrapper from '../components/delay';
import Resume from '../components/resume';
import Page from '../components/page';
import FrontPage from '../components/frontpage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      animateOut: false,
    };
  }

  componentDidMount() {
    this.props.actions.removePageLoading();
  }

  render() {
    const type = this.props.common.pageRevealerType;

    return (
      <div>
        {this.props.children}
        {this.props.common.pageRevealer
          ? <PageSlideEffect type={type} />
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
  return {common: state.common, translations: state.common.translations};
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
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
