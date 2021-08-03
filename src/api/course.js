/*
 * @Author: your name
 * @Date: 2021-07-26 14:59:08
 * @LastEditTime: 2021-08-02 15:06:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/api/course.js
 */
import axios from '@/axios';
import URLS from './URLS';

export default {
  list(data) {
    return axios.post(URLS.courseList, {
      ...data,
      size: 10,
    });
  },
  update(data) {
    return axios.post(URLS.courseUpdate, data);
  },
  details(data) {
    return axios.post(URLS.courseDetails, data);
  },
  remove(data) {
    return axios.post(URLS.courseRemove, data);
  },
  add(data) {
    return axios.post(URLS.courseAdd, data);
  },
  courseSectionList(data) {
    return axios.post(URLS.courseSectionList, {
      ...data,
      size: 10,
    });
  },
  courseSectionUpdate(data) {
    return axios.post(URLS.courseSectionUpdate, data);
  },
  courseSectionRemove(data) {
    return axios.post(URLS.courseSectionRemove, data);
  },
  courseSectionAdd(data) {
    return axios.post(URLS.courseSectionAdd, data);
  },
  courseSectionDetails(data) {
    return axios.post(URLS.courseSectionDetails, data);
  },
  courseSectionNotes(data) {
    return axios.post(URLS.courseNotes, {
      ...data,
      size: 10,
    });
  },
  removeNotes(data) {
    return axios.post(URLS.courseRemoveNotes, data);
  },
  courseSectionComment(data) {
    return axios.post(URLS.courseComment, {
      ...data,
      size: 10,
    });
  },
  removeComment(data) {
    return axios.post(URLS.courseRemoveComment, data);
  },
  courseClassificationRemove(data) {
    return axios.post(URLS.courseClassificationRemove, data);
  },
  courseClassificationDetails(id) {
    return axios.post(URLS.courseClassificationDetails, {
      id,
    });
  },
  courseClassificationUpdate(data) {
    return axios.post(URLS.courseClassificationUpdate, data);
  },
  courseClassificationAdd(data) {
    return axios.post(URLS.courseClassificationAdd, data);
  },
  QRCode(txt) {
    return axios.post(URLS.QRCode, {
      txt,
    }, {
      responseType: 'arraybuffer',
    });
  },
};
