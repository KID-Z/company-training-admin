<!--
 * @Author: your name
 * @Date: 2021-07-15 14:30:25
 * @LastEditTime: 2021-07-15 14:33:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/statistics/StaffLearnStatistical.vue
-->

<template>
  <div class="staff-learn-statistical">
    <div class="basic-information">
      <div class="basic-information-title">基本信息统计</div>
      <div class="basic-information-detaisl">
        <div class="basic-information-item">
          <span>200</span>
          <span>员工数据</span>
        </div>
        <div class="basic-information-item">
          <span>200</span>
          <span>登录次数</span>
        </div>
        <div class="basic-information-item">
          <span>200</span>
          <span>上线率</span>
        </div>
        <div class="basic-information-item">
          <span>200</span>
          <span>总学习时长(小时)</span>
        </div>
        <div class="basic-information-item">
          <span>200</span>
          <span>人均学习时长</span>
        </div>
        <div class="basic-information-item">
          <span>200</span>
          <span>人均获得学分</span>
        </div>
      </div>
    </div>
    <div class="credit-hour-statistical">
      <div class="operation">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="～"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
        >
        </el-date-picker>
      </div>
      <div class="table-content">
        <el-table :data="tableData" style="width: 100%" height="calc(100vh - 190px)" stripe>
          <el-table-column label="ID">
            <template slot-scope="scope">
              <span>{{ scope.row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column label="姓名">
            <template slot-scope="scope">
              <span>{{ scope.row.personNumber }}</span>
            </template>
          </el-table-column>
          <el-table-column label="手机号码">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
                 <el-table-column label="部门">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
            <el-table-column label="岗位">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
            <el-table-column label="登录次数">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
            <el-table-column label="学习时长(小时)">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
            <el-table-column label="部门课完成度">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
           <el-table-column label="岗位课完成度">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
           <el-table-column label="获得学分">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
           <el-table-column label="获得证书">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
                 <el-table-column label="操作" fixed="right">
            <template slot-scope="scope">
              <el-button size="mini" @click="staffDetails(scope.$index, scope.row)"
                >查看详情</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <Pagination />
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination/index.vue';

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
      this.$router.push({ name: 'ArchivesDetails' });
    },
  },
  components: {
    Pagination,
  },
};
</script>

<style lang="less" scoped>
.staff-learn-statistical {
  margin-left: 20px;
  margin-right: 20px;
}
.basic-information {
  padding-bottom: 20px;
  margin-bottom: 50px;
  background: #f2f2f2;
  .basic-information-title {
    font-weight: bold;
    font-size: 16px;
    padding: 10px;
  }
  .basic-information-detaisl {
    display: flex;
    justify-content:space-around;
    margin: 0 20px;
    .basic-information-item {
      width: 120px;
      height: 70px;
      border: 1px solid #797979;
      background: #fff;
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      &:not(&:nth-of-type(1)) {
        margin-left: 20px;
      }
    }
  }
}
</style>
