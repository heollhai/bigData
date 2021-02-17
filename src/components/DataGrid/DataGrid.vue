<!--
   :show-overflow-tooltip="true"  超出隐藏
 -->
<!-- 
  :options="dataGrid.options"  			全局属性
  :list="dataGrid.list"					数据
  :columns="dataGrid.columns" 			列属性
  :operates="dataGrid.operates"			操作列
  :pagination="dataGrid.pagination"		分页  
  v-if="dataGrid.dataGridType"// 有数据了在运行组件
-->
<template>
  <div style="height: 100%" calss="table">
    <el-table
      :data="
        list.slice(
          (pagination.currentPage - 1) * pagination.pageSize,
          pagination.currentPage * pagination.pageSize
        )
      "
      :row-class-name="tableRowClassName"
      :row-style="listTableRow"
      ref="multipleTable"
      :header-cell-style="listTableHeader"
      :cell-style="listTableCell"
      border
      :height="options.height"
      @cell-click="handlerCellClick"
      @selection-change="handleSelectionChange"
      @select="checkboxSelectChange"
      @select-all="checkAllChange"
      @row-click="handelRowClick"
    >
      <!--复选框start-->
      <!--
			  :reserve-selection="reserveSelection"  当用户切换分页时保留选中的信息 		这个暂时不用，，，，
			  -->
      <el-table-column
        v-if="options.multiSelect === true"
        type="selection"
        style="width: 55px;"
      />

      <!--单选框start-->
      <el-table-column v-if="options.multiSelect === false" label="" width="50">
        <template slot-scope="scope">
          <el-radio
            style="margin-left:8px;color:rgba(0,0,0,0)"
            v-model="radio"
            :label="scope.$index"
            @change.native="handleSelectionChange(scope.row, scope.$index)"
          ></el-radio>
        </template>
      </el-table-column>
      <!--单选框end-->
      <!--数据列start-->
      <template v-for="column in columns">
        <el-table-column
          :show-overflow-tooltip="true"
          v-if="!column.hidden"
          :key="column.label"
          :prop="column.prop"
          :label="column.label"
          :align="column.align"
          :min-width="column.width"
          :fixed="column.fixed"
        >
          <template slot-scope="scope">
            <template>
              <span>{{ scope.row[column.prop] }}</span>
              <!-- 在某一行增加  某些提示时可以使用  暂时不使用 -->
              <!-- <span v-if="column.label === '时间'" style="color:red;">我是提醒字段</span> -->
            </template>
          </template>
        </el-table-column>
      </template>
      <!-- 操作栏按钮 -->
      <el-table-column
        v-if="!operates.hidden"
        ref="fixedColumn"
        :min-width="operates.width"
        :label="operates.label"
        column-key="operation"
        align="center"
      >
        <template slot-scope="scope">
          <div class="operate-group">
            <template v-for="(btn, key) in operates.list">
              <el-button
                :key="btn.id"
                :disabled="btn.disabled"
                @click.native.prevent.stop="btn.method(scope, key)"
                >{{ btn.label }}</el-button
              >
            </template>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!--分页start-->
    <el-pagination
      v-if="!tableCurrentPagination.hidden"
      :current-page="tableCurrentPagination.currentPage"
      :page-sizes="tableCurrentPagination.pageSizes"
      :page-size="tableCurrentPagination.pageSize"
      :total="tableCurrentPagination.total"
      layout="total,prev,next ,jumper, sizes"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
    <!--分页end-->
  </div>
</template>

