/*
 * @Author: your name
 * @Date: 2021-06-03 09:44:33
 * @LastEditTime: 2021-07-19 10:34:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/store/index.js
 */
import Vue from 'vue';
import Vuex from 'vuex';

import layout from './module/layout';
import user from './module/user';
import staff from './module/staff';
import tree from './module/tree';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    layout,
    user,
    staff,
    tree,
  },
});
