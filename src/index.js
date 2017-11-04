import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/home';
import Profile from './routes/profile';
import Contact from './routes/contact';
import NotFound from './routes/notfound';
import RouterWrapper from './routeWrapper';
import configureStore from './store/configureStore';
import './index.css';

const store = configureStore();
window.store = store;

// Does the user's browser support the HTML5 history API?
// If the user's browser doesn't support the HTML5 history API then we
// will force full page refreshes on each page change.
const supportsHistory = 'pushState' in window.history;

render(
  <Provider store={store}>
    <BrowserRouter forceRefresh={!supportsHistory}>
      <div>
        <RouterWrapper>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/contact" component={Contact} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </RouterWrapper>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
