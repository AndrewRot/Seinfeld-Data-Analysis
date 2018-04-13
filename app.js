const express = require('express');
const fs   = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const port = 8080;

const app = express();

const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(allowCrossDomain);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Serve static assets
app.use(express.static(path.resolve(__dirname, 'public/')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(process.env.PORT || port);
console.log('listening on ' + (process.env.PORT || port))

module.exports = app;
