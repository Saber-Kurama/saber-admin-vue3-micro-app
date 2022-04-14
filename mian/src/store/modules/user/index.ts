import { defineStore } from 'pinia';
import { clearToken, getToken } from '@/utils/auth';
import { removeRouteListener } from '@/utils/route-listener';
import { jumpLogin } from '@/utils/jump';
import http from '@/utils/http';
import { UserState } from './types';

// todo: 先放到这
const getUserInfo = async () => {
  try {
    // @ts-ignore
    const result = await http.get(`${import.meta.env.VITE_VERITY_TOKEN}?token=${getToken()}`, {
      baseURL: '',
    });
    console.log('result', result);
    // todo: 解决提示
    // @ts-ignore
    if (!result.success) {
      return false;
    }
    console.log(result.data);
    return result.data;
  } catch (e) {
    return false;
  }
};

const useUserStore = defineStore('user', {
  state: (): UserState => ({
    name: undefined,
    avatar: undefined,
    job: undefined,
    organization: undefined,
    location: undefined,
    email: undefined,
    introduction: undefined,
    personalWebsite: undefined,
    jobName: undefined,
    organizationName: undefined,
    locationName: undefined,
    phone: undefined,
    registrationDate: undefined,
    accountId: undefined,
    certification: undefined,
    role: '',
  }),

  getters: {
    userInfo(state: UserState): UserState {
      return { ...state };
    },
  },

  actions: {
    switchRoles() {
      return new Promise((resolve) => {
        this.role = this.role === 'user' ? 'admin' : 'user';
        resolve(this.role);
      });
    },
    // Set user's information
    setInfo(partial: Partial<UserState>) {
      this.$patch(partial);
    },

    // Reset user's information
    resetInfo() {
      this.$reset();
    },

    // Get user's information
    async info() {
      const userInfo = await getUserInfo();
      if (!userInfo) {
        jumpLogin();
      }
      // TODO: 从新定义一下useInfo
      this.setInfo({ ...userInfo, avatar: userInfo.icon });
    },

    // Login
    async login(_loginForm: any) {
      // try {
      //   const res = await userLogin(loginForm);
      //   setToken(res.data.token);
      // } catch (err) {
      //   clearToken();
      //   throw err;
      // }
    },

    // Logout
    async logout() {
      // await userLogout();

      this.resetInfo();
      clearToken();
      removeRouteListener();
    },
  },
});

export default useUserStore;
