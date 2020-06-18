// 配置路由相关信息
import VueRouter from 'vue-router';
import Vue from 'vue';

// 1、通过Vue.use(插件),安装插件
Vue.use(VueRouter);

const routes = [
  // 路由重定向的使用
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/Login'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/components/Home'),
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import('@/components/Welcome'),
      },
    ],
  },
];

// 2、创建VueRouter对象
const router = new VueRouter({
  mode: 'history',
  routes,
});

// 3、将router对象传入到Vue实例中
export default router;
