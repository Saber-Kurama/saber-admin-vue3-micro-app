import type { Router } from 'vue-router';
import NProgress from 'nprogress'; // progress bar

// import usePermission from '@/hooks/permission';
import { useUserStore } from '@/store';
import { isLogin } from '@/utils/auth';
import { jumpLogin } from '@/utils/jump';
import useMenusStore from '@/store/modules/menus';

export default function setupPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    NProgress.start();
    const userStore = useUserStore();
    const menusStore = useMenusStore();
    // TODO: 因为目前的方案是 采用的 前端静态路由 + 菜单
    // async function crossroads() {
    //   const Permission = usePermission();
    //   if (Permission.accessRouter(to)) next();
    //   else {
    //     const destination = Permission.findFirstPermissionRoute(
    //       appRoutes,
    //       userStore.role
    //     ) || {
    //       name: 'notFound',
    //     };
    //     next(destination);
    //   }
    //   NProgress.done();
    // }
    if (isLogin()) {
      try {
        await userStore.info();
        await menusStore.getMenuList();
        next();
        NProgress.done();
      } catch (error) {
        // todo: 是否要跳转到登录页
        NProgress.done();
      }
      // if (userStore.role) {
      //   crossroads();
      // } else {
      //   try {
      //     await userStore.info();
      //     crossroads();
      //   } catch (error) {
      //     next({
      //       name: 'login',
      //       query: {
      //         redirect: to.name,
      //         ...to.query,
      //       } as LocationQueryRaw,
      //     });
      //     NProgress.done();
      //   }
      // }
    } else {
      // if (to.name === 'login') {
      //   next();
      //   NProgress.done();
      //   return;
      // }
      // next({
      //   name: 'login',
      //   query: {
      //     redirect: to.name,
      //     ...to.query,
      //   } as LocationQueryRaw,
      // });
      jumpLogin();
      NProgress.done();
    }
  });
}
