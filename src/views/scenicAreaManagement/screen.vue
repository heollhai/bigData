<template>
  <div style="height:100%;width:100%;">
    <Content style="height:100%;" v-if="!types" :datas="datas"></Content>
    <Loading :types="types"></Loading>
  </div>
</template>

<script>
import { homeChart } from "@/api/scenicAreaManagement/home";
import Content from "./cnmponents/home/content";
import Loading from "./cnmponents/box/loading";

export default {
  components: { Content, Loading },
  data() {
    return {
      types: true, //是否在加载
      datas: {}
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    homeChart().then(res => {
      this.datas = res.data;
      this.types = false;
    });
  },
  mounted() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped></style>
