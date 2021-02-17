<template>
  <div class="bottom">
    <Box title="旅游方式">
      <Pie :series="pieData" ref="AA" :config="pieConfig"></Pie>
    </Box>
    <Box title="旅游线路">
      <Columnar2D ref="BB" :options="Columnar2D"></Columnar2D>
    </Box>
    <Box title="消费内容">
      <Pie :series="pieData2" ref="CC" :config="pieConfig2"></Pie>
    </Box>
    <Box title="客源地">
      <Columnar90 ref="DD" :options="Columnar2D"></Columnar90>
    </Box>
  </div>
</template>

<script>
//柱状图  x y轴调换
import Columnar90 from "@/components/echart/columnar90";
//基础柱状图
import Columnar2D from "@/components/echart/columnar2D";
//圆环
import Pie from "@/components/echart/pie/pie.vue";
import { resizeChartFunction } from "@/components/mixin/resizeChart";
//
import Box from "../../cnmponents/box/box";
export default {
  mixins: [resizeChartFunction],
  props: {
    bottomData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  components: { Box, Pie, Columnar2D, Columnar90 },
  data() {
    return {
      loading: true,
      pieConfig: {
        titleColor: "#fff"
      },
      pieConfig2: {}
    };
  },
  computed: {
    pieData() {
      let series = [];
      series.push({
        name: "旅游方式",
        type: "pie",
        radius: "50%",
        label: { position: "outside", color: "#fff" }, //标签放在 里面还是外面
        data: this.bottomData.pie.map(item => {
          (item.name = item.age), (item.value = item.num);
          return item;
        })
      });
      return series;
    },
    pieData2() {
      let series = JSON.parse(JSON.stringify(this.pieData));
      series[0].radius = ["40%", "60%"];
      return series;
    },
    Columnar2D() {
      let columnar = {
        xData: this.bottomData.columnar.xData,
        XYColor: "#fff"
      };
      columnar.series = [];
      let color = ["#1C68FF", "red"];
      let key = Object.keys(this.bottomData.columnar.data[0]);
      key.forEach((item, index) => {
        columnar.series.push({
          type: "bar",
          color: color[index],
          name: item,
          data: this.bottomData.columnar.data.map(ele => {
            return ele[item];
          })
        });
      });
      return columnar;
    }
  },
  watch: {},
  methods: {
    //窗口大小改变，改变echart 再次调用echart里面的size方法
    resize() {
      this.resizeChartFun(["AA", "BB", "CC", "DD"], this);
    }
  },
  created() {},
  mounted() {
    if (JSON.stringify(this.bottomData) !== "{}") {
      this.loading = false;
    }
    window.addEventListener("resize", this.resize);
  },
  destroyed() {
    window.removeEventListener("resize", this.resize);
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/scenicAreaManagement/_varlable.scss";
.bottom {
  width: 100%;
  height: 100%;
  display: flex;
  background: $content_bg;
}
</style>
