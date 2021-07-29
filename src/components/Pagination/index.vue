<!--
 * @Author: your name
 * @Date: 2021-06-30 09:55:12
 * @LastEditTime: 2021-07-26 13:08:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ljt-ats-base/src/components/Pagination/index.vue
-->
<template>
  <div class="pagination" v-if="total > 10">
    <span>共 {{ total }} 条记录</span>
    <a-pagination
      :current="current"
      :total="total"
      :page-size="pageSize"
      :hide-on-single-page="true"
      @change="onChange"
    >
    </a-pagination>
  </div>
</template>
<script>
export default {
  props: {
    total: {
      type: [Number, String],
      default: 0,
    },
    current: {
      type: [Number, String],
      default: 1,
    },
  },
  data() {
    return {
      pageSize: 10,
    };
  },
  methods: {
    onChange(page) {
      this.$emit('onChangePage', page);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 0 10px;
}
</style>
