/*
 * @Author: your name
 * @Date: 2021-07-21 10:48:52
 * @LastEditTime: 2021-07-21 13:22:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/utils/cookir.js
 */

export function setSession(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function getSession(key) {
  let val;
  try {
    val = JSON.parse(sessionStorage.getItem(key));
  } catch (error) {
    console.log(error);
    val = null;
  }
  return val;
}

export function removeSession() {
  sessionStorage.clear();
}
