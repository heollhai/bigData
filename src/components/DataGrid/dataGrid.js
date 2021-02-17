const DataGridInitData = {
  data() {
    return {
      dataGrid: {
        dataGridType: false,
        // 全局属性
        options: {
          height: "calc(100% - 40px)",
          loading: true,
          multiSelect: 1,
          size:16,//字体大小
          tall:50,//行高
        },
        // 列表数据
        list: [],
        // 列属性
        columns: [
          //  {
          //   // align: "center",
          //   // hidden: false,
          //   // label: this.bottomData.biaoge.columns[key],
          //   // prop: ele,
          //  }
        ],
        // 操作列
        operates: {
          // label: "操作",
          // // 操作列宽度
          // width: "100px",
          // // 操作列是否隐藏
          hidden: true,
          // // 操作列的具体按钮
          // list: [
          //   {
          //     label: "详情",
          //     hidden: false,
          //     method: (scope, index) => {
          //       this.showEvnInfo(scope, index);
          //     }
          //   },
          // ]
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
  }
};
export {
  DataGridInitData
};