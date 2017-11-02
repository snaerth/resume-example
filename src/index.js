import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import Home from './routes/home';
import Profile from './routes/profile';
import Contact from './routes/contact';
import RouterWrapper from './routeWrapper';
import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <div>
        <RouterWrapper>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/contact" component={Contact} />
        </RouterWrapper>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
