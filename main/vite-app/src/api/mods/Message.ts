import http from "@/utils/http";
import { AxiosRequestConfig } from "axios";

export class Message {
  /**
   * 获取消息列表
   *
   * @tags message
   * @request GET: /api/message/list
   */
  getList = (params: AxiosRequestConfig = {}) =>
    http.request<defs.ResultListMessageRecord>({
      url: `/api/message/list`,
      method: "GET",
      ...params,
    });

  /**
   * 获取消息列表
   *
   * @tags message
   * @request POST: /api/message/read
   */
  postRead = (data: { ids?: number[] }, params: AxiosRequestConfig = {}) =>
    http.request<defs.ResultListMessageRecord>({
      url: `/api/message/read`,
      method: "POST",
      data: data,
      ...params,
    });
}

export default new Message();
