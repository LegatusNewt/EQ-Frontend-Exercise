<template>
    <el-table :data="points" border>
        <el-table-column prop="x" label="X"/>
        <el-table-column prop="y" label="Y"/>
    </el-table>
</template>

<script>
    export default {
        name: 'TestTable',
        data: () => ({
                points: [
                    { x: 1, y: 1 },
                    { x: 2, y: 4 },
                    { x: 3, y: 9 },
                    { x: 4, y: 16 },
                    { x: 5, y: 25 },
                ] 
            }
        )
    }
</script>

<style>
    el-table {
        width: 50%;
    }

</style>