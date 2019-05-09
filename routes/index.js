module.exports = function routeIndex(req, res) {
  res.render('index', {
  // Template data
    title: 'Express'
  });
};
