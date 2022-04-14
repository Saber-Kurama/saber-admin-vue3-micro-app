import { createPinia } from 'pinia';
import useAppStore from './modules/app';
import useUserStore from './modules/user';
import useTabBarStore from './modules/tab-bar';

const pinia = createPinia();
// TODO: 是否需要的 initStore
export { useAppStore, useUserStore, useTabBarStore };
export default pinia;
