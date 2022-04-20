// TODO： 暂时不考虑多种适配方案，只考虑 dev 环境 (dev 环境走 all 模式)

import { defineStore } from 'pinia';
import { reactive, toRefs } from 'vue';
import http from '@/utils/http';
import { MeunsState } from './types';

// 获取菜单数据
const fetchMenuList = async () => {
  try {
    // @ts-ignore
    const result = await http.get(`${import.meta.env.VITE_USER_URL}?systemCode=dmsx&moduleCode=`, {
      baseURL: '',
    });
    // @ts-ignore
    if (!result.success) {
      return [];
    }

    return result.data?.menuList?.[0]?.childrens || [];
  } catch (e) {
    console.log('e', e);
    return [];
  }
};

const useMenusStore = defineStore('menus', () => {
  const state = reactive({
    menus: [],
  } as MeunsState);
  const getMenuList = async () => {
    console.log('getMenuList', getMenuList);
    let menus: any[] = [];
    if (import.meta.env.DEV) {
      menus = await fetchMenuList();
      menus = [];
    } else {
      menus = await fetchMenuList();
    }
    state.menus = menus;
  };
  return {
    ...toRefs(state),
    getMenuList,
  };
});

export default useMenusStore;
