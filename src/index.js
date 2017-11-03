import React from 'react';
import { hydrate, render } from 'react-dom'; // eslint-disable-line
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import configureStore from './store/configureStore';
import Home from './routes/home';
import Profile from './routes/profile';
import Contact from './routes/contact';
import RouterWrapper from './routeWrapper';
import './index.css';

const store = configureStore();
window.store = store;

// Does the user's browser support the HTML5 history API?
// If the user's browser doesn't support the HTML5 history API then we
// will force full page refreshes on each page change.
const supportsHistory =
  window && window.history && 'pushState' in window.history ? true : false;

const routes = (
  <div>
    <RouterWrapper>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/contact" component={Contact} />
    </RouterWrapper>
  </div>
);

const app = (
  <Provider store={store}>
    <BrowserRouter forceRefresh={!supportsHistory}>{routes}</BrowserRouter>
  </Provider>
);

const root = document.getElementById('root');

if (process.env.NODE_ENV === 'development') {
  render(app, root);
} else {
  hydrate(app, root);
}

const renderApp = newRoot => {
  if (process.env.NODE_ENV === 'development') {
    render(app, newRoot);
  } else {
    hydrate(app, newRoot);
  }
};

renderApp(root);

export default routes;
