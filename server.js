'strict';
var express = require('express');

var app= express();

app.use(express.static('public'));

//  app.get('/', (req, res) => res.send('Hello express'));


app.listen(8080);