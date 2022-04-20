// 一些 页面 的跳转

export const jumpLogin = () => {
  window.location.href = `${import.meta.env.VITE_LOGIN_URL}/login`;
};
// 返回platform 平台首页
export const jumpPlatform = () => {
  window.location.href = `${import.meta.env.VITE_LOGIN_URL}/platform`;
};
