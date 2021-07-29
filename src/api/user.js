/*
 * @Author: your name
 * @Date: 2021-07-01 14:50:29
 * @LastEditTime: 2021-07-21 10:40:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/api/index.js
 */
import axios from '@/axios';

export default {
  getToken(url, headers, params) {
    return axios.post(url, {}, {
      headers,
      params,
    });
  },
};
