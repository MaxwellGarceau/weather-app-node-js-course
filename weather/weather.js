const request = require('request');

const getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/4cbb1042df14b8de50611b6e0cf296e1/${latitude},${longitude}`,
    json: true,
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather.');
    }
  });
};

module.exports = {
  getWeather
}
