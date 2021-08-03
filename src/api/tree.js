/*
 * @Author: your name
 * @Date: 2021-07-19 10:35:41
 * @LastEditTime: 2021-07-30 10:27:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/api/tree.js
 */

import axios from '@/axios';
import URLS from './URLS';

export default {
  dept() {
    return axios.post(URLS.deptTree, {
      name: '',
    });
  },
  post() {
    return axios.post(URLS.postTree, {
      name: '',
    });
  },
  course() {
    return axios.post(URLS.courseTree, {
      name: '',
    });
  },
  courseClassification(data) {
    return axios.post(URLS.courseClassificationTree, data);
  },
  questionsClassification(selString) {
    return axios.post(URLS.questionsClassification, {
      selString,
    });
  },
};
