/*
 * @Author: your name
 * @Date: 2021-06-03 09:44:33
 * @LastEditTime: 2021-07-21 09:21:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/main.js
 */
import Vue from 'vue';
import VCharts from 'v-charts';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './plugins/ant-design-vue';
import './assets/css/reset.less';
import 'animate.css';

// import Blob from './excel/Blob.js';
// import Export2Excel from './excel/Export2Excel.js';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VCharts);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
