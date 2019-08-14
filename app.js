/* eslint-disable global-require */
// Module dependencies.
const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const errorhandler = require('errorhandler');
const passport = require('passport');
const flash = require('connect-flash');
const mongoose = require('mongoose');
const config = require('./config');
mongoose.connect(config.mongoOptions.mongoUrl, config.mongoOptions.options);

require('./config/passport')(passport);

const routes = {
    index: require('./routes/index'),
    login: require('./routes/login'),
    signup: require('./routes/signup'),
};

const app = express();

// All environments
app.set('port', 2000);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(favicon(path.join(__dirname, 'public/images', '1.jpg')))
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cookieParser('61d333a8-6325-4506-96e7-a180035cc26f'));
app.use(session({
    secret: 'Boosting genesis',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(express.static(path.join(__dirname, 'public')));
app.use(errorhandler());

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}

app.get('/', isLoggedIn, routes.index);
app.get('/login', routes.login);
app.get('/signup', routes.signup);
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
}));

// Run server
http.createServer(app).listen(app.get('port'), () => {
    // eslint-disable-next-line no-console
    console.log(`Express server listening on port ${app.get('port')}`);
});
