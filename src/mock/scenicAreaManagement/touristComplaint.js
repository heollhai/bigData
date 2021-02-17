import Mock from "mockjs";

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
  touristComplaintData: () => {
    return {
      code: 20000,
      data: {
        color: [
          "#F29E9E",
          "#5EA5DA",
          "#B7E589",
          "#9CCDFB",
          "#C4A7CE",
          "#F3A397",
          "#8F6857",
          "#7A51E2"
        ],
        pie: [
          {
            name: "图片",
            num: Mock.Random.float(100, 1000, 0, 0)
          },
          {
            name: "来访",
            num: Mock.Random.float(100, 1000, 0, 0)
          },
          {
            name: "电话",
            num: Mock.Random.float(100, 1000, 0, 0)
          },
          {
            name: "网络",
            num: Mock.Random.float(100, 1000, 0, 0)
          },
          {
            name: "12306",
            num: Mock.Random.float(100, 1000, 0, 0)
          }
        ],
        columnar: [
          {
            name: "一月",
            num: Mock.Random.float(100, 1000, 0, 0)
          },
          {
            name: "二月",
            num: Mock.Random.float(100, 1000, 0, 0)
          },
          {
            name: "三月",
            num: Mock.Random.float(100, 1000, 0, 0)
          },
          {
            name: "四月",
            num: Mock.Random.float(100, 1000, 0, 0)
          },
          {
            name: "五月",
            num: Mock.Random.float(100, 1000, 0, 0)
          },
          {
            name: "六月",
            num: Mock.Random.float(100, 1000, 0, 0)
          },
          {
            name: "七月",
            num: Mock.Random.float(100, 1000, 0, 0)
          },
          {
            name: "八月",
            num: Mock.Random.float(100, 1000, 0, 0)
          }
        ],
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
