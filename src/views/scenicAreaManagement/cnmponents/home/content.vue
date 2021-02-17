<template>
  <div class="homeCenten">
    <div class="conetne_1">
      <div>
        <p>{{ operation.title }}</p>
        <div>
          <template v-for="(item, key) in operation.data">
            <div
              :style="{ background: item.color }"
              :key="item.name"
              class="con1"
            >
              <i :class="item.icon"></i>
              <div>
                <span>{{ item.name }}</span>
                <div>
                  <span v-if="key === 2">共计 :</span
                  ><span class="value">{{
                    item.value.string ? item.value.string : item.value
                  }}</span
                  ><span v-if="key === 2">人</span>
                  <el-progress
                    v-if="key === 1"
                    style="width:100%;"
                    :percentage="50"
                    color="#f56c6c"
                  ></el-progress>
                </div>
                <el-button>{{ item.button }}</el-button>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div>
        <p>近七日客流变化</p>
        <div>
          <Colummnar :option="echart1"></Colummnar>
        </div>
      </div>
      <div>
        <p>游客热力分布图</p>
        <div class="relitu"></div>
      </div>
      <div>
        <p>景区未来流量预测</p>
        <div>
          <Colummnar :option="echart2"></Colummnar>
        </div>
      </div>
    </div>
    <div class="conetne_2">
      <div>
        <p>景区未来流量预测</p>
        <div>
          <Colummnar :option="echart2"></Colummnar>
        </div>
      </div>
      <div>
        <p>景区进七日收入</p>
        <div>
          <Tendency :option="echart3"></Tendency>
        </div>
      </div>
      <div>
        <p>今日值班</p>
        <div class="zhiban">
          <div v-for="item in beOnDuty" :key="item.phong">
            <i :class="item.icon"></i>
            <div>
              <span>值班{{ item.duty }} : {{ item.name }}</span>
              <div>{{ item.phong }}</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>景区未来流量预测</p>
        <div>
          <Pyramid
            :id="pie.id"
            :config="pie.config"
            :chartData="pie.chartData"
          ></Pyramid>
        </div>
      </div>
    </div>
    <div class="foonter">
      <div v-for="item in this.datas.total" :key="item.name">
        <span>{{ item.name }} : </span>
        <span>{{ item.num }}</span>
      </div>
    </div>
  </div>
</template>

<script>
//3d环形图
import Pyramid from "@/components/echart/d3/pie";
//柱状图
import Colummnar from "@/components/echart/columnar";
//趋势图
import Tendency from "@/components/echart/tendency/tendency";
export default {
  props: {
    datas: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  components: {
    Colummnar,
    Tendency,
    Pyramid
  },
  data() {
    return {};
  },
  computed: {
    operation() {
      //今日运营
      return this.datas.operation;
    },
    echart1() {
      //格式化echar数据给到组件
      return this.echart(this.datas.chear1);
    },
    echart2() {
      return this.echart(this.datas.chear2, "incline");
    },
    echart3() {
      let color = ["#3b72ee", "red"];
      return this.echart(this.datas.chear3, "incline", "line", color);
    },
    beOnDuty() {
      return this.datas.beOnDuty;
    },
    pie() {
      let pie = {};
      pie.id = "pie";
      pie.config = {
        innerRadius: "80%",
        radius: "40%",
        distance: 60,
        angle: 70,
        alignLabels: true,
        color: ["#0056e3", "#00cccc", "#007638", "#006785", "red"]
      };
      pie.chartData = [];
      let key = Object.keys(this.datas.chear3[0]);
      if (key.indexOf("name") !== -1) {
        key.splice(key.indexOf("name"), 1);
      }
      key.forEach(item => {
        pie.chartData.push({
          name: item,
          value: this.datas.chear3[0][item]
        });
      });
      return pie;
    }
  },
  watch: {},
  methods: {
    //图标数据装换
    echart(echartData, axisLabel, type, color) {
      let options = {};
      options.axisLabel = axisLabel;
      options.series = [];
      options.xData = [];
      options.XYColor = "#fff";
      echartData.forEach(ele => {
        options.xData.push(ele.name);
      });
      let key = Object.keys(echartData[0]);
      if (key.indexOf("name") !== -1) {
        key.splice(key.indexOf("name"), 1);
      }
      key.forEach((item, index) => {
        options.series.push({
          type: type,
          data: echartData.map(ele => {
            return ele[item];
          }),
          color: color ? color[index] : "#2E87EF"
        });
      });
      return options;
    }
  },
  created() {},
  mounted() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/scenicAreaManagement/_varlable.scss";
.homeCenten {
  display: flex;
  flex-direction: column;
  .conetne_1 {
    flex: 5;
  }
  .conetne_2 {
    flex: 5;
  }
  .foonter {
    flex: 1.5;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $content_bg2;
    > div {
      width: 10%;
      padding: 5px 10px;
      font-size: $size20;
      color: $colorF;
      > span:nth-last-child(1) {
        font-size: 28px;
      }
    }
  }
}
p {
  padding: 10px;
  border-radius: 5px;
  margin: 0;
  display: flex;
  align-items: center;
  font-weight: inherit;
  color: $colorF;
  background: $header_bgB;
}
.conetne_1,
.conetne_2 {
  background: $content_bg;
  width: calc(100% - 20px);
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 10px;

  > div {
    flex: 1;
    height: 100%;
    margin-left: 10px;
    > div {
      height: calc(100% - 40px);
      background: $header_bgB;
      border-radius: 5px;
      padding: 1px;
      margin-top: 5px;
    }
  }
  > div:nth-of-type(1) {
    margin-left: 0;
  }
  .con1 {
    display: flex;
    margin: 10px 10px 0px 10px;
    border-radius: 5px;
    > div {
      flex: 5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      > span {
        margin-top: 5px;
        color: $colorF;
      }
      > div {
        width: 100%;
        display: flex;
        color: $colorF;
        margin-top: 5px;
        .el-progress {
          margin-left: 30px;
          width: 60% !important;
        }
      }
      .el-button {
        padding: 5px 10px;
        margin: 5px 0;
        background: $colorF;
        // color: $colorF;
      }
    }
    > i {
      flex: 5;
      color: $colorF;
      font-size: 74px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .value {
    margin-left: 5px;
  }
  .zhiban {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 10px;
    > div {
      // margin-top: 10px;
      border-radius: 5px;
      padding: 5px;
      display: flex;
      background: $header_bg;
      > i {
        flex: 2;
        font-size: $size28;
        color: $colorF;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      > div {
        color: $colorF;
        flex: 6;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 5px;
      }
    }
    > div:only-child(1) {
      // margin-bottom:10px ;
    }
  }
}
</style>
