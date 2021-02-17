const resizeChartFunction = {
  methods: {
    resizeChartFun(arr) {
      arr.forEach(element => {
        this.$nextTick(() => {
          if (
            this.$refs === undefined ||
            this.$refs[element] === undefined ||
            this.$refs[element].resizeChart() === undefined
          ) {
            return;
          } else {
            this.$refs[element].resizeChart();
          }
        });
      });
    }
  }
};
export { resizeChartFunction };
