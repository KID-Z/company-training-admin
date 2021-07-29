/*
 * @Author: your name
 * @Date: 2021-07-19 10:33:41
 * @LastEditTime: 2021-07-20 11:10:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/store/module/tree.js
 */

export default {
  namespaced: true,
  state: {
    dept: null,
    po: null,
  },
  mutations: {
    setDeptTree(state, data) {
      state.dept = data;
    },
    setPoTree(state, data) {
      state.po = data;
    },
  },
  actions: {
    setDeptTree({
      commit,
    }, data) {
      commit('setDeptTree', data);
    },
    setPoTree({
      commit,
    }, data) {
      commit('setPoTree', data);
    },
  },
};
