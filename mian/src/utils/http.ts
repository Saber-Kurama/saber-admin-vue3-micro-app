// 摒弃掉了 saber-http
// 原因是 目前 saber-http 原本是想做一个集成重试，防抖，并发，轮询等成一个 大的 request 库
// 但是目前一直只有一个 判断 code ，和 添加请求头的功能 以及错误code的提示功能
// 关于重试，并发等功能是直接用 useRequest 这类的库 还是 最终生成一个大的 request库 这个得再需要斟酌一下
// 这里将 逻辑暴露出来 更加方便 修改
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import authToken from './saber-http/authToken';
import devToken from './saber-http/devToken';
import responseHandler from './saber-http/responseHandler';

const contentType = 'application/json';
const requestTimeout = 10000;
export interface HttpResponse<T = unknown> {
  success: boolean;
  desc: string;
  code: string;
  data: T;
}
export interface AxiosInstanceCover extends AxiosInstance {
  request<T = any>(config: AxiosRequestConfig): Promise<T>;
  // request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>;
}
const instance: AxiosInstanceCover = axios.create({
  timeout: requestTimeout,
  headers: {
    'Content-Type': contentType,
  },
} as AxiosRequestConfig);
// 原本 saber-http 就是利用了拦截器
// 请求拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    let newConfig = authToken.requestSuccess(config);
    const { DEV } = import.meta.env;
    if (DEV) {
      newConfig = devToken.requestSuccess(newConfig);
    }
    return newConfig;
  },
  (error: Error | AxiosError) => {
    return Promise.reject(error);
  },
);
// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse<HttpResponse>) => {
    return responseHandler.responseSuccess(response);
  },
  (error) => {
    return responseHandler.responseError(error);
  },
);

export default instance;
