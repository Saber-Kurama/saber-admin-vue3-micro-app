export default {
  requestSuccess(config: any) {
    config.headers.common.X_TENANT =
      'eyJkZXBsb3lNb2RlIjoiU0hBUkUiLCJuYW1lc3BhY2UiOiJERUZBVUxUIiwidGVuYW50SWQiOjEwMDAwLCJ1c2VyQWNjb3VudCI6InN1cGVyYWRtaW4iLCJ1c2VySWQiOjExMTExMTEsInVzZXJOYW1lIjoi6LaF57qn566h55CG5ZGYIn0=';
    return config;
  },
};
