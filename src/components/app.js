import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../common/actions';
import PageSlideEffect from './pageSlideEffect';
import DelayWrapper from './delay';
import Resume from './resume';
import Page from './page';
import FrontPage from './frontpage';
import ConnectWrapper from './connectWrapper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      animateOut: false
    };
  }

  componentDidMount() {
    this.props.actions.setLanguage('en');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.translations && this.state.loading) {
      this.setState({loading: false});
      this.removePageLoading();
    }

    if (nextProps.common.pageRevealer) {
      this.timer = setTimeout(() => {
        this.setState({animateOut: !this.state.animateOut});
      }, 1000);
    }
  }

  addPageLoading() {
    document.body.classList.add('loading');
  }

  removePageLoading() {
    const minTime = 1000;
    const now = new Date();
    const next = new Date();
    const timeDiff = next.getTime() - now.getTime();
    if (timeDiff < minTime) {
      const delay = minTime - timeDiff;
      setTimeout(() => {
        document.body.classList.remove('loading');
      }, delay);
    } else {
      document.body.classList.remove('loading');
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
        {!this.state.animateOut ? <FrontPage />: null}
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

export default ConnectWrapper(
  connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(App),
);
