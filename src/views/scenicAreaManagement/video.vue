<template>
  <div class="video">
    <iframe
      id="iframeV"
      src="http://video.citgroup.cn/"
      frameborder="0"
      width="100%"
    ></iframe>
    <!-- <div class="left">
      <div>
        <LeftTop></LeftTop>
      </div>
      <div>
        <LeftBottom></LeftBottom>
      </div>
    </div>
    <div class="right">
      <Right></Right>
    </div> -->
  </div>
</template>

<script>
// import LeftTop from "./cnmponents/video/left_top";
// import LeftBottom from "./cnmponents/video/left_bottom";
// import Right from "./cnmponents/video/righe";
export default {
  components: {
    // LeftTop,
    // LeftBottom,
    // Right,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
.video {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    flex: 8;
    display: flex;
    flex-direction: column;
    > div {
      width: 100%;
      height: 100%;
    }
    > div:nth-of-type(1) {
      flex: 6;
    }
    > div:nth-of-type(2) {
      flex: 4;
    }
  }
  .right {
    flex: 2;
  }
}
</style>
