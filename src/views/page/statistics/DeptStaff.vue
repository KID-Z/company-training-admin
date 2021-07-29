<!--
 * @Author: your name
 * @Date: 2021-07-15 15:01:27
 * @LastEditTime: 2021-07-15 15:32:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/statistics/DeptStaff.vue
-->

<template>
  <div class="dept-staff">
    <div class="charts"><ChartsLine title="课程播放走势统计" mark="播放数" /></div>
    <template>
     <div class="operation">
      <Search width="150" placeholder="搜索任务名称" />
    </div>
      <div class="table-content">
        <el-table :data="tableData" style="width: 100%" height="calc(100vh - 190px)" stripe>
          <el-table-column label="ID">
            <template slot-scope="scope">
              <span>{{ scope.row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column label="任务名称">
            <template slot-scope="scope">
              <span>{{ scope.row.personNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column label="状态">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
                 <el-table-column label="参加人数">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
            <el-table-column label="完成进度">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
            <el-table-column label="开始时间">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
            <el-table-column label="结束时间">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
                <el-table-column label="操作" width="200" fixed="right">
          <template>
            <el-button size="mini" @click="staffDetails">查看详情</el-button>
          </template>
        </el-table-column>
        </el-table>
      </div>
      <Pagination />
    </template>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination/index.vue';
import ChartsLine from '@/views/page/statistics/ChartsLine.vue';
import Search from '@/components/Search/index.vue';

export default {
  data() {
    return {
      value1: '',
      tableData: [
        {
          id: 2,
          personNumber: '77',
          name: '张三',
          phone: '158988811',
          photoUrl:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fg-search1.alicdn.com%2Fimg%2Fbao%2Fuploaded%2Fi3%2F3883849635%2FTB2eWnVhDXYBeNkHFrdXXciuVXa_%21%213883849635.jpg_300x300.jpg&refer=http%3A%2F%2Fg-search1.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627464871&t=2fd2a58223c94dfc8091b16c2991575e"',
          email: '88@163efsfs.com',
          depName: '行政部',
          poName: '开发部',
          accountNumber: 'zs',
          createTime: '2021-06-03',
          state: 1,
          departmentId: 5,
          positionId: 1,
        },
      ],
    };
  },
  methods: {
    staffDetails() {
      this.$router.push({ name: 'DeptStaffDetails' });
    },
  },
  components: {
    ChartsLine,
    Pagination,
    Search,
  },
};
</script>

<style lang="less" scoped>
.dept-staff {
  margin-right: 20px;
  margin-left: 20px;
  .charts {
    margin-bottom: 50px;
  }
}
</style>
