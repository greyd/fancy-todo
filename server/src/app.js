var express = require('express');
var app = express();

var v1Router = require('./routers/v1/');

app.use('/v1/', v1Router);

app.get('/ping', function (req, res) {
    res.end('pong');
});

module.exports = app;