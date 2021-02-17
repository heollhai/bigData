import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
// import "lib-flexible"
//scenicAreaManagement  里面图标
import "@/assets/scenicAreaManagement/font/icon.css";
import "@/assets/scenicAreaManagement/font/style.css";
// mock  数据
import "./mock";

import "default-passive-events";
//滚动条
import GeminiScrollbar from "vue-gemini-scrollbar";
Vue.use(GeminiScrollbar);

import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
