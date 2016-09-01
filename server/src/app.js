var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var SQLiteStore = require('connect-sqlite3')(session);
var cookieParser = require('cookie-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var expressValidator = require('express-validator')
var userModel = require('./models/user');

var app = express();
var staticFilesOptions = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false
};
app.use(express.static(path.resolve(__dirname, '../../client/dist'), staticFilesOptions));
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(expressValidator());
passport.use(new LocalStrategy({
        usernameField: 'login',
        passwordField: 'password',
    },
    function(username, password, done) {
        userModel
            .isValid(username, password)
            .then(user => done(null, user))
            .catch(err => done(err));
    }));
passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
    userModel.getById(id)
        .then(
            user => cb(null, user),
            err => cb(err)
        )
});

app.use(cookieParser());
app.use(session({
    store: new SQLiteStore({
        dir: './db'
    }),
    cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 60 * 60 * 1000 // 1 hour
    },
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());



// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res, next) =>
    res.redirect('/')
);
app.get('/login', (req, res) => {
    res.render('login');
});


app.use(function (req, res, next) {
    console.log(req.isAuthenticated());
    if (!req.isAuthenticated()) {
        if (req.get('Content-Type') === 'application/json') {
            return res.status(401).end();
        } else {
            res.redirect('/login');
        }
    } else {next();}
});

app.get('/', (req, res) => {
    res.render('index');
});


app.use('/v1/', require('./routers/v1/'));

app.get('/ping', function (req, res) {
    res.end('pong');
});

module.exports = app;