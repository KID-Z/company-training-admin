<!--
 * @Author: your name
 * @Date: 2021-07-23 17:15:58
 * @LastEditTime: 2021-07-27 10:59:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/components/Loading/index.vue
-->
<template>
  <div class="loading" v-if="$store.state.layout.loading">
    <a-spin tip="Loading...">
    </a-spin>
  </div>
</template>

<style scoped>
.loading {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 9999999;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
