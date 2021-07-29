<!--
 * @Author: your name
 * @Date: 2021-07-08 13:35:59
 * @LastEditTime: 2021-07-27 09:16:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/Staff.vue
-->

<template>
  <div class="exam-statistical">
    <div class="search-examination-paper">
      <Cascader />
       <Search width="150" placeholder="试卷名称" />
    </div>
    <div class="table-content">
      <el-table
        :data="tableData"
        style="width: 100%"
        height="calc(100vh - 190px)"
        stripe
      >
        <el-table-column label="ID">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="试卷名称">
          <template slot-scope="scope">
            <span>{{ scope.row.personNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column label="总分">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="及格线">
          <template slot-scope="scope">
            <span>{{ scope.row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column label="分数">
          <template slot-scope="scope">
            <span>{{ scope.row.state  }}</span>
          </template>
        </el-table-column>
         <el-table-column label="答题时间(分钟)">
          <template slot-scope="scope">
            <span>{{ scope.row.state  }}</span>
          </template>
        </el-table-column>
        <el-table-column label="是否重考">
          <template slot-scope="scope">
            <span>{{ scope.row.state  }}</span>
          </template>
        </el-table-column>
        <el-table-column label="重考次数">
          <template slot-scope="scope">
            <span>{{ scope.row.state  }}</span>
          </template>
        </el-table-column>
        <el-table-column label="交卷时间">
          <template slot-scope="scope">
            <span>{{ scope.row.state  }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination/index.vue';
import Cascader from '@/components/Cascader/index.vue';
import Search from '@/components/Search/index.vue';

export default {
  data() {
    return {
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
  components: {
    Pagination,
    Search,
    Cascader,
  },
};
</script>

<style lang="less">
.exam-statistical {
  margin-left: 10px;
  .search-examination-paper {
  display: flex;
}
}
</style>
