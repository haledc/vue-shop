import Vue from 'vue'
import VueRouter from 'vue-router'
import { Cookies, Dialog } from 'quasar'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function(/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    mode: 'history',
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach((to, from, next) => {
    if (!Cookies.get('userId')) {
      if (to.name === 'goods') {
        next()
      } else {
        next('/home/goods')
        Dialog.create({
          title: '警告',
          message: '当前未登录',
          color: 'negative',
          ok: '确定'
        })
      }
    } else {
      next()
    }
  })
  return Router
}
