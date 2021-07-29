<!--
 * @Author: your name
 * @Date: 2021-07-06 17:10:17
 * @LastEditTime: 2021-07-13 09:36:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/components/tabs/index.vue
-->
<template>
  <div class="tabs">
    <el-radio-group v-model="state">
      <el-radio-button label="">{{label1}}</el-radio-button>
      <el-radio-button label="1">{{label2}}</el-radio-button>
      <el-radio-button label="2">{{label3}}</el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  props: {
    label1: {
      type: String,
      default: '全部',
    },
    label2: {
      type: String,
      default: '待启用',
    },
    label3: {
      type: String,
      default: '已启用',
    },
  },
  data() {
    return {
      state: '',
    };
  },
  watch: {
    state(newValue) {
      this.$emit('changeOptions', newValue);
    },
  },
};
</script>
