<template>
  <div class="top">
    <div>
      <Box title="投诉来源">
        <Pie ref="A" :series="Pie.series" :config="Pie.config"></Pie>
      </Box>
    </div>
    <div>
      <Box title="投诉量">
        <Columnar ref="B" :option="columarData"></Columnar>
      </Box>
    </div>
  </div>
</template>

<script>
import Box from "../box/box";
import Pie from "@/components/echart/pie/pie";
import Columnar from "@/components/echart/columnar";
import { resizeChartFunction } from "@/components/mixin/resizeChart";
export default {
  mixins: [resizeChartFunction],
  props: {
    topData: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    Box,
    Pie,
    Columnar
  },
  data() {
    return {
      Pie: {
        config: {
          legend: true,
          title: "2020年投诉来源分析",
          color: [],
          titleColor: "#fff",
          legendLeft: "75%",
          legendTop: "32%",
          titleLeft: "5%"
        },
        series: []
      },
      columarData: {
        xData: [],
        title: "2020年投诉来源分析",
        width: 25,
        series: [],
        XYColor: "#FFF"
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    //圆形数据
    PieInit() {
      this.Pie.config.color = this.topData.color;
      this.Pie.series.push({
        type: "pie",
        center: ["40%", "50%"],
        radius: "60%",
        label: { position: "inside", color: "#fff" },
        data: this.topData.pie.map(item => {
          return {
            name: item.name,
            value: item.num
          };
        })
      });
    },
    //柱状图数据
    columnarList() {
      let that = this;
      this.topData.columnar.forEach(ele => {
        this.columarData.xData.push(ele.name);
      });
      this.columarData.series.push({
        color: function(params) {
          return that.topData.color[params.dataIndex];
        },
        data: this.topData.columnar.map(key => {
          return key["num"];
        })
      });
    },
    resize() {
      this.resizeChartFun(["A", "B"]);
    }
  },
  created() {
    this.PieInit();
    this.columnarList();
  },
  mounted() {
    window.addEventListener("resize", this.resize);
    console.log(this.topData);
  },
  destroyed() {
    window.removeEventListener("resize", this.resize);
  }
};
</script>
<style lang="scss" scoped>
.top {
  width: 100%;
  height: 100%;
  display: flex;
  > div:nth-of-type(1) {
    flex: 2;
  }
  > div:nth-of-type(2) {
    flex: 3;
  }
}
</style>
