module.exports = function routeRegister(req, res) {
  var firebase = req.firebase;

  var FIREBASE_AUTH = firebase.auth();
  FIREBASE_AUTH.createUserWithEmailAndPassword('testoro@mail.com', 'semki123123').catch(function (error) {
    console.log(error);
  });

  res.render('register', {
  // Template data
    title: 'Express'
  });
};
