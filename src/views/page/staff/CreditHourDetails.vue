<!--
 * @Author: your name
 * @Date: 2021-07-08 15:14:10
 * @LastEditTime: 2021-07-26 14:17:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/staff/CreditHourDetails .vue
-->
<template>
  <div class="credit-hour-details">
    <div class="table-content">
      <el-table
        :data="creditHourDetailsList"
        style="width: 100%"
        height="calc(100vh - 145px)"
        stripe
      >
        <el-table-column label="获得学分途径">
          <template slot-scope="scope">
            <span>{{ scope.row.way }}</span>
          </template>
        </el-table-column>
        <el-table-column label="学分">
          <template slot-scope="scope">
            <span>{{ scope.row.credit }}</span>
          </template>
        </el-table-column>
        <el-table-column label="时间">
          <template slot-scope="scope">
            <span>{{ scope.row.createTime }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination/index.vue';
import axios from '@/api/staff';

export default {
  data() {
    return {
      creditHourDetailsList: [],
      total: 0,
    };
  },
  created() {
    const { id } = this.$route.params;
    const data = {
      userId: id,
      current: 1,
      size: '10',
    };
    axios.creditHourDetails(data).then((res) => {
      this.creditHourDetailsList = res.records;
      this.total = res.total;
    });
  },
  components: {
    Pagination,
  },
};
</script>
