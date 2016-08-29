var express = require('express');
var app = express();
var staticFilesOptions = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    //index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
    }
}
var path = require('path');
console.log(path.resolve(__dirname, '../../client/dist'));
var v1Router = require('./routers/v1/');
app.use(express.static(path.resolve(__dirname, '../../client/dist'), staticFilesOptions));

app.use('/v1/', v1Router);

app.get('/ping', function (req, res) {
    res.end('pong');
});
app.set('views', './views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

module.exports = app;