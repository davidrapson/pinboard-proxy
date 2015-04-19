var express = require('express');
var queryString = require('query-string');
var apicache = require('apicache').options({ debug: true }).middleware;
var requestPromise = require('./lib/requestPromise');

var app = express();

var AUTH_TOKEN = process.env.AUTH_TOKEN;

app.set('port', (process.env.PORT || 8000));

app.get('/',
    apicache('60 minutes'),
    function (req, res) {
        requestPromise({
            hostname: 'api.pinboard.in',
            path: '/v1/posts/all?' + queryString.stringify({
                'auth_token': AUTH_TOKEN,
                'format': 'json',
                'shared': 'yes',
                'tag': req.query.tag
            })
        }).then(function(data) {
            res.header('Access-Control-Allow-Origin', '*');
            res.set('Content-Type', 'application/json');
            res.send(data);
        });
    });

app.listen(app.get('port'), function() {
    console.log("App is running at localhost:" + app.get('port'));
});
