<!-- 
趋势图
option: {
  xData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
  title:{//可以没有
    text:"标题来看"
    },
    legend:{//可以没有
      right:"20%",
    },
  axisLabel: "", //incline x轴倾斜显示  //twoLine 分两行显示 可以没有
  series: [
    {
      type: "line",
      color: "#1C68FF",
      name: "删除",
      data: ["100", "102", "114", "268", "68", "257", "400"],
    },
  ],
  XYColor: "red",
  titleColor: "#000",
},
      作用			                  是否必须
xData 	  		x轴显示数据		        是			[]
series[							              	是			[]
  type                              是   
  color 		颜色			              否			string
  name 		名称				            否(没有 标题右侧 不会显示出来)
  data 		数据		是			[]
]
title     		标题				否			string
XYColor  		x y 轴颜色			否			string
titleColor  	标题颜色				否 (没有跟随  XYColor 的颜色)
 -->
<template>
  <div
    class="tendencyEchart"
    style="height:100%;width:100%;"
    ref="tendency"
  ></div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  components: {},
  data() {
    return {
      echart: null,
      tendency: {
        title: {
          text: "",
          textStyle: {},
          left: "10%",
        },
        // echart  距离周边的距离
        grid: {
          left: "3%",
          right: "3%",
          top: "15%",
          bottom: "5%",
          containLabel: true,
        },
        legend: {
          selectedMode: false, //禁用点击事件
          right: "10%",
          top: 10,
          textStyle: {
            // 图列内容样式
            color: "#FFF", // 字体颜色
          },
          tooltip: {
            // 图列提示框，默认不显示
            show: true,
            color: "red",
          },
        },
        // 鼠标放上效果
        tooltip: {
          trigger: "axis",
          textStyle: {
            align: "left",
          },
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            // type: "line", // 默认为直线，可选为：'line' | 'shadow'
            type: "cross", //这个鼠标放上后x轴可以跟着动
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLabel: {
            //              inside: true,
            textStyle: {
              color: "#fff",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#637eaf",
            },
          },
          data: [],
        },
        yAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: ["#475e8f"], //网格线虚线
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#637eaf",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
            },
          },
        },
        series: [],
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
    tendencyInit() {
      if (this.echart) {
        this.echart.setOption(this.tendency);
      } else {
        let echart = require("echarts");
        this.echart = echart.init(this.$refs.tendency);
        this.echart.setOption(this.tendency);
      }
    },
    resizeChart() {
      if (this.echart !== null) {
        this.$nextTick(() => {
          this.echart.resize();
        });
      }
    },
    tendencyData() {
      this.tendency.xAxis.data = this.option.xData;

      // 标题   左右侧颜色
      if (this.option.XYColor) {
        this.tendency.title.textStyle.color = this.option.XYColor;
        this.tendency.legend.textStyle.color = this.option.XYColor;
        //x，y轴颜色
        this.tendency.yAxis.axisLine.lineStyle.color = this.option.XYColor;
        this.tendency.yAxis.axisLabel.textStyle = this.option.XYColor;
        this.tendency.xAxis.axisLine.lineStyle.color = this.option.XYColor;
        this.tendency.xAxis.axisLabel.textStyle = this.option.XYColor;
      }
      if (this.option.titleColor !== undefined) {
        this.tendency.title.textStyle.color = this.option.titleColor;
        this.tendency.legend.textStyle.color = this.option.titleColor;
      }
      this.tendency.series = this.option.series;
      //标题
      this.option.title
        ? (this.tendency.title = Object.assign(
            this.tendency.title,
            this.option.title
          ))
        : "";
      //标签
      this.option.legend
        ? (this.tendency.legend = Object.assign(
            this.tendency.legend,
            this.option.legend
          ))
        : "";
      //x轴显示方式
      switch (this.option.axisLabel) {
        case "twoLine":
          // x 轴分两行显示
          (this.tendency.xAxis.axisLabel.interval = 0),
            (this.tendency.xAxis.axisLabel.formatter = function(value, index) {
              if (index % 2 != 0) {
                return "\n\n" + value;
              } else {
                return value;
              }
            });
          break;
        case "incline":
          // x轴倾斜显示
          this.tendency.xAxis.axisLabel.rotate = 40;
          break;
      }
    },
  },
  created() {
    this.tendencyData();
  },
  mounted() {
    this.tendencyInit();
    // 窗口大小改变，适配大小
    window.addEventListener("resize", this.resizeChart);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeChart);
  },
};
</script>
<style lang="scss" scoped></style>
