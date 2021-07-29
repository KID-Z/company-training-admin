<!--
 * @Author: your name
 * @Date: 2021-07-08 15:09:52
 * @LastEditTime: 2021-07-27 09:06:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/CreditHourRank.vue
-->

<template>
  <div class="credit-hour-rank">
    <div class="operation">
      <div style="margin-right: 20px; display: flex; align-items: center">
        <Search width="150" @onSearch="searchText = $event" placeholder="搜索姓名、手机号" />
      </div>
      <Cascader placeholder="部门" @handleChange="handleChange" type="dept" :options="deptTree" />
      <Cascader placeholder="岗位" @handleChange="handleChange" type="po" :options="postTree" />
      <el-button class="on-search" type="primary" @click="search">搜索</el-button>
    </div>
    <div class="table-content">
      <el-table :data="creditHourRankList" style="width: 100%" height="calc(100vh - 190px)" stripe>
        <el-table-column label="名次">
          <template slot-scope="scope">
            <span>{{ scope.row.userId || "无" }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名">
          <template slot-scope="scope">
            <span>{{ scope.row.name || "无" }}</span>
          </template>
        </el-table-column>
        <el-table-column label="手机号">
          <template slot-scope="scope">
            <span>{{ scope.row.phone || "无" }}</span>
          </template>
        </el-table-column>
        <el-table-column label="部门">
          <template slot-scope="scope">
            <span>{{ scope.row.depName || "无" }}</span>
          </template>
        </el-table-column>
        <el-table-column label="岗位">
          <template slot-scope="scope">
            <span>{{ scope.row.poName || "无" }}</span>
          </template>
        </el-table-column>
        <el-table-column label="当前学分">
          <template slot-scope="scope">
            <span>{{ scope.row.credit || "无" }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <span
              style="color: #3f99f7; cursor: pointer"
              @click="viewDetails(scope.$index, scope.row)"
              >学分详情</span
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination :current="currentPage" :total="total" @onChangePage="onChangePage" />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination/index.vue';
import Cascader from '@/components/Cascader/index.vue';
import Search from '@/components/Search/index.vue';
import axios from '@/api/staff';
import tree from '@/api/tree';

export default {
  data() {
    return {
      currentPage: 1,
      creditHourRankList: [],
      total: 0,
      current: 1,
      searchText: '',
      deptTree: [],
      postTree: [],
      dept: '',
      po: '',
    };
  },
  created() {
    const data = {
      current: 1,
      size: '10',
      name: '',
      depName: '',
      poName: '',
    };
    this.getCreditHourRankList(data);
    this.getDeptTreeData();
    this.getPostTreeData();
  },
  methods: {
    search() {
      const data = {
        current: 1,
        size: '10',
        name: this.searchText,
        depName: this.dept,
        poName: this.po,
      };
      this.getCreditHourRankList(data);
    },
    handleChange(value, type) {
      if (type === 'dept') {
        this.dept = value[value.length - 1];
      } else if (type === 'po') {
        this.po = value[value.length - 1];
      }
    },
    getCreditHourRankList(data) {
      axios.creditHourRank(data).then((res) => {
        this.creditHourRankList = res.records;
        this.total = res.total;
      });
    },
    onChangePage(page) {
      console.log(page);
    },
    viewDetails(index, row) {
      this.$router.push({ name: 'CreditHourDetails', params: { id: row.userId } });
    },
    // 得到部门树数据
    getDeptTreeData() {
      tree.dept().then((res) => {
        this.deptTree = res;
      });
    },
    getPostTreeData() {
      tree.post().then((res) => {
        this.postTree = res;
      });
    },
  },
  components: {
    Pagination,
    Search,
    Cascader,
  },
};
</script>

<style lang="less">
.credit-hour-rank {
  margin-left: 10px;
  .search {
    margin-bottom: 0;
  }
}
.operation {
  display: flex;
  align-items: center;
}
.on-search {
  height: 30px;
  line-height: 5px;
}
</style>
