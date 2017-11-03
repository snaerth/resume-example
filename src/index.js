import React from 'react';
import { hydrate, render } from 'react-dom'; // eslint-disable-line
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import Routes from './routes';
import './index.css';

const store = configureStore();
window.store = store;

// Does the user's browser support the HTML5 history API?
// If the user's browser doesn't support the HTML5 history API then we
// will force full page refreshes on each page change.
const supportsHistory =
  window && window.history && 'pushState' in window.history ? true : false;

const app = (
  <Provider store={store}>
    <BrowserRouter forceRefresh={!supportsHistory}>
      <div>{Routes}</div>
    </BrowserRouter>
  </Provider>
);

const renderApp = newRoot => {
  if (process.env.NODE_ENV === 'development') {
    render(app, newRoot);
  } else {
    hydrate(app, newRoot);
  }
};

renderApp(document.getElementById('root'));
