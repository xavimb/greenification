var express = require('express');
var app = express();

var mongoose = require('mongoose');

var model = require('models');

mongoose.connect('mongodb://localhost/green');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {
	console.log("Database connected, yay!");
});

app.listen(3000);