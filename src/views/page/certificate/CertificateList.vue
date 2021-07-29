<!--
 * @Author: your name
 * @Date: 2021-07-14 10:37:19
 * @LastEditTime: 2021-07-14 10:46:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/certificate/CertificateList.vue
-->

<template>
  <div class="certificate">
    <div class="operation">
      <div class="search-certificate">
        <Search width="170" placeholder="搜索姓名、手机号码" />
      </div>
      <div>
        <el-button type="primary" plain>新增</el-button>
        <el-button type="primary" plain >批量删除</el-button>
      </div>
    </div>
    <div class="table-content">
      <el-table :data="tableData" style="width: 100%" height="calc(100vh - 195px)" stripe>
            <el-table-column
      type="selection"
      width="55">
    </el-table-column>
        <el-table-column label="证书名称">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="证书内容">
          <template slot-scope="scope">
            <span>{{ scope.row.personNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column label="创建时间">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="210" fixed="right">
          <template>
            <el-button size="mini">预览</el-button>
            <el-button size="mini">编辑</el-button>
             <el-button size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination/index.vue';
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
    Search,
    Pagination,
  },
};
</script>

<style lang="less">
.certificate{
  margin-left: 10px;
  .operation {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .search-certificate {
      margin-left: 30px;
      display: flex;
    }
    div:nth-of-type(2) {
      margin-right: 10px;
    }
  }
}
</style>
