<template>
  <div class="box">
    <template v-for="(item, index) in menu">
      <div
        :key="item.name"
        :class="{ cliclColor: menuIndex === index }"
        @click="pathTo(item.path, index)"
      >
        {{ item.name }}21312
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "scenicAreaManagement",
  data() {
    return {
      menuIndex: -1,
      menu: [{ name: "景区综合管理平台" }]
    };
  },
  created() {},
  methods: {
    //页面跳转
    pathTo(path, index) {
      this.menuIndex = index;
      this.$router.push({ path: path });
    },
    getMenu() {
      this.menu.map((item, index) => {
        item.path = this.$router.options.routes[index + 1].path;
      });
    }
  },
  mounted() {
    this.getMenu();
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100vh;
  height: 100vh;
  display: flex;
  margin: 40px 40px;
  justify-content: space-between;
  > div {
    width: 25%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 10px 10px 5px $theme_shadow;
    color: $theme_color;
  }
  .cliclColor {
    background: $theme_bg;
    color: $theme_colorFFF;
  }
}
</style>
