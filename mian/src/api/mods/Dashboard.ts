import http from "@/utils/http";
import { AxiosRequestConfig } from "axios";

export class Dashboard {
  /**
   * 获取内容数据
   *
   * @tags dashboard
   * @request GET: /api/dashboard/content-data
   */
  getContentData = (params: AxiosRequestConfig = {}) =>
    http.request<defs.ResultListContentDataRecord>({
      url: `/api/dashboard/content-data`,
      method: "GET",
      ...params,
    });

  /**
   * 获取消息列表
   *
   * @tags dashboard
   * @request GET: /api/dashboard/popular-list
   */
  getPopularList = (params: AxiosRequestConfig = {}) =>
    http.request<defs.ResultListPopularRecord>({
      url: `/api/dashboard/popular-list`,
      method: "GET",
      ...params,
    });
}

export default new Dashboard();
