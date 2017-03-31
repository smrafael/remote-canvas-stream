var express = require('express');
var path = require('path');
var index = require('./routes/index');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);

module.exports = app;
