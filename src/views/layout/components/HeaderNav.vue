<!--
 * @Author: your name
 * @Date: 2021-06-03 09:51:24
 * @LastEditTime: 2021-07-16 14:03:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/layout/components/HeaderNav.vue
-->
<template>
  <div class="header-nav">
    <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <a-icon :type="$store.state.layout.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-breadcrumb>
      <a-breadcrumb-item>{{
        $route.matched[0].meta.title
      }}</a-breadcrumb-item>
      <a-breadcrumb-item>{{
        $route.matched[1] ? $route.matched[1].meta.title : " "
      }}</a-breadcrumb-item>
    </a-breadcrumb>
    <ul class="user">
      <div class="avatar"><img src="../../../assets/images/avatar.png" alt=""></div>
      <div class="operation">
      <a-popover placement="bottom">
        <template slot="content">
          <div class="user-li">个人中心</div>
          <div class="user-li">退出</div>
        </template>
        <div class="user-name">白小纯</div>
      </a-popover>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('layout/changeCollapsed');
    },
  },
};
</script>
