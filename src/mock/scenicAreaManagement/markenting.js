import Mock from "mockjs";
export default {
  markentingData() {
    return {
      data: {
        code: 2000,
        antistop: [
          {
            name: "九寨沟",
            value: 10000
          },
          {
            name: "驴友",
            value: 6181
          },
          {
            name: "篝火晚会",
            value: 4386
          },
          {
            name: "海景别墅",
            value: 4055
          },
          {
            name: "旅游客体",
            value: 2467
          },
          {
            name: "土耳其",
            value: 2244
          },
          {
            name: "国内游",
            value: 1898
          },
          {
            name: "景区热点",
            value: 1484
          },
          {
            name: "旅游攻略",
            value: 1112
          },
          {
            name: "四川",
            value: 965
          },
          {
            name: "云南",
            value: 847
          },
          {
            name: "长白山",
            value: 582
          },
          {
            name: "自驾游",
            value: 555
          },
          {
            name: "大海",
            value: 550
          },
          {
            name: "TOP10",
            value: 462
          },
          {
            name: "世界上最浪漫的春天",
            value: 366
          },
          {
            name: "投诉建议",
            value: 360
          },
          {
            name: "热门娱乐项目",
            value: 282
          },
          {
            name: "购物",
            value: 273
          },
          {
            name: "旅游评价",
            value: 265
          },
          {
            name: "安心出游",
            value: 866
          },
          {
            name: "夏季避暑",
            value: 760
          },
          {
            name: "大熊猫",
            value: 682
          },
          {
            name: "泸沽湖",
            value: 1523
          },
          {
            name: "热门娱乐",
            value: 465
          }
        ],
        pie: [
          {
            age: "1",
            num: Mock.Random.float(58, 100, 0, 0)
          },
          {
            age: "2",
            num: Mock.Random.float(58, 100, 0, 0)
          }
        ],
        pie2: [
          {
            age: "今天",
            num: Mock.Random.float(1, 100, 0, 0)
          },
          {
            age: "昨天",
            num: Mock.Random.float(1, 100, 0, 0)
          },
          {
            age: "明天",
            num: Mock.Random.float(1, 100, 0, 0)
          }
        ],
        columnar: {
          xData: ["18岁以下", "20-30", "30-40", "40-50", "50以上"],
          data: [
            {
              age: Mock.Random.float(1, 100, 0, 0),
              num: Mock.Random.float(1, 100, 0, 0)
            },
            {
              age: Mock.Random.float(1, 100, 0, 0),
              num: Mock.Random.float(1, 100, 0, 0)
            },
            {
              age: Mock.Random.float(1, 100, 0, 0),
              num: Mock.Random.float(1, 100, 0, 0)
            },
            {
              age: Mock.Random.float(1, 100, 0, 0),
              num: Mock.Random.float(1, 100, 0, 0)
            },
            {
              age: Mock.Random.float(1, 100, 0, 0),
              num: Mock.Random.float(1, 100, 0, 0)
            }
          ]
        },
        columnar2: {
          xData: [
            "辽宁",
            "湖南",
            "湖北",
            "四川",
            "河南",
            "安徽",
            "河北",
            "上海",
            "天津",
            "北京"
          ],
          data: [
            {
              age: "1",
              num: Mock.Random.float(1, 100, 0, 0)
            },
            {
              age: "2",
              num: Mock.Random.float(1, 100, 0, 0)
            },
            {
              age: "3",
              num: Mock.Random.float(1, 100, 0, 0)
            },
            {
              age: "4",
              num: Mock.Random.float(1, 100, 0, 0)
            },
            {
              age: "5",
              num: Mock.Random.float(1, 100, 0, 0)
            },
            {
              age: "6",
              num: Mock.Random.float(1, 100, 0, 0)
            },
            {
              age: "7",
              num: Mock.Random.float(1, 100, 0, 0)
            },
            {
              age: "8",
              num: Mock.Random.float(1, 100, 0, 0)
            },
            {
              age: "9",
              num: Mock.Random.float(1, 100, 0, 0)
            },
            {
              age: "10",
              num: Mock.Random.float(1, 100, 0, 0)
            }
          ]
        },
        columnar3: {
          xData: ["同城", "携程", "驴妈妈", "去哪儿", "景区官网"],
          data: [
            {
              age: "1",
              num: Mock.Random.float(1, 100, 0, 0),
              num2: Mock.Random.float(1, 100, 0, 0)
            },
            {
              age: "2",
              num: Mock.Random.float(1, 100, 0, 0),
              num2: Mock.Random.float(1, 100, 0, 0)
            },
            {
              age: "3",
              num: Mock.Random.float(1, 100, 0, 0),
              num2: Mock.Random.float(1, 100, 0, 0)
            },
            {
              age: "4",
              num: Mock.Random.float(1, 100, 0, 0),
              num2: Mock.Random.float(1, 100, 0, 0)
            },
            {
              age: "5",
              num2: Mock.Random.float(1, 100, 0, 0),
              num: Mock.Random.float(1, 100, 0, 0)
            }
          ]
        }
      }
    };
  }
};
