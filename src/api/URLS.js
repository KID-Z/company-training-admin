/*
 * @Author: your name
 * @Date: 2021-07-26 09:44:06
 * @LastEditTime: 2021-08-03 10:20:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/api/URLs.js
 */
export default {
  // 员工
  list: '/api/training/trainingUser/userInfolist',
  hr: '/api/training/trainingUser/list',
  edit: '/api/training/trainingUser/getUserById',
  update: '/api/training/trainingUser/update',
  add: '/api/training/trainingUser/add',
  del: '/api/training/trainingUser/delUser',
  creditHourRank: '/api/training/user-credit/creditRank',
  creditHour: '/api/training/user-credit/creditDetails',
  // 课程
  courseList: '/api/training/courseList/listCourse',
  courseUpdate: '/api/training/courseList/update',
  courseDetails: '/api/training/courseList/getCourseById',
  courseRemove: '/api/training/courseList/delCourse',
  courseAdd: '/api/training/courseList/add',
  courseSectionList: '/api/training/courseChapters/list',
  courseSectionAdd: '/api/training/courseChapters/add',
  courseSectionUpdate: '/api/training/courseChapters/update',
  courseSectionDetails: '/api/training/courseChapters/getById',
  courseSectionRemove: '/api/training/courseChapters/delCourseChapters',
  courseComment: '/api/training/classReview/list',
  courseRemoveComment: '/api/training/classReview/delClassReview',
  courseNotes: '/api/training/classNote/list',
  courseRemoveNotes: '/api/training/classNote/delClassNote',
  courseClassificationRemove: '/api/training/courseClassification/delAll',
  courseClassificationUpdate: '/api/training/courseClassification/update',
  courseClassificationDetails: '/api/training/courseClassification/getclassById',
  courseClassificationAdd: '/api/training/courseClassification/add',
  QRCode: '/api/training/courseList/getCode',
  // 试题
  problemList: '/api/problemMain/selProblemListByParam',
  questionsClassificationRemove: '/api/problemSet/delAll',
  questionsClassificationDetails: '/api/problemSet/getProblemSetById',
  questionsClassificationAdd: '/api/problemSet/add',
  questionsClassificationUpdate: '/api/problemSet/update',
  questionsAdd: '/api/problemMain/saveProblemVO',
  // 树
  deptTree: '/api/training/trainingDepartment/list',
  postTree: '/api/training/trainingPost/list',
  courseTree: '/api/training/courseClassification/getCourseTree',
  questionsClassification: '/api/problemSet/getTableTree',
  courseClassificationTree: '/api/training/courseClassification/getCourseTree',
};
