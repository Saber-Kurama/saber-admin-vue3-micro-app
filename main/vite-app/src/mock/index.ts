import Mock from 'mockjs';
// TODO: 如何解决 没有 UMS 服务的状况
// import './user';
import './message-box';

import '@/views/dashboard/workplace/mock';

Mock.setup({
  timeout: '600-1000',
});
