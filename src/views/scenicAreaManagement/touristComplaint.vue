<template>
  <div
    class="touristComplaint"
    v-loading="!dataType"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div><Top v-if="dataType" :topData="topData"></Top></div>
    <div><Bottom v-if="dataType" :bottomData="bottomData"></Bottom></div>
  </div>
</template>

<script>
import Top from "./cnmponents/touristComplaint/top";
import Bottom from "./cnmponents/touristComplaint/bottom";
import { touristComplaint } from "@/api/scenicAreaManagement/home";
export default {
  components: {
    Top,
    Bottom
  },
  data() {
    return {
      dataType: false,
      topData: {},
      bottomData: {}
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    touristComplaint().then(res => {
      this.topData = {
        pie: res.data.pie,
        color: res.data.color,
        columnar: res.data.columnar
      };
      this.bottomData = res.data;
      this.dataType = true;
      console.log(this.topData, "res[[===");
    });
  },
  mounted() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/scenicAreaManagement/_varlable.scss";
.touristComplaint {
  background: $content_bg;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  > div {
    flex: 1;
  }
}
</style>
