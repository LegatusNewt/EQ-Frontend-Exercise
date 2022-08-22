export default function createWebSocket (store, start) {
        const ws = new WebSocket(`ws://localhost:3000/connect?start=${start}`);
        ws.onopen = function () {
            //Connect to web socket server
            ws.send("Hello Server");
            alert("Hello sent to server");
        };

        ws.onmessage = function (event) {
            let msg = JSON.parse(event.data);
            store.dispatch("addData", msg);
        };

        ws.onclose = function () {
            //websocket connection closed
            alert("Connection closed");
        };
        return ws
    }