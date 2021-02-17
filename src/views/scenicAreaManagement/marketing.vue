<template>
  <div
    class="marketing"
    v-loading="!dataType"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <Top v-if="dataType" :topData="topData"></Top>
    <Buttom v-if="dataType" :bottomData="bottomData"></Buttom>
  </div>
</template>

<script>
import Top from "./cnmponents/marketing/top";
import Buttom from "./cnmponents/marketing/bottom";
import { Markenting } from "@/api/scenicAreaManagement/home";
export default {
  components: { Top, Buttom },
  data() {
    return {
      topData: {},
      dataType: false
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    Markenting().then(res => {
      this.topData = {
        columnar: res.data.columnar,
        columnar2: res.data.columnar3,
        pie: res.data.pie,
        antistop: res.data.antistop
      };
      this.bottomData = {
        pie: res.data.pie2,
        columnar: res.data.columnar2,
        columnar2: res.data.columnar3
      };
      this.dataType = true;
    });
  },
  mounted() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
.marketing {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
