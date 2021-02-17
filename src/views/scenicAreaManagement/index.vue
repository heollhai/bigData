<template>
  <div style="height:100%;">
    <Header :headerData="datas.datas"></Header>
    <div style="height:calc(100vh - 171px)">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { homeChart } from "@/api/scenicAreaManagement/home";
import { skipPath } from "../../components/skip/skip.js";
import Header from "./cnmponents/home/header";
export default {
  name: "scenicAreaManagementIndex",
  components: {
    Header
    // Content
  },
  created() {
    homeChart().then(res => {
      this.datas = res.data;
    });
  },
  mixins: [skipPath],
  data() {
    return {
      datas: {}
    };
  },
  mounted() {},
  methods: {
    app() {
      this.skip("/");
    }
  }
};
</script>

<style></style>
