/*
 * @Author: your name
 * @Date: 2021-07-07 09:54:46
 * @LastEditTime: 2021-07-27 10:54:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/store/module/staff.js
 */

export default {
  namespaced: true,
  state: {
    staffList: [],
    loading: false,
    drawer: false,
    save: false,
  },
  mutations: {
    setStaffList(state, list) {
      state.staffList = list;
    },
    loadingState(state, boole) {
      state.loading = boole;
    },
    changeDrawer(state, boole) {
      state.drawer = boole;
    },
    saveState(state, boole) {
      state.save = boole;
    },
  },
  actions: {
    setStaffList({
      commit,
    }, list) {
      commit('setStaffList', list);
    },
    changeDrawer({
      commit,
    }, boole) {
      commit('changeDrawer', boole);
    },
    changeSaveState({
      commit,
    }, boole) {
      commit('saveState', boole);
    },
  },
};
