<template>
  <div class="bottom">
    <div style="width:100%;height:100%;">
      <Box title="投诉类别">
        <div class="state_content">
          <div class="state_content_1">
            <Pie :series="pieList.series" :config="pieList.config"></Pie>
          </div>
          <div class="state_content_2">
            <ProgressBar :options="progressBarList"></ProgressBar>
          </div>
        </div>
      </Box>
    </div>
    <div>
      <Box title="投诉类别">
        <DataGrid
          v-if="dataGrid.dataGridType"
          :options="dataGrid.options"
          :list="dataGrid.list"
          :columns="dataGrid.columns"
          :operates="dataGrid.operates"
          :pagination="dataGrid.pagination"
        ></DataGrid>
      </Box>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/echart/progressBar/progressBar";
import Box from "../box/box";
import Pie from "@/components/echart/pie/pie";
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
    Pie,
    DataGrid,
    ProgressBar
  },
  data() {
    return {
      progressBarList: {
        color: [],
        xData: [],
        yData: []
      },
      pieList: {
        series: [],
        config: {
          color: []
        }
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    //表格数据
    DataGridInit() {
      let keys = Object.keys(this.bottomData.biaoge.list[0]);
      this.bottomData.biaoge.columns.forEach((element, index) => {
        this.dataGrid.columns.push({
          align: "center",
          hidden: false,
          label: element,
          prop: keys[index]
        });
      });
      this.dataGrid.list = this.bottomData.biaoge.list;
      this.dataGrid.pagination.total = this.dataGrid.list.length;
      this.dataGrid.dataGridType = true;
    },
    //饼图数据
    pieDataInit() {
      this.pieList.config.color = this.bottomData.color;
      this.pieList.series.push({
        type: "pie",
        label: {
          position: "inside",
          color: "#fff",
          formatter: "{b} \n ({d}%)",
          textStyle: {
            color: "#fff",
            fontWeight: "100",
            fontSize: 12
          }
        },
        data: this.bottomData.pie.map(item => {
          return {
            name: item.name,
            value: item.num
          };
        })
      });
    },
    progressBarData() {
      this.progressBarList.color.push(this.bottomData.color);
      let nums = 0;
      this.bottomData.pie.forEach(item => {
        nums += item.num;
      });
      this.bottomData.pie.forEach(ele => {
        this.progressBarList.xData.push(
          Math.floor((ele.num / nums) * 100 * 100) / 100
        );
        this.progressBarList.yData.push(ele.name);
      });
    }
  },
  created() {
    this.pieDataInit();
    this.DataGridInit();
    this.progressBarData();
  },
  mounted() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
.bottom {
  width: 100%;
  height: 100%;
  display: flex;
  > div:nth-of-type(1) {
    flex: 2;
  }
  > div:nth-of-type(2) {
    flex: 3;
  }
  .state_content {
    display: flex;
    > div:nth-of-type(1) {
      height: 100%;
      width: 50%;
    }
    > div:nth-of-type(2) {
      height: 100%;
      width: 50%;
    }
  }
}
</style>
