<script>
export default {
  name: 'Home',
  computed: {
    showGraph() {
      return this.$store.state.showGraph;
    },
    showTable() {
      return this.$store.state.showTable;
    }
  },
  methods: {
    toggleGraph(){
      this.$store.commit("toggleGraph")      
    },
    toggleTable() {
      this.$store.commit("toggleTable");
    }
  }
}
</script>

<template>
    <div class="button-group">
      <Button @click="toggleTable()">Toggle Table</Button>
      <Button @click="toggleGraph()">Toggle Graph</Button>
    </div>
    <div class="tables">
      <div>
        <Table v-show="showTable" class="table-item"/>
      </div>
      <Divider v-show="showTable && showGraph" class="table-divder" layout="vertical"/>
      <div>
        <Graph v-show="showGraph" class="table-item"/>
      </div>
    </div>
</template>
