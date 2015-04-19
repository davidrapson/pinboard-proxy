var express = require('express');
var queryString = require('query-string');
var apicache = require('apicache').options({ debug: true }).middleware;
var requestPromise = require('./lib/requestPromise');

var app = express();

var PINBOARD_AUTH_TOKEN = process.env.PINBOARD_AUTH_TOKEN;

app.set('port', (process.env.PORT || 8000));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/',
    apicache('60 minutes'),
    function (req, res) {
        requestPromise({
            hostname: 'api.pinboard.in',
            path: '/v1/posts/all?' + queryString.stringify({
                'auth_token': PINBOARD_AUTH_TOKEN,
                'format': 'json',
                'shared': 'yes',
                'tag': req.query.tag
            })
        }).then(function(data) {
            res.set('Content-Type', 'application/json');
            res.send(data);
        });
    });

app.listen(app.get('port'), function() {
    console.log("App is running at localhost:" + app.get('port'));
    if(!PINBOARD_AUTH_TOKEN) {
        console.warn("\nERROR: You need to define a PINBOARD_AUTH_TOKEN environment variable.\n");
    }
});
