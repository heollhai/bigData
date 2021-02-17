//引入封装好的axios
import request from "@/utils/request.js";
//综合大屏
export function homeChart() {
  return request({
    url: "/home/getHomeChart",
    method: "get"
  });
}
//营销分析
export function Markenting() {
  return request({
    url: "/Markenting/getMarkentingData",
    method: "get"
  });
}
//应急管理
export function emergencyManage() {
  return request({
    url: "/emergencyManage/emergencyManageData",
    method: "get"
  });
}
//协同办公
export function synergeticOffice() {
  return request({
    url: "/synergeticOfficeData",
    method: "get"
  });
}
//旅游投诉
export function touristComplaint() {
  return request({
    url: "/touristComplaintData",
    method: "get"
  });
}
//环境保护
export function environmentalProtection() {
  return request({
    url: "/environmentalProtectionData",
    method: "get"
  });
}
