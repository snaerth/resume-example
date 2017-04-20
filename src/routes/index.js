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

  componentWillReceiveProps(nextProps) {
    if (nextProps.translations && this.state.loading) {
      this.setState({loading: false});
      this.props.actions.removePageLoading();
    }

    if (nextProps.common.pageRevealer && !this.state.loading) {
      this.timer = setTimeout(() => {
        this.setState({animateOut: !this.state.animateOut});
      }, 1000);
    }
  }

  renderPage() {
    if (this.props.common.showPage) {
      return (
        <DelayWrapper delay={1000}>
          <Page title={this.props.translations.resume.title} delay={1000}>
            <Resume />
          </Page>
        </DelayWrapper>
      );
    }

    return null;
  }

  render() {
    if (this.state.loading) return null;
    const type = this.props.common.pageRevealerType;

    return (
      <div>
        {!this.state.animateOut ? <FrontPage /> : null}
        {this.renderPage()}
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
