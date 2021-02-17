import Mock from "mockjs";
import homeApi from "./scenicAreaManagement/home.js";
import Markenting from "./scenicAreaManagement/markenting";
import emergencyManage from "./scenicAreaManagement/emergencyManage";
import synergeticOffice from "./scenicAreaManagement/synergeticOffice";
import touristComplaint from "./scenicAreaManagement/touristComplaint";
import environmentalProtection from "./scenicAreaManagement/environmentalProtection";

// 设置200-2000毫秒延时请求数据
Mock.setup({
  timeout: "600-1000"
});

// 首页相关
// 拦截的是 
Mock.mock(/\/api\/home\/getHomeChart/, "get", homeApi.getStatisticalData);
Mock.mock(
  /\/api\/environmentalProtectionData/,
  "get",
  environmentalProtection.environmentalProtectionData
);
Mock.mock(
  /\/api\/synergeticOfficeData/,
  "get",
  synergeticOffice.synergeticOfficeData
);
Mock.mock(
  /\/api\/touristComplaintData/,
  "get",
  touristComplaint.touristComplaintData
);
Mock.mock(
  /\/api\/Markenting\/getMarkentingData/,
  "get",
  Markenting.markentingData
);
Mock.mock(
  /\/api\/emergencyManage\/emergencyManageData/,
  "get",
  emergencyManage.emergencyManageData
);
