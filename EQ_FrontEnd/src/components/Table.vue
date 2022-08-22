<template>
    <DataTable ref="tableRef" :value="tableData" :virtual-scroller="true" :scrollable="true" scrollHeight="50vh">
        <Column field="x" header="X"/>
        <Column field="y" header="Y"/>
    </DataTable>
</template>

<script>
    import { computed, ref } from "vue";
    import { mapState } from "vuex";

    export default {
        name: 'TestTable',
        setup() {
            const tableRef = ref();
        },
        computed:
            mapState({
                tableData: state => state.data,
                newData: state => state.newData,
            }),
        watch: {
            newData(newValue, old) {
            },
        }
    }
</script>

<style>

</style>