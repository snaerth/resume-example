import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import configureStore from './store/configureStore';
import {syncHistoryWithStore} from 'react-router-redux';
import {createBrowserHistory} from 'history';
import Home from './routes/home';
import Profile from './routes/profile';
import RouterWrapper from './routeWrapper';
import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <RouterWrapper>
          <Route exact path="/" component={Home}/>
          <Route path="/profile" component={Profile} />
        </RouterWrapper>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
