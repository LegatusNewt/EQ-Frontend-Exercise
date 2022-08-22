<script>
export default {
  name: 'Home',
  computed: {
    hideGraph() {
      return this.$store.state.showGraph;
    },
    hideTable() {
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
        <Table v-if="hideTable" class="table-item"/>
      </div>
      <Divider v-if="hideTable && hideGraph" class="table-divder" layout="vertical"/>
      <div>
        <Graph v-if="hideGraph" class="table-item"/>
      </div>
    </div>
</template>
