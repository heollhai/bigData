<!-- 2d  柱状图 x y 轴作用反过来用 amcharts
	option: {
	  xData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
	  title: "标题",
    axisLabel:""//incline x轴倾斜显示  //twoLine 分两行显示
	  series: [
	    {
        type: 'bar',      
	      color: "#1C68FF",
	      name: "删除",
	      data: ["100", "102", "114", "268", "68", "257", "400"],
	    },
	  ],
	  XYColor: "red",
	  titleColor:'#000'
	},
					作用			是否必须
	xData 	  		x轴显示数据			是			[]
	series[								是			[]
		color 		圆柱的颜色			否			string
		name 		圆柱名称				否(没有 标题右侧 不会显示出来)
		data 		圆柱显示的数据		是			[]
	]
	title     		标题				否			string
	XYColor  		x y 轴颜色			否			string
	width 	  		圆柱宽度				否			number    默认25
 -->
<template>
  <div class="columnar2D" ref="columnar2d" style=""></div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  components: {},
  data() {
    return {
      echar: null,
      option: {
        // echart  距离周边的距离
        grid: {
          left: "3%",
          right: "3%",
          top: "15%",
          bottom: "5%",
          containLabel: true
        },
        title: {
          text: "",
          textStyle: {},
          left: "10%"
        },
        // 鼠标放上效果
        tooltip: {
          trigger: "axis",
          textStyle: {
            align: "left"
          },
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: {
          type: "value",
          axisLine: {
            show: true, //不显示y轴
            lineStyle: {
              color: "#fff"
            }
          },
          axisTick: {
            show: false, //不显示刻度
            alignWithLabel: true
          },
          axisLabel: {
            textStyle: ""
          },

          data: []
        },
        yAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#ccc"
            }
          },
          axisTick: {
            // show: false, //不显示刻度
            alignWithLabel: true
          },
          splitLine: {
            // show: true, //false 隐藏 网格
            lineStyle: {
              //网格样式
              type: "dashed"
            }
          }
        },
        series: []
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    columnar2DInit() {
      let echarts = require("echarts");
      this.echar = echarts.init(this.$refs.columnar2d);
      this.echar.setOption(this.option);
    },
    optionData() {
      this.option.yAxis.data = this.options.xData;
      this.option.series = this.options.series;
      this.option.title.text = this.options.title;
      if (this.options.XYColor) {
        this.option.yAxis.axisLine.lineStyle.color = this.options.XYColor;
        this.option.xAxis.axisLine.lineStyle.color = this.options.XYColor;
        this.option.title.textStyle.color = this.options.XYColor;
      }
      //x轴显示方式
      switch (this.options.axisLabel) {
        case "twoLine":
          // x 轴分两行显示
          (this.option.xAxis.axisLabel.interval = 0),
            (this.option.xAxis.axisLabel.formatter = function(value, index) {
              if (index % 2 != 0) {
                return "\n\n" + value;
              } else {
                return value;
              }
            });
          break;
        case "incline":
          // x轴倾斜显示
          this.option.xAxis.axisLabel.rotate = 40;
          break;
      }
    },
    resizeChart() {
      this.echar ? this.echar.resize() : "";
    }
  },
  created() {
    this.optionData();
  },
  mounted() {
    this.columnar2DInit();
    window.addEventListener("resize", this.resizeChart);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeChart);
  }
};
</script>
<style lang="scss" scoped>
.columnar2D {
  width: 100%;
  height: 100%;
}
</style>
