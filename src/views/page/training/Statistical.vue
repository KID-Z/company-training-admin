<!--
 * @Author: your name
 * @Date: 2021-07-12 16:43:44
 * @LastEditTime: 2021-07-27 09:13:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/training/Statistical.vue
-->
<template>
  <div class="statistical">
    <div class="operation">
       <div class="search-staff">
          <Cascader placeholder="部门" />
          <Cascader placeholder="岗位" />
          <Cascader placeholder="状态" />
          <Search width="170" placeholder="搜索姓名、手机号码" />
        </div>
      <div class="export-excel">
        <el-button type="primary" plain >导出Excel</el-button>
      </div>
    </div>
    <div class="table-content">
      <el-table :data="tableData" style="width: 100%" height="calc(100vh - 200px)" stripe>
        <el-table-column label="姓名">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="手机号码">
          <template slot-scope="scope">
            <span>{{ scope.row.personNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column label="部门">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="岗位">
          <template slot-scope="scope">
            <span>{{ scope.row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <span>{{ scope.row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column label="完成度">
          <template slot-scope="scope">
            <span>{{ scope.row.email }}</span>
          </template>
        </el-table-column>
        <el-table-column label="获得学分">
          <template slot-scope="scope">
            <span>{{ scope.row.depName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="完成试卷">
          <template slot-scope="scope">
            <span>{{ scope.row.poName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right"> </el-table-column>
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
    Cascader,
    Search,
  },
};
</script>

<style lang="less">
.statistical {
  margin-left: 10px;
  .operation {
  display: flex;
  justify-content: space-between;
  .search-staff {
      margin-right: 120px;
      margin-bottom: 10px;
      display: flex;
    }
  .export-excel {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
}
</style>
