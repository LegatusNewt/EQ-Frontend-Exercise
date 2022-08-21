<script>
import createWebSocketPlugin from "./plugins/socket";

export default {
  name: 'App',
  methods: {
    connect(){
      this.$store.dispatch("connect")      
    },
    disconnect() {
      this.$store.dispatch("disconnect");
    }
  }
}
</script>


<template>
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <button @click="connect()">Connect</button>
        <button @click="disconnect()">Disconnect</button>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/test">Test</RouterLink>
        </nav>
      </div>
    </header>

  <RouterView/>
</template>