<!--
 * @Author: your name
 * @Date: 2021-06-03 09:50:50
 * @LastEditTime: 2021-07-16 13:20:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/layout/components/LeftMenu.vue
-->
<template>
  <div>
    <Logo />
    <el-menu
      :default-active="$route.matched[1] ? $route.matched[1].name : ''"
      class="el-menu-vertical-demo"
      background-color="#041527"
      :collapse="$store.state.layout.collapsed"
    >
      <template v-for="nav in $store.state.layout.menuRoutes">
        <el-submenu
          :key="nav.name"
          v-if="!nav.meta.hidden"
          :index="nav.name"
          :class="{ 'el-submenu__icon-arrow__none': !nav.children }"
        >
          <template slot="title" v-if="nav.children">
            <div class="menu-box">
              <div class="menu-icon">
                <img src="../../../assets/images/menu-icon.png">
              </div>
              <span slot="title"
              >{{ nav.meta.title }}</span
            >
            </div>
          </template>
          <template slot="title" v-else>
            <router-link :to="{ name: nav.name }" tag="span" class="menu-list-title" slot="title">{{
              nav.meta.title
            }}</router-link>
          </template>
          <template v-for="item in nav.children">
            <el-menu-item-group v-if="!item.meta.hidden" :key="item.name">
              <el-menu-item :index="item.name">
                <router-link tag="div" :to="{ name: item.name }">{{
                  item.meta.title
                }}</router-link></el-menu-item
              >
            </el-menu-item-group>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import Logo from './Logo.vue';

export default {
  components: {
    Logo,
  },
};
</script>
