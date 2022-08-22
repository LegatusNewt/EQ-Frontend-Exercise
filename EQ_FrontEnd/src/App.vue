<script>
export default {
  name: 'App',
  mounted() {
    this.connect();
  },  
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
      <div class="wrapper">
        <ToolBar visible=True>
          <template #start>
            <RouterLink class="tb-item" to="/">Home</RouterLink>
            <RouterLink class="tb-item" to="/test">Test</RouterLink>
          </template>
          <template #end>
            <Button class="tb-item" @click="connect()">Connect</Button>
            <Button class="tb-item" @click="disconnect()">Disconnect</Button>
          </template>
        </ToolBar>
          
      </div>
    </header>
  <RouterView/>
</template>