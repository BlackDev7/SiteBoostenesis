const _ = require('underscore');

exports.hello = function routeHello(req, res) {
  res.render('hello', {
    // Underscore.js lib
    _,

    // Template data
    title: 'Hello World!',
    items,
  });
};
