<!--
 * @Author: your name
 * @Date: 2021-07-14 10:35:20
 * @LastEditTime: 2021-07-27 09:17:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/exam/AskForLeave.vue
-->

<template>
  <div class="ask-for-leave">
    <div class="operation">
      <div class="search-staff">
        <Cascader placeholder="部门" />
        <Cascader placeholder="岗位" />
        <Cascader placeholder="完成" />
        <Search width="170" placeholder="搜索姓名、手机号码" />
      </div>
      <div>
        <el-button type="primary" plain >批量批准</el-button>
        <el-button type="primary" plain >批量拒绝</el-button>
        <el-button type="primary" plain>导出</el-button>
      </div>
    </div>
    <div class="table-content">
      <el-table :data="tableData" style="width: 100%" height="calc(100vh - 195px)" stripe>
            <el-table-column
      type="selection"
      width="55">
    </el-table-column>
        <el-table-column label="姓名" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="手机号" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.personNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column label="部门" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="岗位" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column label="开始时间" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column label="结束时间" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.email }}</span>
          </template>
        </el-table-column>
        <el-table-column label="天数" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.depName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="申请内容" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.poName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="申请时间" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.accountNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态" width="165">
          <template slot-scope="scope">
            <span>{{ scope.row.createTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150" fixed="right">
          <template>
            <el-button size="mini">批准</el-button>
            <el-button size="mini">拒绝</el-button>
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
    Cascader,
    Search,
    Pagination,
  },
};
</script>

<style lang="less">
.ask-for-leave {
  margin-left: 10px;
  .operation {
    display: flex;
    justify-content: space-between;
    .search-staff {
      margin-right: 120px;
      margin-bottom: 10px;
      display: flex;
    }
    div:nth-of-type(2) {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>
