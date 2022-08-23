<script>
export default {
  name: "HomeView",
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    showGraph() {
      return this.$store.state.showGraph;
    },
    showTable() {
      return this.$store.state.showTable;
    },
  },
  methods: {
    toggleGraph() {
      this.$store.commit("toggleGraph");
    },
    toggleTable() {
      this.$store.commit("toggleTable");
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
};
</script>

<template>
  <div class="button-group">
    <Button @click="toggleTable()">Toggle Table</Button>
    <Button @click="toggleGraph()">Toggle Graph</Button>
  </div>
  <div class="tables">
    <div>
      <SinTable v-show="showTable" class="table-item" />
    </div>
    <pvDivider
      v-show="showTable && showGraph && this.window.width > 830"
      class="table-divder"
      layout="vertical"
    />
    <pvDivider
      v-show="showTable && showGraph && this.window.width < 830"
      class="table-divder"
      layout="horizontal"
    />
    <div>
      <SinGraph v-show="showGraph" class="table-item" />
    </div>
  </div>
</template>
