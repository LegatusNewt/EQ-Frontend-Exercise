<template>
  <pvDataTable
    ref="tableRef"
    :value="tableData"
    :virtual-scroller="true"
    :scrollable="true"
    scrollHeight="40vh"
  >
    <pvColumn field="x" header="X" />
    <pvColumn field="y" header="Y" />
  </pvDataTable>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TestTable",
  computed: mapState({
    tableData: (state) => state.data,
    newData: (state) => state.newData,
  }),
};
</script>
