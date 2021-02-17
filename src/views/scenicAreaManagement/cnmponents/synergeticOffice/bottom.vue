<template>
  <div class="bottom">
    <div>
      <Box title="通讯录">
        <DataGrid
          v-if="dataType"
          :options="dataGrid.options"
          :list="dataGrid.list"
          :columns="dataGrid.columns"
          :operates="dataGrid.operates"
          :pagination="dataGrid.pagination"
        ></DataGrid>
      </Box>
    </div>
    <div>
      <Box title="设备、车辆">
        <DataGrid
          v-if="dataType"
          :options="DataGrid2.options"
          :list="DataGrid2.list"
          :columns="DataGrid2.columns"
          :operates="DataGrid2.operates"
          :pagination="DataGrid2.pagination"
        ></DataGrid>
      </Box>
    </div>
  </div>
</template>

<script>
import Box from "../../cnmponents/box/box";
import DataGrid from "@/components/DataGrid/DataGrid.vue";
import { DataGridInitData } from "@/components/DataGrid/dataGrid.js";
export default {
  mixins: [DataGridInitData],
  props: {
    bottomData: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    Box,
    DataGrid
  },
  data() {
    return {
      dataType: false,
      DataGrid2: {}
    };
  },
  computed: {},
  watch: {},
  methods: {
    //表格数据
    DataGridInit() {
      let columnsKeys = Object.keys(this.bottomData.biaoge.list[0]);
      console.log(columnsKeys);
      columnsKeys.forEach((ele, key) => {
        this.dataGrid.columns.push({
          align: "center",
          hidden: false,
          label: this.bottomData.biaoge.columns[key],
          prop: ele
        });
      });
      this.dataGrid.list = this.bottomData.biaoge.list;
      this.dataGrid.pagination.total = this.dataGrid.list.length;
      this.dataType = true;
    },
    DataGrid2Init() {
      let columns = [
        { name: "设备编号", props: "id" },
        { name: "设备分类", props: "type" },
        { name: "名称", props: "name" },
        { name: "使用时间", props: "date" },
        { name: "申请事由", props: "even" },
        { name: "发起时间", props: "start" },
        { name: "状态", props: "state" }
      ];
      this.DataGrid2 = JSON.parse(JSON.stringify(this.dataGrid));
      columns.forEach(ele => {
        this.DataGrid2.columns.push({
          align: "center",
          hidden: false,
          label: ele.name,
          prop: ele.props
        });
      });
    }
  },
  created() {
    this.DataGrid2Init();
    this.DataGridInit();
  },
  mounted() {},
  destroyed() {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/scenicAreaManagement/_varlable.scss";
.bottom {
  display: flex;
  height: 100%;
  background: $content_bg;
  > div {
    width: 100%;
    height: 100%;
  }
  > div:nth-of-type(1) {
    flex: 5;
  }
  > div:nth-of-type(2) {
    flex: 4;
  }
}
</style>
