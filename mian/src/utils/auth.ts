// TODO：前端是否需要 关心token的有效时间(交给后端吧)
// todo: 依旧采用 cookies 的方案 后续修改 localStorage 的方案
import { clearCookie, getCookie } from './cookie';

const TOKEN_KEY = 'access-token';

const getToken = () => {
  return getCookie(TOKEN_KEY);
};

const setToken = (_token: string) => {
  // localStorage.setItem(TOKEN_KEY, token);
};

const clearToken = () => {
  clearCookie(TOKEN_KEY);
};

const isLogin = () => {
  return !!getToken();
};
export { isLogin, getToken, setToken, clearToken, TOKEN_KEY };
