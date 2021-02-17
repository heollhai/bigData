<!-- 2d 圆形 (圆环也是一样的)
  config: {           都可以没有
        legend: true,
        title:"nihao",
        color:["#ccc",'red'],
        titleColor:"#fff"
        legendLeft:""// legend位置
        legendTop:""// legend位置
        titleTop:""// title位置
        titleLeft:""// title位置
      }
series  : [{
  //是否必须
  name: "旅游方式", //鼠标放上显示标题           //    否
  type: "pie", //类型要有                       //   是
  center: ["40%", "50%"], //50%是在中间        //       否
  radius: "50%", //可以是[40% ,50%]用来画圆环    //    否
  //  //标签放在 里面还是 position  (inside -- 标签放在圆里面) 属性修改  外面+颜色
  label: { position: "outside", color: "#fff" }, //否
  data: [//    是
  { name: "1", value: "2" },
  ],
},] 
    series 里面的内容   
 -->
<template>
  <div class="pie" ref="pie"></div>
</template>

<script>
export default {
  props: {
    series: {
      type: Array,
      default: () => {
        return [];
      }
    },
    config: {
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
        // color:"",
        title: {
          text: "",
          subtext: "",
          left: "10%",
          top: "5%",
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "item"
        },
        legend: {
          show: false,
          orient: "vertical",
          textStyle: {
            color: "#fff"
          },
          top: "10",
          left: "10"
        },
        series: {}
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    pieInit() {
      let echarts = require("echarts");
      this.echar = echarts.init(this.$refs.pie);
      this.echar.setOption(this.option);
    },
    optionInit() {
      let option = this.option;
      option.series = this.series;
      option.legend.show = this.config.legend; //是否显示 legend
      option.title.text = this.config.title; //是否显示 legend
      if (this.config.color) {
        option.color = this.config.color;
      }
      // 标题   左右侧颜色
      if (this.config.titleColor) {
        option.title.textStyle.color = this.config.titleColor;
        option.legend.textStyle.color = this.config.titleColor;
      }

      this.config.legendLeft
        ? (option.legend.left = this.config.legendLeft)
        : "";
      this.config.legendTop ? (option.legend.top = this.config.legendTop) : "";
      this.config.titleTop ? (option.title.top = this.config.titleTop) : "";
      this.config.titleLeft ? (option.title.left = this.config.titleLeft) : "";
    },
    resizeChart() {
      this.echar ? this.echar.resize() : "";
    }
  },
  created() {
    this.optionInit();
  },
  mounted() {
    this.pieInit();
    window.addEventListener("resize", this.resizeChart);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeChart);
  }
};
</script>
<style lang="scss" scoped>
.pie {
  width: 100%;
  height: 100%;
}
</style>
