<template>
  <body>
    <div class="container">
      <div class="jumbotron">
        <button v-on:click='webSocketTester()'>Run Websocket</button>
        <div>
          <h2>Websocket Message Below</h2>
          <p class="msg">None received</p>
        </div>
      </div>
    </div>
  </body>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script>
export default {
  methods: {
      webSocketTester() {
        if ("WebSocket" in window) {
          let ws = new WebSocket("ws://localhost:3000/connect");
          ws.onopen = function () {
            //Connect to web socket server
            ws.send("Hello Server");
            alert("Hello sent to server");
          };

          ws.onmessage = function (event) {
            let msg = event.data;
            document.querySelector(".msg").innerHTML = msg;
          };

          ws.onclose = function () {
            //websocket connection closed
            alert("Connection closed");
          };
      } else {
        // The browser doesn't support Websocket
        alert("Websocket not supported");
      }
    }
  }
}

</script>
