<template>
    <el-table :data=data border>
        <el-table-column prop="x" label="X"/>
        <el-table-column prop="y" label="Y"/>
    </el-table>
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
    el-table {
        width: 50%;
    }

</style>