import Mock from "mockjs";

// 图表数据
let data = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日", ]
export default {
  environmentalProtectionData: () => {
    return {
      code: 20000,
      data: {
        grand: {
          name: ["巡护时间段", "巡护次数", "巡护人员", "巡护覆盖面积", "巡护有效记录", "发现动物", "植物物候记录", "设备设施记录", "巡护距离总计"],
          data: [{
              value: "上午9:00 ~ 下午6:00"
            },
            {
              value: Mock.Random.float(1, 100, 0, 0)+"次"
            },
            {
              value: "赵xx"
            },
            {
              value: Mock.Random.float(1, 100, 0, 0) + "平方公里"
            },
            {
              value: Mock.Random.float(3, 4, 0, 0)
            },
            {
              value: Mock.Random.float(3, 4, 0, 0)
            },
            {
              value: Mock.Random.float(1, 2, 0, 0)
            },
            {
              value: Mock.Random.float(1, 2, 0, 0)
            },
            {
              value: Mock.Random.float(1000, 20000, 0, 0) + "米"
            },
          ],
        },
        columnar: {
          xData: data,
          data: [{
            name: "水质纯净度",
            num: Mock.Random.float(100, 1000, 0, 2)
          }, {
            name: "水质纯净度",
            num: Mock.Random.float(100, 1000, 0, 2)
          }, {
            name: "水质纯净度",
            num: Mock.Random.float(100, 1000, 0, 2)
          }, {
            name: "水质纯净度",
            num: Mock.Random.float(100, 1000, 0, 2)
          }, {
            name: "水质纯净度",
            num: Mock.Random.float(100, 1000, 0, 2)
          }, {
            name: "水质纯净度",
            num: Mock.Random.float(100, 1000, 0, 2)
          }, {
            name: "水质纯净度",
            num: Mock.Random.float(100, 1000, 0, 2)
          }, ]
        },
        noise: {
          xData: data,
          data: [{
            name: "噪音量",
            num: Mock.Random.float(100, 1000, 0, 2)
          }, {
            name: "噪音量",
            num: Mock.Random.float(100, 1000, 0, 2)
          }, {
            name: "噪音量",
            num: Mock.Random.float(100, 1000, 0, 2)
          }, {
            name: "噪音量",
            num: Mock.Random.float(100, 1000, 0, 2)
          }, {
            name: "噪音量",
            num: Mock.Random.float(100, 1000, 0, 2)
          }, {
            name: "水质纯净度",
            num: Mock.Random.float(100, 1000, 0, 2)
          }, {
            name: "水质纯净度",
            num: Mock.Random.float(100, 1000, 0, 2)
          }, ]
        },
        liZi: {
          xData: data,
          data: [{
            name: "噪音量",
            num: Mock.Random.float(1000, 10000, 0, 2)
          }, {
            name: "噪音量",
            num: Mock.Random.float(1000, 10000, 0, 2)
          }, {
            name: "噪音量",
            num: Mock.Random.float(1000, 10000, 0, 2)
          }, {
            name: "噪音量",
            num: Mock.Random.float(1000, 10000, 0, 2)
          }, {
            name: "噪音量",
            num: Mock.Random.float(1000, 10000, 0, 2)
          }, {
            name: "水质纯净度",
            num: Mock.Random.float(1000, 10000, 0, 2)
          }, {
            name: "水质纯净度",
            num: Mock.Random.float(100, 1000, 0, 2)
          }, ]
        },
        biaoge1: {
          label: ["植物类别", "植物名称", "物种介绍"],
          data: [{
              state: "种子植物",
              name: "马尾松",
              wuzhong: "乔木"
            },
            {
              state: "孢子植物",
              name: "蘑菇",
              wuzhong: "蘑菇科"
            },
            {
              state: "裸子植物",
              name: "银杏",
              wuzhong: "落叶乔木"
            },
          ]
        },
        biaoge2: {
          label: ["动物类别", "动物名称", "动物介绍"],
          data: [{
              state: "哺乳动物",
              name: "长颈鹿",
              wuzhong: "哺乳类,偶蹄目"
            },
            {
              state: "雀科动物",
              name: "麻雀",
              wuzhong: "雀科雀属的鸟类"
            },
            {
              state: "蚁科动物",
              name: "蚂蚁",
              wuzhong: "昆虫、节肢动物门"
            },
          ]
        },
        biaoge3: {
          label: ["地址类型", "分布情况"],
          data: [{
              state: "松软土",
              wuzhong: "疏松的种植土、淤泥"
            },
            {
              state: "普通土",
              wuzhong: "粉质黏土"
            },
            {
              state: "砂砾碱土",
              wuzhong: "疏松的种植土、淤泥"
            },
          ]
        },
      }
    };
  }
};