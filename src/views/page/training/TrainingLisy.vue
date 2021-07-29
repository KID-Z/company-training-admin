<!--
 * @Author: your name
 * @Date: 2021-07-12 14:31:01
 * @LastEditTime: 2021-07-27 09:12:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/training/TrainingLisy.vue
-->
<template>
  <div class="training-lisy">
    <h3 class="training-lisy-title">课程管理列表</h3>
    <Tabs label2="待发布" label3="已发布" />
    <div class="operation">
       <div class="select-training">
          <Cascader placeholder="类型" />
          <Cascader placeholder="状态" />
          <Cascader placeholder="完成" />
          <Search width="150" placeholder="搜索培训名称" />
        </div>
      <div class="add-training">
        <el-button type="primary" plain @click="viewDetails('AddTraining')">新增</el-button>
      </div>
    </div>
    <div class="table-content">
      <el-table :data="tableData" style="width: 100%" height="calc(100vh - 280px)" stripe>
        <el-table-column label="ID" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="培训名称" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.personNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column label="开始时间" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="结束时间" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column label="封面" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column label="培训类型" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.email }}</span>
          </template>
        </el-table-column>
        <el-table-column label="达标学分" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.depName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.poName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="是否有考试" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.accountNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column label="是否完成" width="165">
          <template slot-scope="scope">
            <span>{{ scope.row.createTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.state }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="300" fixed="right">
          <template>
            <el-button size="mini">发布</el-button>
            <el-button size="mini" >编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
            <el-button size="mini" @click="viewDetails('Statistical')">统计</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination/index.vue';
import Tabs from '@/components/Tabs/index.vue';
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
  methods: {
    viewDetails(path) {
      this.$router.push({ name: path });
    },
  },
  components: {
    Tabs,
    Cascader,
    Search,
    Pagination,
  },
};
</script>

<style lang="less">
.training-lisy {
  margin-left: 10px;
  .training-lisy-title {
  margin-bottom: 20px;
}
.operation {
  display: flex;
  justify-content: space-between;
  .select-training {
      margin-right: 120px;
      margin-bottom: 10px;
      display: flex;
    }
  .add-training {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
}
</style>
