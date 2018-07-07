const request = require('request');

request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
  headers: {
    'key': 'AIzaSyA4IoueWgxRuPVsUNo7sAPvxetpeUoiQSQ'
  },
  json: true
}, (error, response, body) => {
  console.log(body);
});
