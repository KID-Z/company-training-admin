<!--
 * @Author: your name
 * @Date: 2021-07-13 10:24:45
 * @LastEditTime: 2021-07-27 09:14:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/training/Choose.vue
-->
<template>
  <div class="choose-examination-paper">
    <div class="table-container">
      <h3 class="table-header-title">选择试卷</h3>
      <div class="search-staff">
        <Search width="120" placeholder="试卷名称" />
        <Cascader placeholder="试卷类型" />
        <Cascader placeholder="分类" />
      </div>
      <div class="table-content">
        <el-table :data="tableData" style="width: 100%" height="400" stripe>
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="试卷名称">
            <template slot-scope="scope">
              <span>{{ scope.row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column label="试卷类型">
            <template slot-scope="scope">
              <span>{{ scope.row.personNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column label="分类">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="难度">
            <template slot-scope="scope">
              <span>{{ scope.row.phone }}</span>
            </template>
          </el-table-column>
          <el-table-column label="分数">
            <template slot-scope="scope">
              <span>{{ scope.row.phone }}</span>
            </template>
          </el-table-column>
          <el-table-column label="及格线">
            <template slot-scope="scope">
              <span>{{ scope.row.phone }}</span>
            </template>
          </el-table-column>
          <el-table-column label="限时(分)">
            <template slot-scope="scope">
              <span>{{ scope.row.phone }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <Pagination />
      <!--  按钮 -->
      <div class="submit">
        <el-button type="info" size="large" @click="close">取消</el-button>
        <el-button type="primary" size="large" @click="close">保存</el-button>
      </div>
    </div>
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
.choose-examination-paper {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  .table-container {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 900px;
    margin-left: 10px;
    padding-bottom: 30px;
    background: #fff;
    .table-header-title {
      margin-bottom: 10px;
      background: #f2f2f2;
      padding: 10px;
    }
    .search-staff {
      display: flex;
      padding: 0 20px;
    }
    .search {
      margin-right: 10px;
    }
    .submit {
      margin-top: 80px;
      text-align: center;
    }
  }
}
</style>
