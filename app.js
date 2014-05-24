var express = require('express');
var app = express();

var model = require('./models');
var AI = require('./ai');
var request = require('superagent');

app.get('/:user', function (req, res) {
	//get the city from the database
	var city = 'Helsinki';
	var current_weather, forecast, tips;
	request
		.get('http://api.openweathermap.org/data/2.5/weather?q=' + city)
		.end(function (weather_response) {
			current_weather = weather_response.body;
			request
				.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city)
				.end(function (forecast_response) {
					forecast = forecast_response.body;
					tips = AI.getTips(current_weather, forecast, res);
				});
		});
})


app.listen(3000);