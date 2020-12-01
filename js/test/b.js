// 原来的数据格式json
{
    "label": [
      "第一季度",
      "第二季度",
      "第三季度",
      "第四季度"
    ],
    "value": [
      {
        "name": "2017",
        "data": [
          358,
          558,
          934,
          692
        ]
      },
      {
        "name": "2018",
        "data": [
          445,
          857,
          732,
          610
        ]
      },
      {
        "name": "2019",
        "data": [
          635,
          712,
          812,
          824
        ]
      }
    ]
  }
// 传入的格式json
[
    {
        "collectquarter": 1,
        "sumoutputvalue": 97.31999999999998,
        "collcetyear": 2018
    }
]
//数据处理
return function (response, ruleValue, queries) {
    const data = cloumn(response.content)
    if (data) {
      // 数据成功返回，调用 this.resolve 方法，参数为数据
      this.resolve(data)
    } else {
      // 数据异常，调用 this.reject 方法，参数为消息字符串
      this.reject(response.message)
    }
  }
  function cloumn(data) {
      const result = []

      data.forEach(({ collectquarter, sumoutputvalue, collcetyear }) => {
          const index = result.findIndex(item => item.name === collcetyear)
          if (index === -1) {
              const data = new Array(4).fill(null)
              data[collectquarter - 1] = sumoutputvalue
              result.push({
                  name: collcetyear,
                  data,
              })
          } else {
              result[index].data[collectquarter - 1] = sumoutputvalue
          }
      })

      const a = {
          "label": [
              "第一季度",
              "第二季度",
              "第三季度",
              "第四季度"
            ],
            "value":result
      }
      return a
  }