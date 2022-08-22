<template>
  <LineChart ref="lineRef" :chartData="data" :options="options" />
</template>

<script>
import { Chart, registerables } from "chart.js";
import { computed, defineComponent, ref } from "vue";
import zoomPlugin from "chartjs-plugin-zoom";
import { LineChart } from "vue-chart-3";

Chart.register(zoomPlugin, ...registerables);

export default {
  name: "LineGraph",
  components: { LineChart },
  data() {
    return {
      options: {
        scales: {
          x: {
            min: 0,
            max: 10,
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
      },
    };
  },
  computed: {
    data() {
      let points = this.$store.state.data;
      return {
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
    },
  },
};
</script>
