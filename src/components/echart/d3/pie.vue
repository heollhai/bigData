<!-- 
  propertyFields.fill  属性可以设置值，，跟随数据的值、
                                                                        是否必须
    id                                                                      是
    config: {
      distance:10,//外面线的距离
        innerRadius: 70, //里面空心半径                                      是(没有两个环形会错位)
        radius: 100, //半径                                                 是(没有两个环形会错位)
        angle: 70, //角度                                                   是(没有两个环形会错位)
        // depth: 5, //厚度                                                   否
        // TopfontSize: 12, //鼠标放上字体                                    否
        // fontSize: 12, //环外的字体                                         否
        // alignLabels: false, //环形外面的展示方法                            否
        // shadow: "#fff", //                                                否
        color: ["#0056e3", "#00cccc", "#007638", "#006785", "red"],          否
    },
    chartData: [                                                            是
        {
          name: "uania",
          value: 401.9,
        }]
 -->
<template>
  <div style="height:100%;width:100%;" :id="id"></div>
</template>
<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
export default {
  props: {
    id: {
      type: String
    },
    chartData: {
      type: Array,
      default: () => {
        return [];
      }
    },
    config: {
      type: Object
    }
  },
  data() {
    return {
      chart: [],
      configs: {},
      echarts: null
    };
  },
  created() {
    this.initData();
  },
  destroyed() {
    this.echarts.dispose();
  },
  watch: {
    configs: {
      handler() {
        this.initPie();
      },
      deep: true
    }
  },
  methods: {
    am4themes_myTheme(target) {
      //环形外面颜色
      if (target instanceof am4core.InterfaceColorSet) {
        target.setFor("grid", am4core.color("#00FAFE"));
      }
    },
    initData() {
      this.configs = this.config;
      this.chart = this.chartData;
      //设置每个饼图中间隔离一定间隙 ,下面饼图颜色
      if (!this.config.interval) {
        this.chart.map((item, index) => {
          this.$set(item, "config", { isActive: true });
          this.$set(
            item,
            "color1",
            this.config.shadow ? this.config.shadow : "#eee"
          );
          if (this.config.color) {
            this.$set(item, "color", this.config.color[index]);
          }
          return item;
        });
      }
    },
    initPie() {
      var chart = am4core.create(this.id, am4charts.PieChart3D);
      this.echarts = chart;
      am4core.useTheme(this.am4themes_myTheme);
      chart.data = this.chart;
      // 角度
      chart.angle = this.config.angle ? this.config.angle : 60;
      //中间空心大小
      //下面环形配置
      var series1 = chart.series.push(new am4charts.PieSeries3D());
      series1.dataFields.value = "value";
      series1.dataFields.category = "name";
      series1.depth = this.config.depth ? this.config.depth : 5;
      series1.labels.template.disabled = true;
      series1.ticks.template.disabled = true;
      series1.hiddenState.properties.endAngle = -90;
      // series1.scale = 1.1;
      series1.slices.template.tooltipText = "";
      series1.slices.template.propertyFields.fill = "color1";
      series1.slices.template.configField = "config";
      series1.innerRadius = this.config.innerRadius;
      series1.radius = this.config.radius;
      series1.dy = 6;
      //上面环形配置
      var series = chart.series.push(new am4charts.PieSeries3D());
      series.innerRadius = this.config.innerRadius;
      series.radius = this.config.radius;
      //设置字体大小
      series.tooltip.label.fontSize = this.config.TopfontSize
        ? this.config.TopfontSize
        : 12;
      //设置字体大小
      series.fontSize = this.config.fontSize ? this.config.fontSize : 14;
      // 设置饼图深度
      series.depth = 1;
      //设置鼠标放上效果
      //显示内容
      series.slices.template.tooltipText = "{name}";
      //最大宽度
      series.tooltip.label.maxWidth = 150;
      //背景颜色
      series.tooltip.getFillFromObject = false;
      if (this.config.color) {
        series.tooltip.background.propertyFields.fill = "color";
      }
      //允许换行
      series.tooltip.label.wrap = true;
      //文字居中
      series.tooltip.label.textAlign = "middle";
      //文字颜色
      series.tooltip.label.propertyFields.fill = "#fff";
      //文字背景跟随环形颜色
      series.tooltip.background.propertyFields.stroke = "color";
      //鼠标放上背景阴影效果
      //文字颜色
      series.labels.template.fill = am4core.color("#DAD54B");
      //跟随环形外径旁
      series.alignLabels = this.config.alignLabels;
      //暂时感觉可以设置圈外线的距离
      series.labels.template.radius = this.config.distance
        ? this.config.distance
        : 10;
      // 饼图外面曲线  引导线的宽度
      series.ticks.template.strokeWidth = 3;
      //使用  html标签显示环形外面内容
      series.labels.template.html =
        '<div style="color:#ccc;font-size:14px;" >{name}</div><div>{value.percent.formatNumber("#.0")}%</div>';
      //动画效果
      series.hiddenState.properties.endAngle = -90;
      //设置环形中间的间隙
      series.slices.template.configField = "config";
      //环形颜色
      series.slices.template.propertyFields.fill = "color";
      // 设置参数，值
      series.dataFields.value = "value";
      // 去掉版本号
      let eles = document.querySelectorAll("[aria-labelledby]");
      eles.forEach(ele => {
        ele.style.visibility = "hidden";
      });
    }
  }
};
</script>
