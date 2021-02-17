<!-- 
  wordCloud  使用这个属性需要去下载  
  并且echart中有的版本不适配  
   版本不对可能会报错

-->
<template>
  <div class="antistop" ref="antistop"></div>
</template>

<script>
import "echarts-wordcloud/dist/echarts-wordcloud.js";
export default {
  props: {
    config: {
      type: Object,
      default: () => {
        return {};
      }
    },
    seriesData: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  components: {},
  data() {
    return {
      echart: null,
      option: {
        series: {
          type: "wordCloud",
          gridSize: 2, //间隙
          sizeRange: [12, 18], //字体大小
          rotationRange: [0, 190], //角度
          shape: "pentagon",
          // width: 1400,
          // height: 1000,
          drawOutOfBound: true,
          textStyle: {
            normal: {
              color: function() {
                return (
                  "rgb(" +
                  [
                    Math.round(Math.random() * 200),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                  ].join(",") +
                  ")"
                );
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: "#333"
            }
          },
          data: []
        }
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    resizeChart() {
      this.echart ? this.echart.resize() : "";
    },
    antistopData() {
      let series = this.option.series;
      series.gridSize = this.config.gridSize ? this.config.gridSize : 2;
      series.sizeRange = this.config.sizeRange
        ? this.config.sizeRange
        : [12, 18];
      series.rotationRange = this.config.rotationRange
        ? this.config.rotationRange
        : [0, 190];
      series.data = this.seriesData;
    },
    antistopInit() {
      window.addEventListener("resize", this.resizeChart);
      let echarts = require("echarts");
      this.echart = echarts.init(this.$refs.antistop);
      this.echart.setOption(this.option);
    }
  },
  created() {
    this.antistopData();
  },
  mounted() {
    this.antistopInit();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeChart);
  }
};
</script>
<style lang="scss" scoped>
.antistop {
  width: 100%;
  height: 100%;
}
</style>
