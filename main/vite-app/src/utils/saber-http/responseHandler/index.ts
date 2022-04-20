import { Notification, Message } from '@arco-design/web-vue';

const name = 'responseHandler';
const defalutIsSuccess = (data: any) => data.code === '00000' || false;
const responseSuccess = (response: any) => {
  const { data, config } = response;
  const isSuccess = config[name]?.isSuccess || defalutIsSuccess;
  if (data && isSuccess(data)) {
    return data;
  }
  if (config.responseHandler.errorHandler) {
    // TODO： 判断是否是方法
    config.responseHandler.errorHandler(data);
    return data;
  }
  Message.error(data.desc);
  return data;
};

const responseError = (error: any) => {
  Notification.error({
    title: '请求接口出错',
    content: error.message,
    closable: true,
  });
  return Promise.reject(error);
};

export default {
  responseSuccess,
  responseError,
};
