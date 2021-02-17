<template>
  <div
    class="synergeticOffice"
    v-loading="!dataType"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div><Top v-if="dataType" :topData="data"></Top></div>
    <div><Bottom v-if="dataType" :bottomData="data"></Bottom></div>
  </div>
</template>

<script>
import Top from "../scenicAreaManagement/cnmponents/synergeticOffice/top";
import Bottom from "../scenicAreaManagement/cnmponents/synergeticOffice/bottom";
import { synergeticOffice } from "@/api/scenicAreaManagement/home";
export default {
  components: {
    Top,
    Bottom
  },
  data() {
    return {
      dataType: false,
      data: {}
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    synergeticOffice().then(res => {
      this.data = res.data;
      this.dataType = true;
    });
  },
  mounted() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
.synergeticOffice {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  > div:nth-of-type(1) {
    width: 100%;
    height: 100%;
  }
  > div:nth-of-type(2) {
    width: 100%;
    height: 100%;
  }
}
</style>
