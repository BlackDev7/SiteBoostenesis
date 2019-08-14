const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.render('index', {
    // Template data
    title: 'Express',
  });
});

module.exports = routes;
