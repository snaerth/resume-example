import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

/**
 * React application route, supports server side rendering.
 */
app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(9000);
