<template>
  <div
    class="environmentalProtection"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div><Top v-if="!loading" :topData="topData"></Top></div>
    <div><Bottom v-if="!loading" :buttomData = "buttomData"></Bottom></div>
  </div>
</template>

<script>
import Top from "./cnmponents/environmentalProtection/top";
import Bottom from "./cnmponents/environmentalProtection/bottom";
import { environmentalProtection } from "@/api/scenicAreaManagement/home.js";
export default {
  components: {
    Top,
    Bottom,
  },
  data() {
    return {
      loading: true,
      topData: {},
      buttomData: {},
    };
  },
  computed: {},
  watch: {},
  methods: {
    resize() {
      this.loading = true;
      this.$nextTick(()=>{
        this.loading =false
      })
    },
  },
  created() {
    environmentalProtection().then((res) => {
      this.topData = {
        shuiZhi: res.data.columnar,
        noise: res.data.noise,
        grand:res.data.grand
      };
      this.buttomData = {
        liZi: res.data.liZi,
        biaoge1: res.data.biaoge1,
        biaoge2: res.data.biaoge2,
        biaoge3: res.data.biaoge3,
      };
      console.log(this.buttomData,'底部数据')
      this.loading = false;
    });
  },
  mounted() {
    window.addEventListener("resize", this.resize);

  },
  destroyed() {},
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/scenicAreaManagement/_varlable.scss";
.environmentalProtection {
  height: 100%;
  width: 100%;
  background: $content_bg;
  display: flex;
  flex-direction: column;
  > div {
    flex: 1;
  }
}
</style>
