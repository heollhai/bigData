import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/scenicAreaManagement",
    name: "scenicAreaManagement",
    redirect: "/scenicAreaManagement/screen",
    component: () =>
      import(
        /* webpackChunkName: "scenicAreaManagement" */
        "@/views/scenicAreaManagement"
      ),
    children: [
      {
        //综合大屏
        path: "/scenicAreaManagement/screen",
        name: "screen",
        component: () =>
          import(
            /* webpackChunkName: "screen" */
            "@/views/scenicAreaManagement/screen"
          )
      },
      {
        //视屏监控
        path: "/scenicAreaManagement/video",
        name: "video",
        component: () =>
          import(
            /* webpackChunkName: "video" */
            "@/views/scenicAreaManagement/video"
          )
      },
      {
        //旅游大数据
        path: "/scenicAreaManagement/dataV",
        name: "dataV",
        component: () =>
          import(
            /* webpackChunkName: "dataV" */
            "@/views/scenicAreaManagement/dataV"
          )
      },
      {
        //营销分析
        path: "/scenicAreaManagement/marketing",
        name: "marketing",
        component: () =>
          import(
            /* webpackChunkName: "marketing" */
            "@/views/scenicAreaManagement/marketing"
          )
      },
      {
        //应急管理
        path: "/scenicAreaManagement/emergencyManage",
        name: "emergencyManage",
        component: () =>
          import(
            /* webpackChunkName: "emergencyManage" */
            "@/views/scenicAreaManagement/emergencyManage"
          )
      },
      {
        //景区地图
        path: "/scenicAreaManagement/scMap",
        name: "scMap",
        component: () =>
          import(
            /* webpackChunkName: "scMap" */
            "@/views/scenicAreaManagement/scMap"
          )
      },
      {
        //协同办公
        path: "/scenicAreaManagement/synergeticOffice",
        name: "synergeticOffice",
        component: () =>
          import(
            /* webpackChunkName: "synergeticOffice" */
            "@/views/scenicAreaManagement/synergeticOffice"
          )
      },
      {
        //旅游投诉
        path: "/scenicAreaManagement/touristComplaint",
        name: "touristComplaint",
        component: () =>
          import(
            /* webpackChunkName: "touristComplaint" */
            "@/views/scenicAreaManagement/touristComplaint"
          )
      },
      {
        //环境保护
        path: "/scenicAreaManagement/environmentalProtection",
        name: "environmentalProtection",
        component: () =>
          import(
            /* webpackChunkName: "environmentalProtection" */
            "@/views/scenicAreaManagement/environmentalProtection"
          )
      },
      {
        //呼叫中心
        path: "/scenicAreaManagement/callCenter",
        name: "callCenter",
        component: () =>
          import(
            /* webpackChunkName: "callCenter" */
            "@/views/scenicAreaManagement/callCenter"
          )
      },
      {
        //信息发布
        path: "/scenicAreaManagement/infoRelease",
        name: "infoRelease",
        component: () =>
          import(
            /* webpackChunkName: "infoRelease" */
            "@/views/scenicAreaManagement/infoRelease"
          )
      },
      {
        //应用后台
        path: "/scenicAreaManagement/backstageApplication",
        name: "backstageApplication",
        component: () =>
          import(
            /* webpackChunkName: "backstageApplication" */
            "@/views/scenicAreaManagement/backstageApplication"
          )
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
