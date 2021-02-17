<template>
  <div class="bottom">
    <div class="bottom_left">
      <Box title="预案启动统计">
        <div class="left_1">
          <Pie v-if="dataType" :series="pie" ref="A"></Pie>
        </div>
        <div class="left_2" ref="left_2">
          <Columar2D
            v-if="dataType"
            ref="B"
            :options="columnarData"
          ></Columar2D>
        </div>
      </Box>
    </div>
    <div class="bottom_right">
      <Box title="应急事件选择">
        <DataGrid
          v-if="dataType"
          :options="dataGrid.options"
          :list="dataGrid.list"
          :columns="dataGrid.columns"
          :operates="dataGrid.operates"
          :pagination="dataGrid.pagination"
        ></DataGrid>
      </Box>
    </div>
    <el-dialog title="详细情况" :visible.sync="fromType" width="400px">
      <From
        :rules="rules"
        :form="loginFrom"
        :config="config"
        :formLabel="formLabel"
      >
        <div class="footer">
          <el-button @click="qijiao">确定</el-button>
          <el-button @click="fromType = false">取消</el-button>
        </div>
      </From>
    </el-dialog>
  </div>
</template>
<script>
import Box from "../../cnmponents/box/box";
import Pie from "@/components/echart/pie/pie";
import Columar2D from "@/components/echart/columnar2D";
import DataGrid from "@/components/DataGrid/DataGrid.vue";
import From from "@/components/form/form";
import { resizeChartFunction } from "@/components/mixin/resizeChart";

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
  components: {
    Box,
    Pie,
    Columar2D,
    DataGrid,
    From
  },
  data() {
    return {
      dataGrid: {},
      dataType: false,
      fromType: false,
      color: ["#20ffa0", "#F1AF5A", "#0000ff", "#0070ff", "red"],
      //	inline			表单是是不是行内样式
      //config			宽度  可以不填 传值方式:
      config: {
        width: "80px"
      },
      //	rules				//表单的验证规则
      //	传值方式:
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 9, message: "长度在 3 到 9 个字符", trigger: "blur" }
        ]
      },
      //form				表单的 v-model  需要绑定的值
      //传值方式:
      loginFrom: {
        //		必须要有		有多少字段有多少个值
        username: "",
        date: "",
        addr: "",
        age: ""
      },
      //formLabel
      //传值方式:
      formLabel: [
        {
          label: "账号 :", //					可以没有
          model: "username", //		主要用于		必须有		使用 form[item.model]	绑定值   必须有
          rules: "username" //		验证		可以没有
        },
        {
          label: "地址 :",
          model: "addr"
        },
        {
          label: "性别 :",
          model: "age",
          type: "select",
          options: [
            {
              value: "1",
              label: "男"
            },
            {
              value: "2",
              label: "女"
            }
          ]
        },
        {
          label: "发生时间 :",
          model: "date",
          type: "date"
        }
      ]
    };
  },
  computed: {
    pie() {
      let series = [];
      series.push({
        type: "pie",
        radius: "50%",
        label: { position: "center", color: "#fff" },
        data: this.bottomData.pie.map(item => {
          return {
            name: item.name,
            value: item.num
          };
        })
      });
      // this.type =true;
      return series;
    },
    //柱状图
    columnarData() {
      let columnar = {
        xData: [],
        series: []
      };
      columnar.xData.push(this.bottomData.pie[0].name);
      let keys = Object.keys(this.bottomData.pie[0]);
      if (keys.indexOf("name") !== -1) {
        keys.splice(keys.indexOf("name"), 1);
      }
      keys.forEach((ele, index) => {
        columnar.series.push({
          type: "bar",
          barWidth: "35",
          color: this.color[index],
          data: this.bottomData.pie.map(item => {
            return item[ele];
          })
        });
      });
      return columnar;
    }
  },
  watch: {},
  methods: {
    qijiao() {
      this.loginFrom.age === "男"
        ? (this.loginFrom.age = 1)
        : (this.loginFrom.age = 2);
      console.log("准备提交的值", this.loginFrom);
      this.fromType = false;
    },
    //刷新页面自适应
    resize() {
      this.resizeChartFun(["A", "B"]);
    },
    labelName(name) {
      switch (name) {
        case "addr":
          name = "地址";
          break;
        case "data":
          name = "时间";
          break;
        case "even":
          name = "走失";
          break;
        case "type":
          name = "性别";
          break;
      }
      return name;
    },
    dataGridData() {
      let dataGrid = {
        // 全局属性
        options: {
          height: "calc(100% - 40px)",
          loading: true,
          multiSelect: true
        },
        // 列表数据
        list: [],
        // 列属性
        columns: [],
        // 操作列
        operates: {
          hidden: false,
          label: "操作",
          list: [
            {
              label: "联系管理人员",
              hidden: false,
              method: scope => {
                this.loginFrom.username = scope.row.even;
                this.loginFrom.date = scope.row.data;
                this.loginFrom.addr = scope.row.addr;
                this.loginFrom.age = scope.row.type === 1 ? "男" : " 女";
                this.fromType = true;
              }
            }
          ]
        },
        // 分页
        pagination: {
          hidden: false,
          currentPage: 1,
          pageSizes: [5, 8, 10, 40, 50, 100],
          pageSize: 5,
          total: this.bottomData.table.length,
          pageCount: 0
        }
      };
      let keys = Object.keys(this.bottomData.table[0]);
      if (keys.indexOf("step") !== -1) {
        keys.splice(keys.indexOf("step"), 1);
      }
      keys.forEach(item => {
        dataGrid.columns.push({
          align: "center",
          hidden: false,
          label: this.labelName(item),
          prop: item
        });
      });

      dataGrid.list = this.bottomData.table.map(item => {
        item.type === 1 ? (item.type = "男") : (item.type = "女");
        return item;
      });
      return dataGrid;
    }
  },
  created() {},
  mounted() {
    this.dataGrid = this.dataGridData();
    window.addEventListener("resize", this.resize);
    console.log(this.columnarData, "columnarData");
    this.dataType = true;
  },
  destroyed() {}
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/scenicAreaManagement/_varlable.scss";
.bottom {
  width: 100%;
  height: 100%;
  background: $content_bg;
  display: flex;
  .footer {
    width: 100;
    height: 40px;
    display: flex;
    justify-content: space-around;
    button {
      color: #fff;
    }
  }
  &_left {
    flex: 1;
    .left_1 {
      border-radius: 5px 0 0 5px;
      display: inline-block;
      width: 50%;
      height: calc(100% - 3px);
    }
    .left_2 {
      border-radius: 0 5px 5px 0;
      display: inline-block;
      width: 50%;
      height: calc(100% - 3px);
    }
  }
  &_right {
    flex: 2;
    height: calc(100% - 3px);
  }
  .bottom_right {
    overflow-y: hidden;
  }
}
</style>
