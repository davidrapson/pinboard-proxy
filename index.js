var express = require('express');
var apicache = require('apicache').options({ debug: true }).middleware;
var requestPromise = require('./lib/requestPromise');

var app = express();

app.set('port', (process.env.PORT || 8000));

app.get('/', function (req, res) {
    res.redirect('/liked.json');
});

app.get('/liked.json',
    apicache('60 seconds'),
    function (req, res) {
        requestPromise({
            hostname: 'api.pinboard.in',
            path: '/v1/posts/all?auth_token=davidrapson:CA3E51156087CF794305&format=json&tag=liked&shared=yes'
        }).then(function(data) {
            res.header('Access-Control-Allow-Origin', '*');
            res.set('Content-Type', 'application/json');
            // res.set('Cache-Control', 'public, max-age=' + ms('5s'));
            res.send(data);
        });
    });

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
