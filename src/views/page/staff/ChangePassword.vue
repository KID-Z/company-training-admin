<!--
 * @Author: your name
 * @Date: 2021-07-06 13:44:13
 * @LastEditTime: 2021-07-29 17:00:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/staff/ChangePassword.vue
-->
<template>
  <div style="margin-left: 200px">
    <el-cascader
      v-model="value"
      placeholder="请选择"
      :options="dept"
      :props="{ checkStrictly: true, value: 'id', label: 'name' }"
      clearable
    ></el-cascader>
    {{value}}
    {{dept}}
  </div>
</template>

<script>
import tree from '@/api/tree';

export default {
  data() {
    return {
      value: '1',
      dept: [],
    };
  },
  created() {
    tree.dept().then((res) => {
      this.dept = res;
    });
  },
};
</script>
