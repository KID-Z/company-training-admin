<!--
 * @Author: your name
 * @Date: 2021-07-14 09:09:49
 * @LastEditTime: 2021-07-14 10:43:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/a/a.vue
-->

<template>
  <div class="exam">
    <div class="operation">
      <div class="search-exam">
        <Cascader placeholder="类型" />
        <Cascader placeholder="状态" />
        <Cascader placeholder="完成" />
        <Search width="150" placeholder="搜索考试任务名称" />
      </div>
      <div class="add-exam-btn">
        <el-button type="primary" plain @click="addExam(true)">新增</el-button>
        <el-button type="primary" plain>导出</el-button>
      </div>
    </div>
    <div class="table-content">
      <el-table :data="tableData" style="width: 100%" height="calc(100vh - 250px)" stripe>
        <el-table-column label="ID" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="考试任务名称" width="100">
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
        <el-table-column label="答案公布时间" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column label="试卷" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.email }}</span>
          </template>
        </el-table-column>
        <el-table-column label="是否重考" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.depName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="重考次数" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.poName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="人员" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.accountNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column label="简介" width="165">
          <template slot-scope="scope">
            <span>{{ scope.row.createTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.state }}</span>
          </template>
        </el-table-column>
        <el-table-column label="补考状态" width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.state }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="300" fixed="right">
          <template>
            <el-button size="mini">发布</el-button>
            <el-button size="mini">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
            <el-button size="mini">生成阅卷链接</el-button>
            <el-button size="mini">开启补考</el-button>
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
      drawer: false,
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
.exam {
  margin-left: 10px;
  .operation {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .select-exam {
      margin-right: 120px;
      display: flex;
    }
    .add-exam-btn {
      margin-right: 10px;
    }
  }
}
</style>
