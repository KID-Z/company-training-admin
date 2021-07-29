/*
 * @Author: your name
 * @Date: 2021-07-07 10:09:31
 * @LastEditTime: 2021-07-07 10:09:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/utils/moment.js
 */
import moment from 'moment';

const format = 'YYYY/MM/DD HH:mm:ss';
// getTime() 得到时间戳
// Date.now() 得到当前的时间戳

// 得到本地时间
const getLocaldate = (date) => moment(date).format(format);

// 将本地时间转换成时间戳
const getTime = (date) => moment.utc(date).format(format);

export {
  getLocaldate,
  getTime,
};
