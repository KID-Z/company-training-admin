<!--
 * @Author: your name
 * @Date: 2021-07-06 17:22:18
 * @LastEditTime: 2021-07-29 17:08:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/components/Select/index.vue
-->
<template>
  <div class="cascader">
    <el-cascader
      :value="value"
      :options="options"
      :props="{ checkStrictly: true, value: 'id', label: 'name', children: children }"
      @change="handleChange"
      :placeholder="placeholder"
      clearable
    ></el-cascader>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
    },
    options: {
      type: Array,
    },
    type: {
      type: String,
    },
    children: {
      type: String,
      default: 'children',
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleChange(value) {
      this.$emit('handleChange', value, this.type);
    },
  },
};
</script>

<style scoped>
.cascader {
  margin-right: 10px;
}
</style>
