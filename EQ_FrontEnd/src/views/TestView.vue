<template>
  <body>
    <div class="container">
      <div class="jumbotron">
        <div>
          <h2>Websocket Message Below</h2>
          <p class="msg">{{JSON.stringify(newData)}}</p>
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
  computed: {
    newData() {
      return this.$store.state.newData
    }
  },
}

</script>
