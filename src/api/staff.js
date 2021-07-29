/*
 * @Author: your name
 * @Date: 2021-07-07 09:02:19
 * @LastEditTime: 2021-07-26 15:32:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/api/test.js
 */
import axios from '@/axios';
import URLS from './URLS';

export default {
  list(data) {
    return axios.post(URLS.list, data);
  },
  edit(id) {
    return axios.post(URLS.edit, {
      id,
    });
  },
  update(data) {
    return axios.post(URLS.update, data);
  },
  del(data) {
    return axios.post(URLS.del, data);
  },
  hr(data) {
    return axios.post(URLS.hr, data);
  },
  add(data) {
    return axios.post(URLS.add, data);
  },
  creditHourRank(data) {
    return axios.post(URLS.creditHourRank, data);
  },
  creditHourDetails(data) {
    return axios.post(URLS.creditHour, data);
  },
};
