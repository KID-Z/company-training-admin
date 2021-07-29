<!--
 * @Author: your name
 * @Date: 2021-07-06 17:32:43
 * @LastEditTime: 2021-07-28 14:13:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/components/Search/index.vue
-->
<template>
  <div class="search" :style="{ width: width + 'px' }">
    <input
      type="text"
      v-model="searchText"
      :placeholder="placeholder"
      @blur="onSearch"
      @keyup.enter="onEnterSearch"
      :style="{ width: width - 35 + 'px' }"
    />
    <i class="el-icon-search"></i>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: [String, Number],
      default: 292,
    },
    placeholder: {
      type: String,
      default: '搜索员工编号、姓名、手机号、邮箱、账号',
    },
  },
  data() {
    return {
      searchText: '',
    };
  },
  methods: {
    onSearch() {
      this.$emit('onSearch', this.searchText);
    },
    onEnterSearch() {
      this.$emit('onEnterSearch', this.searchText);
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background: #fff;
  input {
    height: 28px;
    outline: none;
    border: none;
    margin-left: 10px;
    margin-right: 0px;
  }
}
</style>
