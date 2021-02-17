const dataTransition = {
  //    yyyy-MM-dd hh:mm:ss  24小时制
  methods: {
    mixindate(fmt) {
      let mixinDate = new Date();
      var o = {
        "M+": mixinDate.getMonth() + 1, //月份
        "d+": mixinDate.getDate(), //日
        "h+": mixinDate.getHours() % 12 == 0 ? 12 : mixinDate.getHours() % 12, //小时
        "H+": mixinDate.getHours(), //小时
        "m+": mixinDate.getMinutes(), //分
        "s+": mixinDate.getSeconds(), //秒
        "q+": Math.floor((mixinDate.getMonth() + 3) / 3), //季度
        S: mixinDate.getMilliseconds() //毫秒
      };
      var week = {
        "0": "/u65e5",
        "1": "/u4e00",
        "2": "/u4e8c",
        "3": "/u4e09",
        "4": "/u56db",
        "5": "/u4e94",
        "6": "/u516d"
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (mixinDate.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      }
      if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (RegExp.$1.length > 1
            ? RegExp.$1.length > 2
              ? "/u661f/u671f"
              : "/u5468"
            : "") + week[mixinDate.getDay() + ""]
        );
      }
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
        }
      }
      return fmt;
    }
  }
};
export { dataTransition };
