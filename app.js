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

const routes = {
  index: require('./routes/index')
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
  cookie: { secure: true },
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(errorhandler());

// App routes
app.get('/', routes.index.index);

// Run server
http.createServer(app).listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`Express server listening on port ${app.get('port')}`);
});
