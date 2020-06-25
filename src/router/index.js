// 配置路由相关信息
import VueRouter from 'vue-router';
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
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
      {
        path: '/adminList',
        name: 'adminList',
        component: () => import('@/components/AdminList'),
      },
      {
        path: '/userList',
        name: 'userList',
        component: () => import('@/components/UserList'),
      },
      {
        path: '/userCollect',
        name: 'userCollect',
        component: () => import('@/components/UserCollect'),
      },
      {
        path: '/movieList',
        name: 'movieList',
        component: () => import('@/components/MovieList'),
      },
      {
        path: '/swiperControl',
        name: 'swiperControl',
        component: () => import('@/components/SwiperControl'),
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
