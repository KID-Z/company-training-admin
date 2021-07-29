<!--
 * @Author: your name
 * @Date: 2021-07-05 16:03:45
 * @LastEditTime: 2021-07-06 14:17:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/layout/components/Logo.vue
-->
<template>
  <div class="logo" :class="{ 'hide-menu': $store.state.layout.collapsed }">
    <div class="hide-menu-logo"><img src="../../../assets/images/logo.png" alt="" /></div>
    <div class="show-menu" v-show="!$store.state.layout.collapsed">
      <div class="company">ATS</div>
      <div class="school">
        <i class="el-icon-s-grid"></i>
        <span>艾斯特大学</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.logo {
  height: 50px;
  color: #fff;
  width: 240px;
  background: #2b2f3a;
  position: fixed;
  z-index: 9;
  left: 0;
  top: 0;
  transition: 0.3s width ease-in-out;
  display: flex;
  overflow: hidden;
  &.hide-menu {
    width: 64px;
    overflow: hidden;
  }
  .hide-menu-logo {
    width: 18px;
    height: 24px;
    margin-top: 11.5px;
    margin-left: 20.5px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .show-menu {
    display: flex;
    .company {
      font-size: 20px;
      margin-top: 10px;
      height: 30px;
      line-height: 30px;
      font-weight: bold;
      margin-left: 15px;
      overflow: hidden;
      &::after {
        content: "";
        width: 1px;
        height: 17px;
        background: #fff;
        display: inline-block;
        vertical-align: -2px;
        margin-left: 12px;
        margin-right: 12px;
      }
    }
    .school {
      font-size: 16px;
      margin-top: 10px;
      height: 30px;
      line-height: 30px;
      overflow: hidden;
      span {
        margin-left: 10px;
      }
    }
  }
}
</style>
