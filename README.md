# Pinboard Proxy

A dumb proxy server for [Pinboard](https://pinboard.in/) to return public tagged items for a given account.

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