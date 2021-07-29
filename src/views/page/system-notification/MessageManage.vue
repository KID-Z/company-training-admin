<!--
 * @Author: your name
 * @Date: 2021-07-16 09:30:38
 * @LastEditTime: 2021-07-16 10:40:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/system-notification/a.vue
-->

<template>
  <div class="message-manage">
    <div class="operation">
      <Search width="150" placeholder="搜索通知内容" />
      <a-button
        type="primary"
        style="margin-left: 10px; margin-right: 10px; height: 30px"
        @click="drawer = true"
      >
        批量删除
      </a-button>
    </div>
   <div class="table-content">
      <el-table :data="tableData" style="width: 100%" height="calc(100vh - 205px)" stripe>
            <el-table-column
      type="selection"
      width="55">
    </el-table-column>
        <el-table-column label="通知内容">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="通知人">
          <template slot-scope="scope">
            <span>{{ scope.row.personNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column label="通知人">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="通知时间">
          <template slot-scope="scope">
            <span>{{ scope.row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200" fixed="right">
          <template>
            <el-button size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination />
  </div>
</template>
<script>
import Search from '@/components/Search/index.vue';
import Pagination from '@/components/Pagination/index.vue';

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

<style lang="less" scoped>
.message-manage {
.operation {
  display: flex;
  padding-left: 20px;
  margin-bottom: 20px;
  justify-content: space-between;
}
}
</style>
