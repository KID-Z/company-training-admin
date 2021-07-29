<!--
 * @Author: your name
 * @Date: 2021-07-27 09:34:47
 * @LastEditTime: 2021-07-28 16:02:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/components/Select/index.vue
-->
<template>
  <div class="select">
    <el-select :value="value" :placeholder="placeholder" @change="change">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
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
    value: {
      type: [String, Number],
      default: '',
    },
  },
  methods: {
    change(value) {
      console.log(value);
      this.$emit('change', value);
    },
  },
};
</script>

<style scoped>
.select {
  margin-right: 10px;
}
</style>
