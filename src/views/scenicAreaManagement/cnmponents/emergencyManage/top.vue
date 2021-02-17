<template>
  <div class="top">
    <div>
      <Box title="景区事件统计">
        <div style="height:100%;width:100%;" ref="PyramidRef">
          <Pyramid
            v-if="PyramidType"
            :dataList="pyramidData.dataList"
            :color="pyramidData.color"
            :config="pyramidData.config"
          ></Pyramid>
        </div>
      </Box>
    </div>
    <div>
      <Box title="事件类型统计">
        <div
          v-loading="!dataType"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
        >
          <div class="center_l">
            <Pie
              v-if="dataType"
              ref="pieRef"
              :config="config"
              :series="pie"
            ></Pie>
          </div>
          <div class="center_r">
            <Columnar2D
              v-if="dataType"
              ref="columnarRef"
              :options="columnar2dData"
            ></Columnar2D>
          </div>
        </div>
      </Box>
    </div>
    <div>
      <Box title="事件级别统计">
        <div
          style="height:100%;"
          v-loading="!dataType"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
        >
          <Tendency
            v-if="dataType"
            ref="TendencyRef"
            :option="tendencyData"
          ></Tendency>
        </div>
      </Box>
    </div>
  </div>
</template>

<script>
import Pyramid from "@/components/echart/d3/pyramid";
import Box from "../../cnmponents/box/box";
import { emergencyManage } from "@/api/scenicAreaManagement/home";
import Pie from "@/components/echart/pie/pie";
import Columnar2D from "@/components/echart/columnar2D";
import Tendency from "@/components/echart/tendency/tendency";
import { resizeChartFunction } from "@/components/mixin/resizeChart";

export default {
  components: { Box, Pie, Columnar2D, Tendency, Pyramid },
  mixins: [resizeChartFunction],
  data() {
    return {
      PyramidType: true,
      pyramidData: {
        config: {
          id: "svg8",
          width: 447,
          height: 306
        },
        color: [
          "#6F00D2",
          "red",
          "#FF77FF",
          "#ffaad5",
          "#00E3E3",
          "#2828FF",
          "#6F00D2",
          "#6E90A2"
        ],
        dataList: [
          { name: "火灾事件1231aw", num: "40" },
          { name: "消防事件", num: "60" },
          // { name: "刑事案件", num: "10" },
          { name: "一般事件", num: "30" },
          // { name: "测试事件", num: "30" },
          { name: "A事件", num: "44" }
        ]
      },
      data: {},
      config: {
        legend: true,
        color: ["#20ffa0", "#F1AF5A", "#0000ff", "#0070ff", "red"]
      },
      dataType: false
    };
  },
  computed: {
    //趋势图
    tendencyData() {
      let tendency = {
        xData: this.data.columnar.xData,
        // axisLabel: "incline",
        series: []
      };
      let keys = Object.keys(this.data.columnar.data[0]);
      keys.forEach((ele, index) => {
        tendency.series.push({
          type: "line",
          areaStyle: {},
          emphasis: {
            focus: "series",
            blurScope: "global"
          },
          stack: "总量",
          name: this.name(ele),
          color: this.config.color[index],
          data: this.data.columnar.data.map(item => {
            return item[ele];
          })
        });
      });
      return tendency;
    },
    //柱状图
    columnar2dData() {
      let columnar2dData = {
        XYColor: "#fff",
        axisLabel: "incline",
        series: [],
        xData: this.data.pie.map(item => {
          return item["age"];
        })
      };
      let that = this;
      columnar2dData.series.push({
        itemStyle: {
          normal: {
            color: function(params) {
              return that.config.color[params.dataIndex];
            }
          }
        },
        type: "bar",
        stack: "A",
        data: this.data.pie.map(key => {
          return key["num"];
        })
      });
      return columnar2dData;
    },
    //饼图
    pie() {
      let series = [];
      series.push({
        type: "pie",
        radius: "50%",
        center: ["56%", "60%"],
        label: { position: "inside", color: "#fff" },
        data: this.data.pie.map(item => {
          return {
            name: item.age,
            value: item.num
          };
        })
      });
      return series;
    }
  },
  watch: {},
  methods: {
    name(name) {
      switch (name) {
        case "value1":
          name = "一级处置";
          break;
        case "value2":
          name = "二级处置";
          break;
        case "value3":
          name = "三级处置";
          break;
        case "value4":
          name = "四级处置";
          break;
      }
      return name;
    },
    resize() {
      this.PyramidType = false;
      this.$nextTick(() => {
        this.$set(
          this.pyramidData.config,
          "width",
          this.$refs.PyramidRef.offsetWidth
        );
        this.$set(
          this.pyramidData.config,
          "height",
          this.$refs.PyramidRef.offsetHeight
        );
        setTimeout(() => {
          this.PyramidType = true;
        }, 500);
      });
      this.resizeChartFun(["pieRef", "columnarRef", "TendencyRef"]);
    }
  },
  created() {
    emergencyManage().then(res => {
      this.data = res.data;
      this.dataType = true;
    });
  },
  mounted() {
    window.addEventListener("resize", this.resize);
    this.resize();
  },
  destroyed() {}
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/scenicAreaManagement/_varlable.scss";
.top {
  width: 100%;
  height: 100%;
  display: flex;
  background: $content_bg;
  > div {
    width: 100%;
    height: 100%;
    .center_l,
    .center_r {
      display: inline-block;
      width: 50%;
      height: 100%;
    }
  }
}
</style>
