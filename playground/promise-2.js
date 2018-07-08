const request = require('request');

const geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    const encodedAddress = encodeURIComponent(address);

    request({
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      headers: {
        'key': 'AIzaSyA4IoueWgxRuPVsUNo7sAPvxetpeUoiQSQ'
      },
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to google servers');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address');
      } else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });
};

geocodeAddress('37211').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
