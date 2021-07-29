/*
 * @Author: your name
 * @Date: 2021-06-03 09:44:33
 * @LastEditTime: 2021-07-28 10:44:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/router/index.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import getMenuRoute from '@/utils/permission';
import store from '@/store';
import Home from '../views/layout/Home.vue';
import Login from '../views/layout/Login.vue';

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error);
};

Vue.use(VueRouter);

const asyncRouterMap = [{
  path: '/staff-manage',
  name: 'StaffManage',
  meta: {
    title: '员工管理',
    hidden: false,
    icon: 'inbox',
  },
  component: Home,
  children: [{
    path: 'staff-list',
    name: 'StaffList',
    meta: {
      title: '员工列表',
      hidden: false,
    },
    component: () => import('../views/page/staff/StaffManage.vue'),
  },
  {
    path: 'credit-hour-rank',
    name: 'CreditHourRank',
    meta: {
      title: '学分排名',
      hidden: false,
    },
    component: () => import('../views/page/staff/CreditHourRank.vue'),
  }, {
    path: 'archives-details',
    name: 'ArchivesDetails',
    meta: {
      title: '查看详情',
      hidden: true,
    },
    component: () => import('../views/page/staff/ArchivesDetails.vue'),
  },
  {
    path: 'course-statistical',
    name: 'CourseStatistical',
    meta: {
      title: '课程',
      hidden: true,
    },
    component: () => import('../views/page/staff/CourseStatistical.vue'),
  },
  {
    path: 'training-statistical',
    name: 'TrainingStatistical',
    meta: {
      title: '培训',
      hidden: true,
    },
    component: () => import('../views/page/staff/TrainingStatistical.vue'),
  },
  {
    path: 'exam-statistical',
    name: 'ExamStatistical',
    meta: {
      title: '考试',
      hidden: true,
    },
    component: () => import('../views/page/staff/ExamStatistical.vue'),
  },
  {
    path: 'credit-hour-statistical',
    name: 'CreditHourStatistical',
    meta: {
      title: '学分',
      hidden: true,
    },
    component: () => import('../views/page/staff/CreditHourStatistical.vue'),
  },
  {
    path: 'certificate-statistical',
    name: 'CertificateStatistical',
    meta: {
      title: '证书',
      hidden: true,
    },
    component: () => import('../views/page/staff/CertificateStatistical.vue'),
  },
  {
    path: 'learn-statistical',
    name: 'LearnStatistical',
    meta: {
      title: '学习记录',
      hidden: true,
    },
    component: () => import('../views/page/staff/LearnStatistical.vue'),
  },
  {
    path: 'credit-hour-details/:id',
    name: 'CreditHourDetails',
    meta: {
      title: '查看学分详情',
      hidden: true,
    },
    component: () => import('../views/page/staff/CreditHourDetails.vue'),
  },
  ],
},
{
  path: '/excel',
  name: 'Excel',
  meta: {
    title: 'Excel',
    hidden: true,
    icon: 'inbox',
  },
  component: Home,
  children: [{
    path: 'operation',
    name: 'Operation',
    meta: {
      title: 'Excel',
      hidden: true,
    },
    component: () => import('../views/page/ExcelOperation.vue'),
  }],
},
{
  path: '/course-manage',
  name: 'CourseManage',
  meta: {
    title: '课程管理',
    hidden: false,
    icon: 'inbox',
  },
  component: Home,
  children: [{
    path: 'course-list',
    name: 'CourseList',
    meta: {
      title: '课程列表',
      hidden: false,
    },
    component: () => import('../views/page/course/CourseList.vue'),
  },
  {
    path: 'course-section/:id',
    name: 'CourseSection',
    meta: {
      title: '课节列表',
      hidden: true,
    },
    component: () => import('../views/page/course/CourseSection.vue'),
  },
  {
    path: 'course-notes/:id',
    name: 'CourseNotes',
    meta: {
      title: '课程笔记',
      hidden: true,
    },
    component: () => import('../views/page/course/CourseNotes.vue'),
  },
  {
    path: 'course-comment/:id',
    name: 'CourseComment',
    meta: {
      title: '课程评论',
      hidden: true,
    },
    component: () => import('../views/page/course/CourseComment.vue'),
  },
  {
    path: 'course-category',
    name: 'CourseCategory',
    meta: {
      title: '课程分类',
      hidden: false,
    },
    component: () => import('../views/page/course/CourseCategory.vue'),
  },
  ],
}, {
  path: '/test-paper',
  name: 'TestPaper',
  meta: {
    title: '试题管理',
    hidden: false,
    icon: 'inbox',
  },
  component: Home,
  children: [{
    path: 'Test-paper-manage',
    name: 'TestPaperManage',
    meta: {
      title: '试题管理',
      hidden: false,
    },
    component: () => import('../views/page/test-paper/TestPaperManage.vue'),
  },
  {
    path: 'examination-questions',
    name: 'ExaminationQuestions',
    meta: {
      title: '试卷管理',
      hidden: false,
    },
    component: () => import('../views/page/test-paper/ExaminationQuestions.vue'),
  },
  {
    path: 'examination-paper',
    name: 'ExaminationPaper',
    meta: {
      title: '试卷管理',
      hidden: true,
    },
    component: () => import('../views/page/test-paper/ExaminationPaper.vue'),
  },
  {
    path: 'questions-category',
    name: 'QuestionsCategory',
    meta: {
      title: '试题分类',
      hidden: false,
    },
    component: () => import('../views/page/test-paper/QuestionsCategory.vue'),
  },
  ],
}, {
  path: '/training',
  name: 'Training',
  meta: {
    title: '培训管理',
    hidden: false,
    icon: 'inbox',
  },
  component: Home,
  children: [{
    path: 'training-lisy',
    name: 'TrainingLisy',
    meta: {
      title: '培训列表',
      hidden: false,
    },
    component: () => import('../views/page/training/TrainingLisy.vue'),
  },
  {
    path: 'add-training',
    name: 'AddTraining',
    meta: {
      title: '新增培训',
      hidden: true,
    },
    component: () => import('../views/page/training/AddTraining.vue'),
  },
  {
    path: 'statistical',
    name: 'Statistical',
    meta: {
      title: '统计',
      hidden: true,
    },
    component: () => import('../views/page/training/Statistical.vue'),
  },
  {
    path: 'training-type',
    name: 'TrainingType',
    meta: {
      title: '培训类别',
      hidden: false,
    },
    component: () => import('../views/page/training/TrainingType.vue'),
  },
  ],
},
{
  path: '/exam',
  name: 'Exam',
  meta: {
    title: '考试管理',
    hidden: false,
    icon: 'inbox',
  },
  component: Home,
  children: [{
    path: 'exam-lisy',
    name: 'ExamLisy',
    meta: {
      title: '考试任务',
      hidden: false,
    },
    component: () => import('../views/page/exam/ExamList.vue'),
  }],
},
{
  path: '/certificate',
  name: 'Certificate',
  meta: {
    title: '证书管理',
    hidden: false,
    icon: 'inbox',
  },
  component: Home,
  children: [{
    path: 'certificate-lisy',
    name: 'CertificateLisy',
    meta: {
      title: '证书列表',
      hidden: false,
    },
    component: () => import('../views/page/certificate/CertificateList.vue'),
  },
  {
    path: 'certificate-template',
    name: 'CertificateTemplate',
    meta: {
      title: '证书列表',
      hidden: false,
    },
    component: () => import('../views/page/certificate/CertificateTemplate.vue'),
  },
  ],
},
{
  path: '/statistics',
  name: 'Statistics',
  meta: {
    title: '数据统计',
    hidden: false,
    icon: 'inbox',
  },
  component: Home,
  children: [{
    path: 'bsic-information-statistical',
    name: 'BasicInformationStatistical',
    meta: {
      title: '数据统计',
      hidden: false,
    },
    component: () => import('../views/page/statistics/BasicInformationStatistical.vue'),
  },
  {
    path: 'login-staff-statistics',
    name: 'LoginStaffStatistics',
    meta: {
      title: '登录人员统计',
      hidden: false,
    },
    component: () => import('../views/page/statistics/LoginStaffStatistics.vue'),
  },
  {
    path: 'login-staff-details',
    name: 'LoginStaffDetails',
    meta: {
      title: '登录人员详情',
      hidden: true,
    },
    component: () => import('../views/page/statistics/LoginStaffDetails.vue'),
  },
  {
    path: 'course-play-statistics',
    name: 'CoursePlayStatistics',
    meta: {
      title: '课程播放走势统计',
      hidden: false,
    },
    component: () => import('../views/page/statistics/CoursePlayStatistics.vue'),
  },
  {
    path: 'training-time-statistics',
    name: 'TrainingTimeStatistics',
    meta: {
      title: '培训时间统计',
      hidden: false,
    },
    component: () => import('../views/page/statistics/TrainingTimeStatistics.vue'),
  },
  {
    path: 'training-details',
    name: 'TrainingDetails',
    meta: {
      title: '培训详情',
      hidden: true,
    },
    component: () => import('../views/page/statistics/TrainingDetails.vue'),
  },
  {
    path: 'staff-learn-statistical',
    name: 'StaffLearnStatistical',
    meta: {
      title: '员工学习统计',
      hidden: false,
    },
    component: () => import('../views/page/statistics/StaffLearnStatistical.vue'),
  },
  {
    path: 'dept-learn-statistics',
    name: 'DeptLearnStatistics',
    meta: {
      title: '部门学习统计',
      hidden: false,
    },
    component: () => import('../views/page/statistics/DeptLearnStatistics.vue'),
  },
  {
    path: 'dept-course',
    name: 'DeptCourse',
    meta: {
      title: '部门课程',
      hidden: true,
    },
    component: () => import('../views/page/statistics/DeptCourse.vue'),
  },
  {
    path: 'dept-staff',
    name: 'DeptStaff',
    meta: {
      title: '部门员工',
      hidden: true,
    },
    component: () => import('../views/page/statistics/DeptStaff.vue'),
  },
  {
    path: 'dept-staff-details',
    name: 'DeptStaffDetails',
    meta: {
      title: '部门员工详情',
      hidden: true,
    },
    component: () => import('../views/page/statistics/DeptStaffDetails.vue'),
  },
  {
    path: 'po-learn-statistics',
    name: 'PoLearnStatistics',
    meta: {
      title: '岗位学习统计',
      hidden: false,
    },
    component: () => import('../views/page/statistics/PoLearnStatistics.vue'),
  },
  {
    path: 'po-course',
    name: 'PoCourse',
    meta: {
      title: '岗位课程',
      hidden: true,
    },
    component: () => import('../views/page/statistics/PoCourse.vue'),
  },
  {
    path: 'po-staff',
    name: 'PoStaff',
    meta: {
      title: '岗位员工',
      hidden: true,
    },
    component: () => import('../views/page/statistics/PoStaff.vue'),
  },
  {
    path: 'po-staff-details',
    name: 'PoStaffDetails',
    meta: {
      title: '岗位员工详情',
      hidden: true,
    },
    component: () => import('../views/page/statistics/PoStaffDetails.vue'),
  },
  ],
},
{
  path: '/system-notification',
  name: 'SystemNotification',
  meta: {
    title: '系统设置',
    hidden: false,
    icon: 'inbox',
  },
  component: Home,
  children: [{
    path: 'message-manage',
    name: 'MessageManage',
    meta: {
      title: '消息管理',
      hidden: false,
    },
    component: () => import('../views/page/system-notification/MessageManage.vue'),
  }],
},
];

const routes = [{
  path: '/',
  name: 'Home',
  meta: {
    title: '欢迎使用',
    hidden: false,
    icon: 'home',
  },
  component: Home,
  children: [{
    path: 'change-password',
    name: 'ChangePassword',
    meta: {
      title: '修改密码',
      hidden: false,
    },
    component: () => import('../views/page/staff/ChangePassword.vue'),
  }],
},
{
  path: '/login',
  name: 'Login',
  meta: {
    title: '登陆',
    hidden: true,
  },
  component: Login,
},
];

let isAddRoutes = false;

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.user.token) {
      if (!isAddRoutes) {
        const menuRoutes = getMenuRoute('test', asyncRouterMap);
        store.dispatch('layout/setMenuRoutes', routes.concat(menuRoutes)).then(() => {
          router.addRoutes(menuRoutes);
          next();
        });
        isAddRoutes = true;
      }
      if (to.matched.length > 0) {
        store.commit('layout/addTab', {
          title: to.meta.title,
          path: to.name,
        });
        const res = store.getters['layout/filterTab'](to.meta.title);
        store.commit('layout/setTabIndex', res.name);
      }
      return next();
    }
    return next('/login');
  }
  return next();
});
// router.afterEach((to, from) => {
//   if (to.matched.length > 0) {
//     if (from.name === 'Login') return;
//     store.commit('layout/addTab', {
//       title: to.meta.title,
//       path: to.name,
//     });
//     const res = store.getters['layout/filterTab'](to.meta.title);
//     store.commit('layout/setTabIndex', res.name);
//   }
// });
export default router;
