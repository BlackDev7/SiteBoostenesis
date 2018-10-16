const _ = require('underscore');
const mdbClient = require('mongodb').MongoClient;

exports.hello = function routeHello(req, res) {
  mdbClient.connect('mongodb://localhost:27017', (err, client) => {
    const db = client.db('shop');
    const collection = db.collection('categories');

    collection.find().toArray((collErr, items) => {
      res.render('hello', {
        // Underscore.js lib
        _,

        // Template data
        title: 'Hello World!',
        items,
      });
      client.close();
    });
  });
};
