import Vue from 'vue';
import App from './App.vue';
import router from './router';
// 导入全局样式;
import './assets/css/global.css';
// 导入字体图标
import './assets/fonts/iconfont.css';
// 导入组件库：
import ElementUI from 'element-ui';
// 导入组件相关样式
import 'element-ui/lib/theme-chalk/index.css';
// 配置vue插件
Vue.use(ElementUI);

import axios from 'axios';

// 配置请求的根路径
axios.defaults.baseURL = 'http://localhost:8088/';

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

// 全局定义过滤时间过滤器
Vue.filter('dateFormat', (originVal) => {
  const dt = new Date(originVal);

  // padStart函数实现字符串不足两位用0补齐
  const y = dt.getFullYear();
  const m = (dt.getMonth() + 1 + '').padStart(2, '0');
  const d = (dt.getDate() + '').padStart(2, '0');

  const hh = (dt.getHours() + '').padStart(2, '0');
  const mm = (dt.getMinutes() + '').padStart(2, '0');
  const ss = (dt.getSeconds() + '').padStart(2, '0');

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
