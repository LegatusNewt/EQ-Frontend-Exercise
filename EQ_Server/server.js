const express = require('express');
const ws = require('ws');
const app = express();
const routes = require('./routes');
const url = require('url');
const path = __dirname + '/views';
const port = process.env.PORT || 3000;

const wsServer = new ws.Server({ noServer: true });

app.use('/', routes)
app.use(express.static(path))

const server = app.listen(port, () => console.log(`HTTPS running on port ${port}`));

server.on('upgrade', (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, socket => {
    wsServer.emit('connection', socket, request);
  });
});

wsServer.on('connection', (ws, req) => {
    console.log('Client connection established');
    args = url.parse(req.url, true)
    if(args.query.start && !isNaN(args.query.start)) {
        ws.x = parseFloat(args.query.start) // float in case a decimal is passed as a start point which would still work
    } else{
      ws.x = 0
    }
    ws.on('close', () => console.log("Goodbye Client"));
})

// Once a client is connected it will start receiving data based on their X value (increments with every interval step)
setInterval(() => {
    wsServer.clients.forEach((client) => {
        data = {
          x: client.x,
          y: generateData(client.x)
        }
        step = 1
        client.send(JSON.stringify(data))
        client.x += step
        console.log(`Data Sent: ${JSON.stringify(data)}`)
    })
}, 1000)

function generateData(x) {
  return Math.sin(x)
}