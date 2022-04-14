// @ts-ignore
import cookie from 'js-cookie';

// 普通函数
const isIpPort = (str: string) => {
  const arr1 = str.split(':') as any;
  if (arr1.length === 2) {
    const ip = arr1[0];
    const arr = ip.split('.');
    if (arr.length === 4) {
      return {
        is: true,
        ip,
      };
    }
  }
  return {
    is: false,
    ip: '',
  };
};

export const getDomain = () => {
  let { href } = window.location;
  try {
    href = href.replace('http://', '').replace('https://', '');
    // eslint-disable-next-line prefer-destructuring
    href = href.split('/')[0];
    const res = isIpPort(href);
    if (res.is) {
      return res.ip;
    }
    const splited = href.split('.');
    href = splited.splice(1, splited.length - 1).join('.');
    return href;
  } catch (error) {
    console.error(error);
    return href;
  }
};

export const getCookie = (key: string) => {
  const t = cookie.get(key) as string;
  return t;
};
export const clearCookie = (key: string) => {
  cookie.remove(key, {
    path: '/',
    domain: getDomain(),
    expires: -1,
  });
};
