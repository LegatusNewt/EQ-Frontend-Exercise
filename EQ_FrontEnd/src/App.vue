<script>
export default {
  name: "App",
  mounted() {
    this.connect();
  },
  computed: {
    connected() {
      return this.$store.state.connected;
    }
  },
  methods: {
    connect() {
      this.$store.dispatch("connect");
    },
    disconnect() {
      this.$store.dispatch("disconnect");
    },
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <pvToolBar visible="True">
        <template #start>
          <RouterLink class="tb-item" to="/">Home</RouterLink>
          <RouterLink class="tb-item" to="/test">Test</RouterLink>
        </template>
        <template #end>
          <Button class="tb-item" :disabled="connected" @click="connect()">Connect</Button>
          <Button class="tb-item" :disabled="!connected" @click="disconnect()">Disconnect</Button>
        </template>
      </pvToolBar>
    </div>
  </header>
  <RouterView />
</template>
