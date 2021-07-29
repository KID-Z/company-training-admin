/*
 * @Author: your name
 * @Date: 2021-07-06 14:06:08
 * @LastEditTime: 2021-07-21 13:23:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/store/module/user.js
 */
import { setSession, getSession } from '@/utils/session';

export default {
  namespaced: true,
  state: {
    token: getSession('token'),
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    setToken({
      commit,
    }, token) {
      commit('setToken', token);
      setSession('token', token);
    },
  },
};
