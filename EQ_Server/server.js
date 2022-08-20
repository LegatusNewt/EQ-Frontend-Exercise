const express = require('express');
const ws = require('ws');
const app = express();
const routes = require('./routes')


const wsServer = new ws.Server({ noServer: true });
const server = app.listen(3000);

app.use('/', routes)
server.on('upgrade', (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, socket => {
    wsServer.emit('connection', socket, request);
  });
});

wsServer.on('connection', (ws) => {
    console.log('Client connection established');
    ws.x = 0
    ws.on('close', () => console.log("Goodbye Client"));
})

// Once a client is connected it will start receiving data based on their X value (increments with every interval step)
setInterval(() => {
    wsServer.clients.forEach((client) => {
        data = {
          x: client.x,
          y: generateData(client.x)
        }
        client.send(JSON.stringify(data))
        client.x++
        console.log(`Data Sent: ${JSON.stringify(data)}`)
    })
}, 1000)

function generateData(x) {
  return Math.sin(x)
}