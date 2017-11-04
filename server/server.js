const express = require('express');
const path = require('path');
const errorHandlers = require('./middleware/errorHandlers');
const app = express();

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Error Handler middlewares.
app.use(...errorHandlers);

app.listen(9000);
