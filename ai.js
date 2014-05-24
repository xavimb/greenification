var TipsEnum = {
	LIGHTS_OFF : {'id': 1, 'name': 'Good morning! You can turn off the lights.'}
};

exports.getTips = function (current_weather, weather_forecast, res) {
	var currentDate = new Date();
	var sunriseDate = new Date(current_weather.sys.sunrise);
	var sunsetDate = new Date(current_weather.sys.sunset);
	var tips = [];

	// TODO: check first in the database
	if(currentDate > sunrise && currentDate < sunset) {
		tips.push(TipsEnum.LIGHTS_OFF);
	}
	
	res.send(200);
}