<script>
const _pageArray = [10, 20, 30, 40, 50, 100]; // 每页展示条数的控制集合
export default {
  name: "Tables",
  props: {
    id: {
      type: String,
      default: "",
    },
    // 列表全局属性
    options: {
      type: Object,
      default: () => {
        return {
          height: "calc(100% - 40px)",
          loading: false,
          multiSelect: true,
          size: "16px",
        };
      },
    },
    // 列表数据
    list: {
      type: Array,
      default: () => [], // prop:表头绑定的字段，label：表头名称，align：每列数据展示形式（left, center, right），width:列宽
    },
    // 列表列
    columns: {
      type: Array,
      default: () => [], // 需要展示的列 === prop：列数据对应的属性，label：列名，align：对齐方式，width：列宽  fixed：是否固定（left,right）formatter 格式化数据
    },
    // 操作列，如按钮
    operates: {
      type: Object,
      default: () => {}, // width:按钮列宽，fixed：是否固定（left,right）,按钮集合 === label: 文本，show：是否显示，icon：按钮图标，disabled：是否禁用，method：回调方法
    },
    pagination: {
      type: Object,
      default: () => {},
    },
    reserveSelection: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      // 如果没有传分页，，那么使用这个分页
      tableCurrentPagination: {
        hidden: false,
        currentPage: 1,
        pageSizes: [10, 20, 30, 40, 50, 100],
        pageSize: 10,
        total: 0,
        pageCount: 0,
      },
      radio: "", //单选
      multipleSelection: [], //选中的多选框里面的内容，，，，
    };
  },
  mounted() {
    console.log(this.columns,'p[[[[[[')
    // 判断是否需要分页
    if (this.pagination && !this.pagination.pageSize) {
      this.pagination.pageArray = _pageArray;
    }
    this.tableCurrentPagination = this.pagination || {
      pageSize: this.tableCurrentPagination.total,
      currentPage: 1,
    };
  },

  methods: {
    // 切换每页显示的数量
    handleSizeChange(size) {
      if (this.pagination) {
        this.pagination.currentPage = 1;
        this.pagination.pageSize = size;
      }
    },
    // 跳转
    handleCurrentChange(val) {
      if (this.pagination) {
        this.pagination.currentPage = val;
      }
    },
    // 上一页
    handlePreClick(val) {
      if (this.pagination) {
        this.pagination.currentPage = val;
      }
    },
    // 下一页
    handleNextClick(val) {
      if (this.pagination) {
        this.tableCurrentPagination.currentPage = val;
      }
    },
    // 多行选中
    handleSelectionChange(val, index) {
      this.multipleSelection = val;
      this.$emit("SelectionChange", val, index);
      console.log("val:", this.multipleSelection);
    },
    // 单击某行操作	row, event, column   有3个参数可以使用
    handelRowClick() {},
    // 手动勾选复选框；
    checkboxSelectChange(selection, row) {
      const value = {
        selection: selection,
        row: row,
      };
      this.$emit("select", value);
    },
    // 全选；
    checkAllChange(selection) {
      this.$emit("select-all", selection);
    },
    //表格点击事件
    handlerCellClick(row, column) {
      const value = {
        row: row,
        column: column,
      };
      this.$emit("handlerCellClick", value);
    },
    // 头部样式			{ row, column, rowIndex }
    listTableHeader() {
      return `padding:0px;
      font-size:${this.options.size + 2}px;
      font-weight:normal;
      height:${this.options.tall - 6}px;
      border-right:1px solid #2d8cf0;
      background:#173881;
      text-align:center ;
      color:#fff;
      `;
    },
    //  改变某一行样式	rowIndex		设置 style的样式
    listTableRow() {
      // 定义公共样式
      let styleJson = {
        "font-size": this.options.size + "px",
        height: this.options.tall + "px",
        color: "#fff ",
        padding: "5px",
        "font-weight": "normal",
        background: "#173881",
      };
      // if (rowIndex % 2 === 0) {
      //   // 单数行背景颜色为			#fafafa
      //   let styleJson1 = { "background-color": "#fafafa" };
      //   styleJson = { ...styleJson1, ...styleJson };
      //   return styleJson;
      // } else if (rowIndex % 2 === 1) {
      //   // 双行背景颜色为			#f2f2f2
      //   let styleJson2 = { "background-Color": "#f2f2f2" };
      //   styleJson = { ...styleJson2, ...styleJson };
      //   return styleJson;
      // }
      return styleJson;
    },
    // 设置某行样式		设置 class名字  在定义的样式			可以设置 {row,rowIndex}两个参数
    tableRowClassName() {
      // console.log(rowIndex, "row, rowIndex");
      return "newColor";
    },
    // 可以设置某一个单元格里面的样式		{ row, column, rowIndex, columnIndex }   参数
    listTableCell() {
      // console.log(row, column, rowIndex, columnIndex);
      // if (rowIndex === 0 && columnIndex === 1) {
      //   return `font-size:12px;`;
      // } else {
      //   return "";
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
$color1: #2d8cf0;
$color2: #173881;
$FFF: #fff;
$borderColor: 1px solid #2d8cf0;
/* 鼠标放上效果 */
.el-table {
  /deep/tbody tr:hover > td {
    background-color: $color1;
  }
  /deep/tbody tr:hover {
    .operate-group .el-button {
      color: $FFF !important;
    }
  }
  //里面的边框颜色
  /deep/ td,
  /deep/ th.is-leaf {
    border-right: $borderColor;
    border-bottom: $borderColor;
  }
  //内容最后一个边框
  /deep/td:nth-last-child(1) {
    border-right: none;
  }
  //头部最后一个的边框
  /deep/ thead th:nth-last-child(2) {
    border-right: none !important;
  }
}
//右侧白边（暂时不知道怎么出来的）
/deep/ .el-table__header {
  width: 100% !important;
  colgroup {
    col:nth-last-child(1) {
      display: none;
    }
  }
}
/deep/.el-table th:nth-last-child(1) {
  display: none !important;
}
/deep/.el-table__body {
  width: 100% !important;
}
//隐藏滚动条
/deep/.el-table--scrollable-y ::-webkit-scrollbar {
  display: none;
}

//多选框默认颜色
/deep/.el-checkbox__inner {
  background: $color2;
  border: $borderColor;
  width: 13px;
  height: 13px;
}

//多选框选中效果
/deep/.el-checkbox__input.is-checked .el-checkbox__inner,
/deep/.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background: $color2;
}
//下面这两个是外面的边框
/deep/.el-table--border,
/deep/.el-table--group {
  border: $borderColor;
}
/deep/.el-table--border::after,
/deep/.el-table--group::after,
/deep/.el-table::before {
  background: $color2;
}
// 操作栏    按钮样式
.operate-group .el-button {
  background-color: rgba(0, 0, 0, 0) !important;
  border: none;
  font-size: 16px;
  color: $color1 !important;
}
/deep/.el-pagination__total,
/deep/.el-pagination__jump {
  color: $FFF;
}
/deep/.el-input__inner {
  color: $color1;
}
/deep/.el-input--mini .el-input__icon {
  color: $color1;
}
/deep/.el-pagination button {
  color: $color1;
}
/deep/.el-table__body-wrapper,
.el-table__footer-wrapper,
.el-table__header-wrapper {
  background: $color2;
}
/deep/.el-radio__label {
  color: rgba(0, 0, 0, 0) !important;
}
/deep/.el-table td {
  padding: 0;
}
</style>
<style lang="scss">
.el-table td.is-center,
.el-table th.is-center {
  white-space: nowrap;
  overflow: hidden;
}
</style>
