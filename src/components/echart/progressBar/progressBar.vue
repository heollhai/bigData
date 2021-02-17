<!-- 
echart  进度条 (用柱状图写的)
options: {
  color: [
    //第一个是颜色   要有
    ["#F29E9E", "#5EA5DA", "#B7E589", "#9CCDFB", "#C4A7CE"], 
    // 这一个是对应上面颜色的渐变色可以没有, //
    ["#F29E9E", "#5EA5DA", "#B7E589", "#9CCDFB", "#C4A7CE"],
    
  ],
  xData: [10, 20, 30], //要有   进度条的值
  yData: ["name1", "name2", "name3"], //要有    进度条的名字
},
-->
<template>
  <div style="width:100%;height:100%; position: relative;">
    <div v-if="!xDataType" class="progressBar" ref="echartProgressBar"></div>
    <div v-if="xDataType" class="xDataClass">暂无数据</div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  components: {},
  data() {
    return {
      xDataType: false,
      echar: null,
      option: {
        backgroudColor: "#fff",
        tooltip: {
          show: true,
          formatter: "{b} {c}%"
        },
        xAxis: {
          axisTick: {
            show: false,
            color: "#fff"
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false,
            color: "#fff"
          },
          splitLine: {
            show: false,
            color: "#fff"
          }
        },
        grid: {
          left: "3%",
          right: "20%",
          top: "15%",
          bottom: "15%",
          containLabel: true
        },
        yAxis: {
          type: "category",
          data: [],
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          }
        },
        series: [
          {
            //进度条后面的背景
            name: " ",
            type: "bar",
            barWidth: 15,
            silent: true,
            itemStyle: {
              normal: {
                color: "#fff",
                barBorderRadius: [0, 5, 5, 0]
              }
            },
            barGap: "-100%",
            barCategoryGap: "50%",
            data: [100, 100, 100, 100, 100]
          }
        ]
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    seriesInit(xData, width, color, yData) {
      this.option.yAxis.data = yData;
      let series = this.option.series;
      series[0].barWidth = width ? width : 15;
      series.push({
        name: " ",
        type: "bar",
        barWidth: width ? width : 15,
        label: {
          normal: {
            position: "top",
            formatter: "{c}%"
          }
        },
        data: xData.map((item, index) => {
          let data = {
            value: xData[index],
            itemStyle: {
              normal: {
                barBorderRadius: [0, 10, 10, 0],
                color: {
                  type: "bar",
                  colorStops: [
                    {
                      offset: 0,
                      color: color[0][index] ? color[0][index] : "" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color:
                        color[1] !== undefined
                          ? color[1][index]
                          : color[0][index]
                          ? color[0][index]
                          : "" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                }
              }
            }
          };
          return data;
        })
      });
    },
    progressBarTnit() {
      if (!this.xDataType) {
        let echarts = require("echarts");
        this.echar = echarts.init(this.$refs.echartProgressBar);
        this.echar.setOption(this.option);
      }
    },
    resizeChart() {
      this.echar ? this.echar.resize() : "";
    }
  },
  created() {
    if (this.options !== undefined) {
      this.xDataType = true;
      if (this.options.xData === undefined) {
        this.option.series = [];
        return;
      }
      this.xDataType = false;
      this.seriesInit(
        this.options.xData,
        this.options.width,
        this.options.color,
        this.options.yData
      );
    }
  },
  mounted() {
    this.progressBarTnit();
    window.addEventListener("resize", this.resizeChart);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeChart);
  }
};
</script>
<style lang="scss" scoped>
.progressBar {
  width: 100%;
  height: 100%;
}
.xDataClass {
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0px;
  justify-content: center;
  align-items: center;
  color: #fff;
}
</style>
