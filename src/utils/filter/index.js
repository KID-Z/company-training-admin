/*
 * @Author: your name
 * @Date: 2021-07-07 10:11:55
 * @LastEditTime: 2021-07-07 11:15:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/utils/filter/index.js
 */
import Vue from 'vue';
import {
  getLocaldate,
} from '../moment';

// 过滤时间的
Vue.filter('filterDate', (date) => getLocaldate(date));
