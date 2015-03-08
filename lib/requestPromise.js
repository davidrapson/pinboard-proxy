var https = require('https');
var Promise = require('es6-promise').Promise;

module.exports = function(options) {
    return new Promise(function(resolve, reject) {
        var request = https.request(options, function(response) {
            var result = '';
            response.on('data', function(chunk) {
                result += chunk;
            });
            response.on('end', function () {
                resolve(result)
            });
        });
        request.on('error', function(err) {
            reject(err);
        });
        request.end();
    });
};