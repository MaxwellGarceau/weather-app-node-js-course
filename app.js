const request = require('request');

request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
  headers: {
    'key': 'AIzaSyA4IoueWgxRuPVsUNo7sAPvxetpeUoiQSQ'
  },
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(response, undefined, 2));
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
