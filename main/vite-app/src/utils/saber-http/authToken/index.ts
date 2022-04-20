import * as auth from '../../auth';

export default {
  requestSuccess(config: any) {
    config.headers.common[auth.TOKEN_KEY] = auth.getToken();
    return config;
  },
};
