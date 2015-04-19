# Pinboard Proxy

A dumb proxy server for [Pinboard](https://pinboard.in/) to return public tagged items for a given account.

## Demo

You can see an example at [http://davidrapson-pinboard-proxy.herokuapp.com/?tag=professional-cannon]() where `?tag=` is any public tag available at [https://pinboard.in/u:davidrapson/]()

## Getting Started

Install dependencies
``` sh
npm install
```

You'll set an environment variable with your [auth token](https://pinboard.in/api#authentication):
``` sh
export PINBOARD_AUTH_TOKEN="MYAUTHTOKEN"
```

Start the server
``` sh
npm start
```

## Deploy to Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

You will still need to configure the `PINBOARD_AUTH_TOKEN` environment variable in with your Pinboard API key but Heroku kindly asks you to provide one during the setup process.
