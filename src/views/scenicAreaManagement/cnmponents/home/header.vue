<template>
  <header class="header">
    <div class="header_left">
      <div>
        <img src="~@/assets/scenicAreaManagement/images/logo1.png" />
        <span>{{ name }}</span>
      </div>
      <div>
        <span>{{ newdate }}</span>
      </div>
    </div>
    <div class="header_right">
      <div
        :key="item.name"
        v-for="(item, key) in headerData"
        @click="headerTo(key, item.route)"
        :class="{
          activateColor: $route.path === '/scenicAreaManagement' + item.route
        }"
      >
        <i :class="item.class"></i>
        <div>{{ item.title }}</div>
      </div>
    </div>
  </header>
</template>
<script>
import { dataTransition } from "@/components/mixin/date.js";
export default {
  props: {
    headerData: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  mixins: [dataTransition],
  computed: {},
  created() {
    this.date();
  },
  destroyed() {
    //清除定时器
    clearInterval(this.time);
  },
  methods: {
    date() {
      clearInterval(this.time);
      this.time = setInterval(() => {
        this.newdate = this.mixindate("yyyy-MM-dd hh:mm:ss");
      }, 1000);
    },
    headerTo(key, path) {
      //点击变色
      this.activate = key;
      this.$router.push({ path: "/scenicAreaManagement" + path });
    }
  },
  data() {
    return {
      time: null,
      activate: 0,
      newdate: "",
      name: "景区综合管理平台"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/scenicAreaManagement/_varlable.scss";

.header {
  width: 100%;
  height: 170px;
  background-image: linear-gradient(to bottom, #3b72ee, #012352);
  display: flex;
  flex-direction: column;
  color: $theme_colorFFF;
  font-size: $size28;
  &_left {
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: $size14;
    border-bottom: 1px solid #000;
    padding: 0 40px;
    img {
      height: 33px;
      width: 133px;
    }
    > div {
      white-space: nowrap;
      display: flex;
      align-items: center;
      > span {
        margin-left: 20px;
      }
    }
  }
  &_right {
    height: 80px;
    display: flex;
    border-left: 1px solid #333;
    background: $header_bg;
    > div {
      cursor: default;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      > i {
        font-size: $size28;
      }
      > div {
        margin-top: 10px;
        font-size: $size14;
      }
    }
  }
  .activateColor {
    background: $content_bg;
  }
}
</style>
