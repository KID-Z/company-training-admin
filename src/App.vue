<!--
 * @Author: your name
 * @Date: 2021-06-03 10:04:13
 * @LastEditTime: 2021-08-02 13:32:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/App.vue
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="less">
#app {
  min-width: 1300px;
}
.menu-hr {
  .el-drawer {
    width: calc(100% - 240px) !important;
  }
}
.hide-menu-hr {
  .el-drawer {
    width: calc(100% - 64px) !important;
  }
}
.add-staff-drawer {
  width: 410px !important;
}
.course-drawer {
   width: 410px !important;
}
.course-section-drawer {
  width: 410px !important;
}
</style>
