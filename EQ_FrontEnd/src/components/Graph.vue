<template>
    <LineChart :chartData="testData"/>
</template>

<script>
import { Chart, registerables } from 'chart.js'
import { computed, defineComponent, ref } from 'vue'
import { LineChart } from 'vue-chart-3'

Chart.register(...registerables)

export default defineComponent({
    name: 'LineGraph',
    components: { LineChart },
    setup () {
        const testData = {
            labels: [ 1, 2, 3, 4, 5 ],
            datasets: [
                {
                    label: 'Exponents',
                    data: [1, 2, 4, 9, 16, 25],
                    borderColor: 'rgb(50,192,192)',
                }
            ]
        };
        return { testData };
    },
});
</script>