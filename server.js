import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import routes from './src';

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

/**
 * React application route, supports server side rendering.
 */
app.get('/*', function(req, res) {
  // Create a context for <StaticRouter>, which will allow us to
  // query for the results of the render.
  const reactRouterContext = {};

  // Compile an initial state
  const preloadedState = {};

  // Create a new Redux store instance
  const store = configureStore(preloadedState);

  // Declare our React application.
  const app = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={reactRouterContext}>
        {routes}
      </StaticRouter>
    </Provider>
  );
  const appString = renderToString(app);
  // Load contents of index.html
  fs.readFile(
    path.join(__dirname, 'build', 'index.html'),
    'utf8',
    (err, data) => {
      if (err) throw err;

      // Inserts the rendered React HTML into our main div
      const document = data.replace(
        /<main id="root"><\/main>/,
        `<main id="root">${app}</main>`
      );

      // Sends the response back to the client
      res.status(200).send();
    }
  );
});

app.listen(9000);
