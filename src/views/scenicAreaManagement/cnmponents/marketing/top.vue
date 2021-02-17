<template>
  <div class="top">
    <Box title="游客男女比例">
      <Pie :series="pieData" ref="A" :config="pieConfig"></Pie>
    </Box>
    <Box title="游客年龄分布">
      <Columnar ref="B" :option="columnar"></Columnar>
    </Box>
    <Box title="产品预订渠道">
      <Columnar2D ref="C" :options="columnar2dData"></Columnar2D>
    </Box>
    <Box title="景区关键词">
      <Antistop
        ref="D"
        :config="antistopConfig"
        :seriesData="seriesData"
      ></Antistop>
    </Box>
  </div>
</template>

<script>
//关键词
import Antistop from "@/components/echart/antistop/antistop";
import Box from "../../cnmponents/box/box";
import Pie from "@/components/echart/pie/pie.vue";
import Columnar from "@/components/echart/columnar";
import Columnar2D from "@/components/echart/columnar2D";

import { resizeChartFunction } from "@/components/mixin/resizeChart";
export default {
  mixins: [resizeChartFunction],
  props: {
    topData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  components: {
    Box,
    Pie,
    Columnar,
    Columnar2D,
    Antistop
  },
  data() {
    return {
      pieConfig: {
        legend: true,
        title: "nihao",
        color: ["#ccc", "red"],
        titleColor: "#fff"
      },
      antistopConfig: {
        gridSize: 2, //间隙
        sizeRange: [12, 18], //字体大小
        rotationRange: [0, 190] //角度
      }
    };
  },
  computed: {
    //关键词
    seriesData() {
      return this.topData.antistop;
    },
    //饼图
    pieData() {
      let series = [];
      series.push({
        name: "男女比例",
        type: "pie",
        radius: "50%",
        label: { position: "inside" }, //标签放在 里面还是外面
        data: this.topData.pie.map(item => {
          (item.name = item.age), (item.value = item.num);
          return item;
        })
      });
      return series;
    },
    //3d柱状图
    columnar() {
      let color = ["#ccc", "red"];
      let key = Object.keys(this.topData.columnar.data[0]);
      let columnar = {
        xData: this.topData.columnar.xData,
        title: "标题",
        width: 15,
        XYColor: "#fff"
      };
      columnar.series = [];
      key.forEach((ele, index) => {
        columnar.series.push({
          color: color[index],
          data: this.topData.columnar.data.map(item => {
            return item[ele];
          })
        });
      });
      return columnar;
    },
    //2d柱状图
    columnar2dData() {
      let columnar2d = JSON.parse(JSON.stringify(this.columnar));
      columnar2d.axisLabel = "incline";
      columnar2d.series.map(item => {
        return (item.type = "bar");
      });
      return columnar2d;
    }
  },
  watch: {},
  methods: {
    resize() {
      this.resizeChartFun(["A", "B", "C", "D"], this);
    }
  },
  created() {},
  mounted() {
    window.addEventListener("resize", this.resize);
  },
  destroyed() {
    window.removeEventListener("resize", this.resize);
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/scenicAreaManagement/_varlable.scss";

.top {
  width: 100%;
  height: 100%;
  display: flex;
  background: $content_bg;
}
</style>
