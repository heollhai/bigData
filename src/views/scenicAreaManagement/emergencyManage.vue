<template>
  <div
    class="emergencyManage"
    v-loading="!bottomType"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div>
      <Top v-if="bottomType"></Top>
    </div>
    <div>
      <Bottom v-if="bottomType" :bottomData="bottomData"></Bottom>
    </div>
  </div>
</template>

<script>
import Bottom from "../scenicAreaManagement/cnmponents/emergencyManage/bottom";
import Top from "../scenicAreaManagement/cnmponents/emergencyManage/top";
import { emergencyManage } from "@/api/scenicAreaManagement/home";

export default {
  components: { Bottom, Top },
  data() {
    return {
      bottomData: {},
      bottomType: false
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    emergencyManage().then(res => {
      this.bottomData = {
        pie: res.data.pie2,
        table: res.data.table
      };
      setTimeout(() => {
        this.bottomType = true;
      }, 1000);
    });
  },
  mounted() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
.emergencyManage {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  > div {
    flex: 1;
    height: 100%;
    width: 100%;
  }
}
</style>
