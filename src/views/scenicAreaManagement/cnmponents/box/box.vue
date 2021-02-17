<template>
  <div class="box">
    <p>{{ title }}</p>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  components: {},
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
@import "@/assets/scss/scenicAreaManagement/_varlable.scss";
.box {
  padding: 20px 10px 0px 10px;
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  > p {
    background: $header_bgB;
    padding: 10px 15px;
    margin: 0;
    color: #fff;
    font-size: 18px;
    margin-bottom: 3px;
    border-radius: 5px;
  }
  > div {
    background: $content_bg3;
    height: calc(100% - 63px);
    border-radius: 5px;
    padding: 10px 8px;
    > div {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background: #173881;
    }
  }
}
</style>
