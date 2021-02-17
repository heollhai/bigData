<template>
  <div class="top">
    <div>
      <Box title="巡护信息报告">
        <div class="left">
          <div class="img">
            景区全景图
          </div>
          <div class="grand">
            <ul>
              <li v-for="(item, index) in topData.grand.data" :key="index">
                <span>{{ topData.grand.name[index] }} ：</span>
                <span>{{ item.value | grandValue }}</span>
              </li>
            </ul>
          </div>
        </div>
      </Box>
    </div>
    <div>
      <Box title="水质监测">
        <Tendency   :option="tendency1"></Tendency>
      </Box>
    </div>
    <div>
      <Box title="噪音监测">
        <Tendency :option="tendency2"></Tendency>
      </Box>
    </div>
  </div>
</template>

<script>
import Box from "../box/box";
import Tendency from "@/components/echart/tendency/tendency";
export default {
  props: {
    topData: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    Box,
    Tendency,
  },
  filters: {
    grandValue(value) {
      switch (value) {
        case 1:
          value = "正常";
          break;
        case 2:
          value = "异常";
          break;
        case 3:
          value = "无";
          break;
        case 4:
          value = "你猜猜";
          break;
        default:
          value;
          break;
      }
      return value;
    },
  },
  data() {
    return {};
  },
  computed: {
    //水质监测
    tendency1() {
      return this.tendencyData(
        "red",
        this.topData.shuiZhi.data,
        this.topData.shuiZhi.xData,
        "A"
      );
    },
    tendency2() {
      return this.tendencyData(
        "#894305",
        this.topData.noise.data,
        this.topData.noise.xData,
        "B",
        "噪音监测"
      );
    },
  },
  watch: {},
  methods: {
    //趋势图
    tendencyData(color, data, xData, text, name) {
      let tendency = {
        xData: xData,
        axisLabel: "incline", //incline x轴倾斜显示  //twoLine 分两行显示 可以没有
        title: {
          text: text,
          top: 10,
        },
        XYColor: "#fff",
        name: name ? name : "",
        series: [
          {
            type: "line",
            color: color,
            data: data.map((item) => {
              return item.num;
            }),
          },
        ],
      };
      return tendency;
    },
   
  },
  created() {},
  mounted() {
  },
  destroyed() {},
};
</script>
<style lang="scss" scoped>
$color: #75abff;
$size14: 14px;
$colorF: #fff;
.top {
  width: 100;
  height: 100%;
  display: flex;
  > div {
    width: 100%;
    height: 100%;
  }
  > div:nth-of-type(1) {
    flex: 2;
    .left {
      display: flex;
      .img {
        flex: 5;
        background: url("~@/assets/scenicAreaManagement/images/ti.jpg")
          no-repeat;
        background-size: 100% calc(100% - 20px);
        margin: 20px;
        height: calc(100% - 40px);
        color: $colorF;
        font-size: $size14;
        display: flex;
        justify-content: center;
        align-items: flex-end;
      }
      .grand {
        flex: 6;
        > ul {
          height: calc(100% - 40px);
          padding: 0;
          margin: 20px;
          display: flex;
          flex-direction: column;
          color: $color;
          font-size: $size14;
        }
        li {
          flex: 1;
          list-style: none;
          display: flex;
          > span {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            display: flex;
            align-items: center;
            border: 1px solid $color;
          }
          > span:nth-of-type(1) {
            flex: 4;
            display: flex;
            justify-content: flex-end;
            border-right: none;
            border-bottom: none;
            padding-right: 10px;
          }
          span:nth-of-type(2) {
            flex: 5;
            border-bottom: none;
            padding-left: 20px;
          }
        }
        li:nth-last-of-type(1) {
          span {
            border-bottom: 1px solid $color;
          }
        }
      }
    }
  }
  > div:nth-of-type(2) {
    flex: 1;
  }
  > div:nth-of-type(3) {
    flex: 1;
  }
}
</style>
