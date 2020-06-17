import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
      
    },
    {
      path: '/reg',
      name: 'reg',
      // 路由懒加载
      component: () => import('./views/Reg.vue')
    },
    {
      path: '/products',
      name: 'products',
      // 路由懒加载
      component: () => import('./views/Products.vue')
    }
  ]
})
