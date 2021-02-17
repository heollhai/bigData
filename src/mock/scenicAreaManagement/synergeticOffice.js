// import Mock from "mockjs";

// 图表数据
let list = [];
for (var i = 0; i < 20; i++) {
  list.push({
    name: "北京旅游大会",
    startDate: "2020-01-01",
    endDate: "2020-12-01",
    adddr: "大厦",
    qingkuang: "已完成",
    state: i / 2 === 0 ? 2 : 1,
    type: "中小型"
  });
}
export default {
  synergeticOfficeData: () => {
    return {
      code: 20000,
      data: {
        biaoge: {
          columns: [
            "会议名称",
            "开始时间",
            "结束时间",
            "会议地点",
            "发布情况",
            "会议状态",
            "会议类型"
          ],
          list: list
        }
      }
    };
  }
};
