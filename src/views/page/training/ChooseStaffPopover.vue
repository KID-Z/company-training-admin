<!--
 * @Author: your name
 * @Date: 2021-07-13 10:09:05
 * @LastEditTime: 2021-07-13 15:00:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/training/ChooseStaff.vue
-->
<template>
  <div class="popover-container">
    <div class="popover-box">
      <div class="popover-table">
        <div>
          <div class="table-header-title">选择员工</div>
          <!-- 搜索员工 -->
          <div class="search-staff">
            <Tabs label1="按部门分配" label2="按岗位分配" label3="按个人分配" />
            <Search placeholder="姓名" width="100" />
            <Search placeholder="手机" width="100" />
          </div>

                 <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="45"> </el-table-column>
              <el-table-column prop="accountNumber" label="账号" width="80"> </el-table-column>

              <el-table-column label="照片" width="70">
                <template slot-scope="scope">
                  <img class="staff-avatar" :src="scope.row.photoUrl" />
                </template>
              </el-table-column>
              <el-table-column prop="personNumber" label="员工编号" width="100"> </el-table-column>
              <el-table-column prop="name" label="姓名" width="70"> </el-table-column>
              <el-table-column prop="phone" label="手机" width="110"> </el-table-column>
              <el-table-column prop="depName" label="部门" width="70"> </el-table-column>
              <el-table-column prop="poName" label="岗位" width="70"> </el-table-column>
            </el-table>
          <Pagination />
        </div>

        <div class="right-arrow"><i class="el-icon-arrow-right"></i></div>

        <div>
          <div class="table-header-title">已选择员工</div>
          <!-- 搜索员工 -->
          <div class="remove-staff">
            <div class="delete"><i class="el-icon-delete"></i> 移除员工</div>
            <div class="search-staff">
              <Search placeholder="姓名" width="100" />
              <Search placeholder="手机" width="100" />
            </div>
          </div>

       <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="50"> </el-table-column>
              <el-table-column prop="accountNumber" label="账号" width="100"> </el-table-column>
              <el-table-column prop="personNumber" label="员工编号" width="100"> </el-table-column>
              <el-table-column prop="name" label="姓名" width="100"> </el-table-column>
              <el-table-column prop="phone" label="手机" width="120"> </el-table-column>

              <el-table-column label="操作" width="90">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    >移除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          <Pagination />
        </div>
      </div>

      <!--  按钮 -->
      <div class="submit">
        <el-button type="info" size="large" @click="close">取消</el-button>
        <el-button type="primary" size="large" @click="close">保存</el-button>
      </div>
    </div>
    <!-- tree -->
    <div class="choose-staff">
      <div class="table-header-title">选择员工</div>
      <div class="search-staff">
        <Tabs label1="按部门分配" label2="按岗位分配" label3="按个人分配" />
      </div>
      <div class="choose-staff-table">
            <a-table
      :columns="columns"
      :data-source="data"
      :pagination="false"
      :row-selection="rowSelection"
      :expanded-row-keys.sync="expandedRowKeys"
    >
    </a-table>
      </div>
         <!--  按钮 -->
      <div class="submit">
        <el-button type="info" size="large" @click="close">取消</el-button>
        <el-button type="primary" size="large" @click="close">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from '@/components/Tabs/index.vue';
import Search from '@/components/Search/index.vue';
import Pagination from '@/components/Pagination/index.vue';

const columns = [
  {
    title: '部门名称',
    dataIndex: 'name',
    key: 'name',
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown sr.',
    children: [
      {
        key: 11,
        name: 'John Brown',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

export default {
  data() {
    return {
      drawer: true,
      data,
      columns,
      rowSelection,
      expandedRowKeys: [],
      tableData: [
        {
          personNumber: '77',
          name: '张三',
          phone: '158988811',
          photoUrl:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fg-search1.alicdn.com%2Fimg%2Fbao%2Fuploaded%2Fi3%2F3883849635%2FTB2eWnVhDXYBeNkHFrdXXciuVXa_%21%213883849635.jpg_300x300.jpg&refer=http%3A%2F%2Fg-search1.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627464871&t=2fd2a58223c94dfc8091b16c2991575e"',
          depName: '行政部',
          poName: '开发部',
          accountNumber: 'zs',
        },
      ],
      multipleSelection: [],
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
  components: {
    Tabs,
    Search,
    Pagination,
  },
};
</script>

<style lang="less" scoped>
.popover-container {
  width: 90%;
  margin: 0 auto;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
    .submit {
  margin-top: 80px;
  display: flex;
  justify-content: center;
}

.table-header-title {
  padding: 15px 0px 15px 15px;
  color: #333;
  font-size: 17px;
  font-weight: bold;
  background: #fafafa;
  margin-bottom: 0;
}

.popover-box {
  width: 1200px;
  background: #fff;
  margin: 0 50px;
  box-sizing: border-box;
  .search {
  margin-left: 20px;
  }
.popover-table {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  .right-arrow {
  font-size: 40px;
  margin-left: 15px;
  margin-right: 15px;
}
.remove-staff {
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  background: #fff;
  .delete {
    margin-top: 14px;
    margin-left: 12px;
  }
}
}
.staff-avatar {
  width: 50px;
  height: 50px;
}
}
  .search-staff {
  display: flex;
  padding: 10px 0px 0px 20px;
}
.choose-staff {
  width: 50%;
  position: fixed;
  left: 200px;
  bottom: 10px;
  background: #fff;
  .choose-staff-table {
    min-height: 300px;
  }
}
}
</style>
