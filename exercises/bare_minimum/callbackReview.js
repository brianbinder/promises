/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  fs.readFile(filePath, 'utf8', function(error, data) {
    if (error) {
      cb(error, data);
    } else {
      var firstLine = data.split('\n')[0];
      cb(error, firstLine);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {
  request(url, function(err, response, body) {
    if (err) {
      cb(err, response, body);
    } else {
      cb(err, response.statusCode, body);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
