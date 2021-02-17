import Mock from "mockjs";

// 图表数据

export default {
  getStatisticalData: () => {
    return {
      code: 20000,
      data: {
        operation: {
          title: "今日运营",
          data: [
            {
              name: "拥挤指数",
              color: "#2aba80",
              icon: "icon-a5",
              button: "查看详情",
              value: Mock.mock({
                "string|1-5": "★"
              })
            },
            {
              name: "购票人数",
              color: "#dab932",
              icon: "icon-a5",
              button: "查看详情",
              value: "50"
            },
            {
              name: "入园人数",
              color: "#b36fe6",
              icon: "icon-a5",
              button: "查看详情",
              value: "80"
            }
          ]
        },
        total: [
          { name: "咨询量", num: Mock.Random.float(100, 1000, 0, 0) },
          { name: "投诉量", num: Mock.Random.float(100, 1000, 0, 0) },
          { name: "处理率", num: Mock.Random.float(1, 100, 0, 0) },
          { name: "报警量", num: Mock.Random.float(100, 1000, 0, 0) },
          { name: "其他", num: Mock.Random.float(100, 1000, 0, 0) }
        ],
        chear1: [
          {
            name: "10-1",
            num: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "10-2",
            num: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "10-3",
            num: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "10-4",
            num: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "10-5",
            num: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "10-6",
            num: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "10-7",
            num: Mock.Random.float(1000, 10000, 0, 2)
          }
        ],
        chear2: [
          {
            name: "10-1",
            num: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "10-3",
            num: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "10-5",
            num: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "10-7",
            num: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "10-9",
            num: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "10-12",
            num: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "10-15",
            num: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "10-18",
            num: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "10-21",
            num: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "10-24",
            num: Mock.Random.float(1000, 10000, 0, 2)
          }
        ],
        chear3: [
          {
            name: "1号",
            num: Mock.Random.float(1000, 10000, 0, 2),
            num2: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "3号",
            num: Mock.Random.float(1000, 10000, 0, 2),
            num2: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "5号",
            num: Mock.Random.float(1000, 10000, 0, 2),
            num2: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "6号",
            num: Mock.Random.float(1000, 10000, 0, 2),
            num2: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "7号",
            num: Mock.Random.float(1000, 10000, 0, 2),
            num2: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "9号",
            num: Mock.Random.float(1000, 10000, 0, 2),
            num2: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "11号",
            num: Mock.Random.float(1000, 10000, 0, 2),
            num2: Mock.Random.float(1000, 10000, 0, 2)
          }
        ],
        beOnDuty: [
          {
            name: "许xx",
            phong: Mock.Random.float(10000000000, 90000000000, 0, 0),
            icon: "icon-a5",
            duty: "主任"
          },
          {
            name: "许xx",
            phong: Mock.Random.float(10000000000, 90000000000, 0, 0),
            icon: "icon-a5"
          },
          {
            name: "许xx",
            duty: "主任",

            phong: Mock.Random.float(10000000000, 90000000000, 0, 0),
            icon: "icon-a5"
          },
          {
            name: "许xx",
            duty: "主任",

            phong: Mock.Random.float(10000000000, 90000000000, 0, 0),
            icon: "icon-a5"
          },
          {
            name: "许xx",
            duty: "主任",
            phong: Mock.Random.float(10000000000, 90000000000, 0, 0),
            icon: "icon-a5"
          }
        ],
        datas: [
          {
            title: "综合大屏",
            class: "icon-a1",
            route: "/screen"
          },
          {
            title: "视频监控",
            class: "icon-a2",
            route: "/video"
          },
          {
            title: "旅游大数据",
            class: "icon-a3",
            route: "/dataV"
          },
          {
            title: "营销分析",
            class: "icon-a4",
            route: "/marketing"
          },
          {
            title: "应急管理",
            class: "icon-a5",
            route: "/emergencyManage"
          },
          {
            title: "景区地图",
            class: "icon-a6",
            route: "/scMap"
          },
          {
            title: "协同办公",
            class: "icon-a7",
            route: "/synergeticOffice"
          },
          {
            title: "旅游投诉",
            class: "icon-a8",
            route: "/touristComplaint"
          },
          {
            title: "环境保护",
            class: "icon-a9",
            route: "/environmentalProtection"
          },
          {
            title: "呼叫中心",
            class: "icon-a10",
            route: "/callCenter"
          },
          {
            title: "信息发布",
            class: "icon-a11",
            route: "/infoRelease"
          },
          {
            title: "应用后台",
            class: "icon-a12",
            route: "/backstageApplication"
          }
        ]
      }
    };
  }
};
