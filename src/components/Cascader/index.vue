<!--
 * @Author: your name
 * @Date: 2021-07-06 17:22:18
 * @LastEditTime: 2021-08-02 14:15:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/components/Select/index.vue
-->
<template>
  <div class="cascader">
    <el-cascader
      :options="options"
      :props="{ checkStrictly: true, value: 'id', label: 'name', children: children }"
      @change="handleChange"
      :placeholder="placeholder"
      :style="{ width: width + 'px' }"
      clearable
    ></el-cascader>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: [String, Number],
      default: 120,
    },
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
