import Mock from "mockjs";
let data = [];
for (var i = 0; i < 20; i++) {
  data.push({
    data: "2020-1-1",
    addr: "就是哪一个小区" + i + "",
    even: "走失",
    type: i / 2 === 0 ? 1 : 2,
    step: "联系管理人员"
  });
}
export default {
  emergencyManageData() {
    return {
      data: {
        table: data,
        pie: [
          {
            age: "自然灾害",
            num: Mock.Random.float(12, 100, 0, 0)
          },
          {
            age: "公共卫生",
            num: Mock.Random.float(12, 100, 0, 0)
          },
          {
            age: "公共安全",
            num: Mock.Random.float(12, 100, 0, 0)
          },
          {
            age: "公共卫生2",
            num: Mock.Random.float(12, 100, 0, 0)
          },
          {
            age: "无事件分类",
            num: Mock.Random.float(12, 100, 0, 0)
          }
        ],
        pie2: [
          {
            name: "现场预案统计",
            num: Mock.Random.float(1, 100, 0, 0)
          }
        ],
        columnar: {
          xData: ["2020-2", "2020-4", "2020-6", "2020-8", "2020-10", "2020-12"],
          data: [
            {
              value1: Mock.Random.float(50, 100, 0, 0),
              value2: Mock.Random.float(200, 300, 0, 0),
              value3: Mock.Random.float(300, 400, 0, 0),
              value4: Mock.Random.float(400, 500, 0, 0)
            },
            {
              value1: Mock.Random.float(50, 100, 0, 0),
              value2: Mock.Random.float(200, 300, 0, 0),
              value3: Mock.Random.float(300, 400, 0, 0),
              value4: Mock.Random.float(400, 500, 0, 0)
            },
            {
              value1: Mock.Random.float(50, 100, 0, 0),
              value2: Mock.Random.float(200, 300, 0, 0),
              value3: Mock.Random.float(300, 400, 0, 0),
              value4: Mock.Random.float(400, 500, 0, 0)
            },
            {
              value1: Mock.Random.float(50, 100, 0, 0),
              value2: Mock.Random.float(200, 300, 0, 0),
              value3: Mock.Random.float(300, 400, 0, 0),
              value4: Mock.Random.float(400, 500, 0, 0)
            },
            {
              value1: Mock.Random.float(50, 100, 0, 0),
              value2: Mock.Random.float(200, 300, 0, 0),
              value3: Mock.Random.float(300, 400, 0, 0),
              value4: Mock.Random.float(400, 500, 0, 0)
            },
            {
              value1: Mock.Random.float(50, 100, 0, 0),
              value2: Mock.Random.float(200, 300, 0, 0),
              value3: Mock.Random.float(300, 400, 0, 0),
              value4: Mock.Random.float(400, 500, 0, 0)
            }
          ]
        }
      }
    };
  }
};
