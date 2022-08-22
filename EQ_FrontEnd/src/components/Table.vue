<template>
    <DataTable  :value="data" :scrollable="true" scrollHeight="50vh">
        <Column field="x" header="X"/>
        <Column field="y" header="Y"/>
    </DataTable>
</template>

<script>
    export default {
        name: 'TestTable',
        computed: {
            data() {
                let data = this.$store.state.data
                return data
            },
        }
    }
</script>

<style>

</style>