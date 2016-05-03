'use strict';
var express = require('express'),
    mongo = require('mongodb').MongoClient;

var app = express();

mongo.connect('mongodb://anthonygallina1-data_driven_api-3081529', function (err, db) {

    if (err) {
        throw new Error('Database failed to connect!');
    } else {
        console.log('MongoDB successfully connected on port 27017.');
    }

    app.use(express.static('public'));


    app.listen(8080, function () {
        console.log('Listening on port 8080...');
    });

});
