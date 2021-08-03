/*
 * @Author: your name
 * @Date: 2021-07-30 09:33:31
 * @LastEditTime: 2021-08-03 10:21:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/api/problem.js
 */
import axios from '@/axios';
import URLS from './URLS';

export default {
  list(data) {
    return axios.post(URLS.problemList, {
      ...data,
      size: 10,
    });
  },
  classificationRemove(data) {
    return axios.post(URLS.questionsClassificationRemove, data);
  },
  classificationDetails(data) {
    return axios.post(URLS.questionsClassificationRemove, data);
  },
  questionsClassificationDetails(data) {
    return axios.post(URLS.questionsClassificationDetails, data);
  },
  questionsClassificationAdd(data) {
    return axios.post(URLS.questionsClassificationAdd, data);
  },
  questionsClassificationUpdate(data) {
    return axios.post(URLS.questionsClassificationUpdate, data);
  },
  questionsAdd(data) {
    return axios.post(URLS.questionsAdd, data);
  },
};
