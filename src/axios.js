/*
 * @Author: your name
 * @Date: 2021-07-01 14:47:49
 * @LastEditTime: 2021-07-29 10:01:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/axios.js
 */
import axios from 'axios';
import store from '@/store';
import {
  Message,
} from 'element-ui';
import {
  removeSession,
} from '@/utils/session';

const instance = axios.create({
  // baseURL: 'http://10.1.17.83:8099/training',
});

// 请求拦截器
instance.interceptors.request.use((config) => {
  if (config.url === 'http://10.1.1.138:8080/auth/oauth/token') {
    return {
      ...config,
      params: {
        ...config.params,
        grant_type: 'password',
        scope: 'admin',
        username: 'admin',
        password: 'Ats@123',
      },
      headers: {
        ...config.headers,
        Authorization: 'Basic emptenhmemhsOjE=',
      },
    };
  }
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${store.state.user.token}`,
    },
  };
}, (error) => Promise.reject(error));

// 响应拦截器
instance.interceptors.response.use((response) => {
  if (response.data.code !== 200) {
    throw new Error(response.data.msg);
  }
  return response.data.data;
}, (error) => {
  if (error.response) {
    // 响应错误 可以根据状态码返回对应的信息或提示
    if (error.response.status === 401) {
      Message.error({
        message: 'token失效了, 请重新登录',
      });
      removeSession();
    }
  } else if (error.request) {
    // 请求错误
    Message.error({
      message: '请求错误',
    });
    console.log(error.request);
  }
  return Promise.reject(error);
});

export default instance;
