<template>
  <LineChart ref="lineRef" :chartData="chartData" :options="options" />
</template>

<script>
import { Chart, registerables } from "chart.js";
import { computed, defineComponent, ref } from "vue";
import zoomPlugin from "chartjs-plugin-zoom";
import { LineChart } from "vue-chart-3";
import { mapState, useStore } from "vuex";

Chart.register(zoomPlugin, ...registerables);
export default defineComponent({
  name: "LineGraph",
  components: { LineChart },
  setup() {
    const lineRef = ref();
    const store = useStore()
    let points = store.state.data;
    const chartData = {
        /*labels: points.map((point) => {
          return point.x;
        }),*/
        datasets: [
          {
            label: "Sin Wave",
            data: points.map((point) => {
              return { x: point.x, y: point.y }
            }),
            borderColor: "rgb(50,192,192)",
          },
        ],
      };
  },
  data() {
    const store = useStore()
    const options = {
        responsive: true,
        scales: {
          x: {
            min: 0,
            max: 20,
          },
          y: {
            min: -1,
            max: 1,
          },
        },
        plugins: {
          zoom: {
            pan: {
              enabled: true,
              mode: "x",
            },
            limits: {
              x: {
                min: 0,
              },
              y: {
                min: -1,
                max: 1,
              },
            },
          },
        },
      };
      let points = store.state.data;
      let chartData = {
        labels: points.map((point) => {
          return point.x;
        }),
        datasets: [
          {
            label: "Sin Wave",
            data: points.map((point) => {
              return point.y;
            }),
            borderColor: "rgb(50,192,192)",
          },
        ],
      };
      return {
        options: options,
        chartData: chartData,
      };
  },
  watch: {
    newData(newValue, old) {
      this.$data.chartData.datasets[0].data.push(newValue.y);
      this.$data.chartData.labels.push(newValue.x);
      
      // Chart.instances is an object, each re-render of the chart increments the key
      const myChart = Chart.instances[Object.keys(Chart.instances)[0]];
      
      let chk_len = myChart.data.datasets[0].data.length;
      if(chk_len > 10) {        
        myChart.zoomScale('x', {min: chk_len-20, max: chk_len }, 'default')
      }
      this.$refs.lineRef.update('quiet');
    },
  },
  computed:
    mapState([
      "newData",
      "hideGraph",
  ]),
});
</script>
