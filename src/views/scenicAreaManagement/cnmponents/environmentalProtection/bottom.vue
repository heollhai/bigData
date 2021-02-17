<template>
  <div class="bottom">
    <div>
      <Box title="景区植物种类">
        <div class="biaoge">
          <div>
            <DataGrid
              v-if="biaoge.dataGridType"
              :options="biaoge.options"
              :list="biaoge.list"
              :columns="biaoge.columns"
              :operates="biaoge.operates"
              :pagination="biaoge.pagination"
              @SelectionChange="SelectionChange"
            ></DataGrid>
          </div>
          <div :style="{ backgroundImage: 'url(' + img + ')' }"></div>
        </div>
      </Box>
    </div>
    <div>
      <Box title="景区动物种类">
        <div class="biaoge">
          <div>
            <DataGrid
              v-if="biaoge2.dataGridType"
              :options="biaoge2.options"
              :list="biaoge2.list"
              :columns="biaoge2.columns"
              :operates="biaoge2.operates"
              :pagination="biaoge2.pagination"
              @SelectionChange="SelectionChange2"
            ></DataGrid>
          </div>
          <div :style="{ backgroundImage: 'url(' + img2 + ')' }"></div>
        </div>
      </Box>
    </div>
    <div>
      <Box title="景区地址分布">
        <div class="biaoge">
          <div>
            <DataGrid
              v-if="biaoge3.dataGridType"
              :options="biaoge3.options"
              :list="biaoge3.list"
              :columns="biaoge3.columns"
              :operates="biaoge3.operates"
              :pagination="biaoge3.pagination"
              @SelectionChange="SelectionChange3"
            ></DataGrid>
          </div>
          <div :style="{ backgroundImage: 'url(' + img3 + ')' }"></div>
        </div>
      </Box>
    </div>
    <div>
      <Box title="负氧离子监测">
        <Tendency :option="tendencyData"></Tendency>
      </Box>
    </div>
  </div>
</template>

<script>
import Box from "../box/box";
import Tendency from "@/components/echart/tendency/tendency";
import DataGrid from "@/components/DataGrid/DataGrid.vue";
import { DataGridInitData } from "@/components/DataGrid/dataGrid.js";
export default {
  mixins: [DataGridInitData],
  props: {
    buttomData: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    Box,
    Tendency,
    DataGrid,
  },
  data() {
    return {
      img: require("@/assets/scenicAreaManagement/images/1.png"),
      img2: require("@/assets/scenicAreaManagement/images/2.png"),
      img3: require("@/assets/scenicAreaManagement/images/3.png"),
    };
  },

  computed: {
    //趋势图
    tendencyData() {
      let tendency = {
        xData: this.buttomData.liZi.xData,
        title: {
          text: "C",
        },
        axisLabel: "incline",
        XYColor: "#fff",
        series: [
          {
            type: "line",
            color: "#987654",
            data: this.buttomData.liZi.data.map((item) => {
              return item.num;
            }),
          },
        ],
      };
      return tendency;
    },
    //表格1
    biaoge() {
      return this.DataGridList(this.buttomData.biaoge1);
    },
    biaoge2() {
      return this.DataGridList(this.buttomData.biaoge2);
    },
    biaoge3() {
      return this.DataGridList(this.buttomData.biaoge3);
    },
  },
  watch: {},
  methods: {
    //表格选中
    SelectionChange(value, index) {
      this.biage1Index = index;
      this.img = require("@/assets/scenicAreaManagement/images/" +
        (index + 1) +
        ".png");
    },
    SelectionChange2(value, index) {
      this.img2 = require("@/assets/scenicAreaManagement/images/" +
        (index + 1) +
        ".png");
    },
    SelectionChange3(value, index) {
      this.img3 = require("@/assets/scenicAreaManagement/images/" +
        (index + 1) +
        ".png");
    },
    //表格数据
    DataGridList(biaoge) {
      let data = JSON.parse(JSON.stringify(this.dataGrid));
      let key = Object.keys(biaoge.data[0]);
      biaoge.label.forEach((element, index) => {
        data.columns.push({
          align: "center",
          hidden: false,
          label: element,
          prop: key[index],
        });
      });
      data.list = biaoge.data;
      data.pagination.total = data.list.length;
      data.options.multiSelect = false;
      data.options.size = 12;
      data.options.tall = 30;
      data.dataGridType = true;
      return data;
    },
    resize() {
    
    },
  },
  created() {
    console.log(this.buttomData, "底部数据");
  },
  mounted() {
    window.addEventListener("resize", this.resize);
    console.log("biage1", this.biage1);
  },
  destroyed() {},
};
</script>
<style lang="scss" scoped>
.bottom {
  width: 100%;
  height: 100%;
  display: flex;
  > div {
    flex: 1;
  }
  .biaoge {
    display: flex;
    flex-direction: column;
    > div {
      flex: 1;
    }
  }
}
</style>
