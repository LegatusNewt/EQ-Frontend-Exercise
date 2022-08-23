# EQ_Server

EQ_Server is a Node.js Express web service which hosts an endpoint for serving the client application and hosts the WebSocket. The functionality is pretty simple. For each connected client to the WS server it will send a message. That message is dependent on the X value of the client. Each client can pass a starting X value to the ws server with a query string parameter.


## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn start
```