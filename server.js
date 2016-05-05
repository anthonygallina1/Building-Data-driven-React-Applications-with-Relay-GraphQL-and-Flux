'use strict';
require('dotenv').config();

   var express = require('express'),
    mongo = require('mongodb').MongoClient;
   var app = express();

mongo.connect(process.env['MONGO_URI'], function (err, db) {

    if (err) {
        throw new Error('Database failed to connect!');
    } else {
        console.log('MongoDB successfully connected on port 27017.');
    }

    app.use(express.static('public'));
    



    // Handle route /json
    app.get('/json', function (req, res, next) {
         db.collection('links').find().toArray(function(err, links) {
          if (err) {
            next(err);
          } else {
            console.log(links);
            
            res.json(links);
          }
        });
    });

    app.listen(process.env.PORT, function () {
        console.log('Listening on port 8080...');
    });

});
 
