/*
 * @Author: your name
 * @Date: 2021-06-03 13:06:06
 * @LastEditTime: 2021-07-16 09:20:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/utils/permission.js
 */
// 存储的是角色对应的权限名称
const roleRoute = {
  test: ['Home', 'StaffManage', 'StaffList', 'ArchivesDetails', 'CreditHourRank',
    'CourseStatistical', 'TrainingStatistical', 'ExamStatistical', 'CreditHourStatistical',
    'CertificateStatistical', 'LearnStatistical', 'CreditHourDetails', 'Excel', 'Operation', 'CourseManage', 'CourseList',
    'CourseSection', 'CourseNotes', 'CourseComment', 'CourseCategory', 'TestPaper', 'TestPaperManage', 'ExaminationQuestions',
    'ExaminationPaper', 'QuestionsCategory', 'Training', 'TrainingLisy', 'AddTraining', 'Statistical', 'TrainingType',
    'Exam', 'ExamLisy', 'Certificate', 'CertificateLisy', 'CertificateTemplate', 'Statistics', 'BasicInformationStatistical', 'LoginStaffStatistics',
    'LoginStaffDetails', 'CoursePlayStatistics', 'TrainingTimeStatistics', 'TrainingDetails', 'StaffLearnStatistical', 'DeptLearnStatistics',
    'DeptCourse', 'DeptStaff', 'DeptStaffDetails', 'PoLearnStatistics', 'PoCourse', 'PoStaff', 'PoStaffDetails', 'SystemNotification', 'MessageManage',
  ],
};

// 过滤掉没有权限的路由
export default function getMenuRoute(role, router) {
  const allowRouteName = roleRoute[role];
  if (!allowRouteName) {
    return [];
  }
  const resultRoute = router.filter((item) => {
    const obj = item;
    if (allowRouteName.includes(item.name)) {
      obj.children = obj.children.filter((res) => allowRouteName.includes(res.name));
      return true;
    }
    return false;
  });
  return resultRoute;
}
