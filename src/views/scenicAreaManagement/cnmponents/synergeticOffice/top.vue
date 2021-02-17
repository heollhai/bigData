<template>
  <div class="top">
    <div class="top_1"><Box title="最新公告"></Box></div>
    <div class="top_2">
      <Box title="新闻">
        <div class="top_2_content">
          <div v-for="(item, index) in top_2_list" :key="index">
            <h4>
              <span>{{ item.title }}</span
              ><span>查看详情 ></span>
            </h4>
            <div>
              <span>{{ item.branch }}</span>
              <span>{{ item.name }}</span>
              <span>{{ item.date }}</span>
              <span>{{ item.num }}</span>
            </div>
          </div>
        </div>
      </Box>
    </div>
    <div class="top_3">
      <Box title="会议安排">
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
  </div>
</template>

<script>
import Box from "../../cnmponents/box/box";
import DataGrid from "@/components/DataGrid/DataGrid.vue";

export default {
  props: {
    topData: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    Box,
    DataGrid
  },
  data() {
    return {
      top_2_list: [],
      dataType: false,
      dataGrid: {
        config: {
          color: "red"
        },
        // 全局属性
        options: {
          height: "calc(100% - 40px)",
          loading: true,
          multiSelect: 1
        },
        // 列表数据
        list: [],
        // 列属性
        columns: [],
        // 操作列
        operates: {
          hidden: true
        },
        // 分页
        pagination: {
          hidden: false,
          currentPage: 1,
          pageSizes: [5, 8, 10, 40, 50, 100],
          pageSize: 5,
          total: 0,
          pageCount: 0
        }
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    top_2_Data() {
      for (var i = 0; i < 15; i++) {
        this.top_2_list.push({
          title: "关于奖励人才举报的通知",
          branch: "人力资源部",
          name: "李xx",
          date: "2021-2-15",
          num: "1888"
        });
      }
    },
    dataGridInit() {
      let props = Object.keys(this.topData.biaoge.list[0]);
      this.dataGrid.columns = this.topData.biaoge.columns.map((item, index) => {
        return {
          align: "center",
          hidden: false,
          label: item,
          prop: props[index]
        };
      });
      this.dataGrid.list = this.topData.biaoge.list;
      this.dataGrid.pagination.total = this.dataGrid.list.length;
      this.dataType = true;
    }
  },
  created() {
    this.top_2_Data();
    this.dataGridInit();
  },
  mounted() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/scenicAreaManagement/_varlable.scss";
$color: #81b2ff;
$color2: #1463de;
.top {
  background: $content_bg;
  display: flex;
  width: 100%;
  // height: 100%;
  height: 400px;
  &_1 {
    flex: 2;
  }
  &_2 {
    flex: 3;
    overflow: hidden;
    .top_2_content::-webkit-scrollbar {
      display: none; //去掉滚动条，不能滚动了；
      width: 0; //可以滚动，且滚动条不显示；
    }
    .top_2_content {
      width: calc(100% - 20px);
      height: 100%;
      padding: 0 10px;
      overflow: hidden;
      overflow-y: scroll;
      > div {
        cursor: default;
        border-bottom: 1px solid $color2;
        h4 {
          margin: 0px 0 0 0;
          padding: 10px 0 0 0;
          color: $color;
          font-size: 14px;
          display: flex;
          justify-content: space-between;
        }
        > div {
          span {
            margin-top: 5px;
            margin-left: 8px;
            font-size: 12px;
            color: $color2;
          }
          span:nth-of-type(1) {
            margin-left: 0;
          }
        }
      }
    }
  }
  &_3 {
    flex: 4;
  }
}
</style>
