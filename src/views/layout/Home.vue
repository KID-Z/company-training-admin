<!--
 * @Author: your name
 * @Date: 2021-06-03 09:44:33
 * @LastEditTime: 2021-07-16 09:51:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/Home.vue
-->
<template>
  <div class="home">
    <div class="left-menu">
      <LeftMenu />
    </div>
    <div :class="{ content: true, 'fold-content': $store.state.layout.collapsed }">
      <div class="header">
        <HeaderNav />
        <Tabs />
      </div>
      <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
        mode="out-in"
        :duration="{ enter: 200, leave: 100 }"
      >
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import LeftMenu from './components/LeftMenu.vue';
import HeaderNav from './components/HeaderNav.vue';
import Tabs from './components/Tabs.vue';

export default {
  name: 'Home',
  components: {
    LeftMenu,
    HeaderNav,
    Tabs,
  },
  data() {
    return {
      key: Date.now(),
    };
  },
  watch: {
    $route() {
      this.key = Date.now();
    },
  },
};
</script>

<style lang="less">
@import url("./index.less");
</style>
