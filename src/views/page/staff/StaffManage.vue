<!--
 * @Author: your name
 * @Date: 2021-06-03 11:29:26
 * @LastEditTime: 2021-08-02 14:08:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/PositionManage.vue
-->
<template>
  <div class="staff-manage">
    <h3 class="staff-manage-title">栏目管理列表</h3>
    <Tabs @changeOptions="state = $event" />
    <div class="operation">
      <div class="update-tabel">
        <div class="search-staff">
          <Cascader
            @handleChange="handleChange"
            placeholder="部门"
            type="dept"
            :options="deptTree"
          />
          <Cascader @handleChange="handleChange" placeholder="岗位" type="po" :options="poTree" />
        </div>
        <Search @onSearch="searchText = $event" />
      </div>
      <div class="handle-staff">
        <el-button type="primary" @click="searchStaff">搜索</el-button>
        <ExportExcel />
        <el-button type="primary" plain @click="changeDrawerOpen(true)">选择员工</el-button>
      </div>
    </div>
    <div class="table-content">
      <el-table
        :data="$store.state.staff.staffList"
        style="width: 100%"
        height="auto"
        v-loading="$store.state.staff.loading"
        stripe
      >
        <el-table-column label="ID" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="员工编号" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.personNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="照片" width="100">
          <template slot-scope="scope">
            <div class="demo-image__preview" v-if="scope.row.photoUrl">
              <el-image
                style="width: 50px; height: 50px"
                :src="scope.row.photoUrl"
                :preview-src-list="[scope.row.photoUrl]"
              >
              </el-image>
            </div>
            <template v-else>无</template>
          </template>
        </el-table-column>
        <el-table-column label="手机" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column label="邮箱" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.email }}</span>
          </template>
        </el-table-column>
        <el-table-column label="部门" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.depName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="岗位" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.poName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="账号" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.accountNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" width="165">
          <template slot-scope="scope">
            <span>{{ scope.row.createTime | filterDate }}</span>
          </template>
        </el-table-column>
        <el-table-column label="员工档案" width="100">
          <template>
            <span style="color: #3f99f7; cursor: pointer" @click="viewDetails">查看详情</span>
          </template>
        </el-table-column>
        <el-table-column label="状态" width="60">
          <template slot-scope="scope">
            <span>{{ scope.row.state | getState }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="210" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEnable(scope.$index, scope.row)">{{
              scope.row.state | buttonState
            }}</el-button>
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination :current="currentPage" :total="total" @onChangePage="onPage" />
    <EditStaffDrawer
      :editStaffId="editStaffId"
      :update="update"
      @updateStaffData="updateStaffData"
    />
    <ChooseStaffDrawer
      :hrStaff="hrStaff"
      :selected="selected"
      @changeDrawerClose="changeDrawerClose"
      @onHrChangePage="onHrChangePage"
      @onChangePage="onChangePage"
      @handleHrStaffChange="handleHrStaffChange"
      @handleStaffChange="handleStaffChange"
      @save="save"
      @onSearchStaff="onSearchStaff"
      @onSearchHrStaff="onSearchHrStaff"
      @onHandleDelete="onHandleDelete"
      @removeAll="removeAll"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination/index.vue';
import ChooseStaffDrawer from '@/components/ChooseStaffDrawer/index.vue';
import Tabs from '@/components/Tabs/index.vue';
import Cascader from '@/components/Cascader/index.vue';
import Search from '@/components/Search/index.vue';
import EditStaffDrawer from '@/components/EditStaffDrawer/index.vue';
import ExportExcel from '@/components/ExportExcel/index.vue';
import { getLocaldate } from '@/utils/moment';
import staff from '@/api/staff';
import axios from '@/api/tree';

export default {
  filters: {
    filterDate(date) {
      return getLocaldate(date);
    },
    getState(num) {
      let state;
      switch (num) {
        case 1:
          state = '待启用';
          break;
        case 2:
          state = '已启用';
          break;
        case 3:
          state = '已冻结';
          break;
        case 4:
          state = '已禁用';
          break;
        default:
          state = '';
      }
      return state;
    },
    buttonState(state) {
      const btnState = state === 1 || state === 3 || state === 4;
      return btnState ? '启用' : '禁用';
    },
  },
  created() {
    this.getDeptTreeData();
    this.getPoTreeData();
    this.getStaffList({ state: '' });
  },
  data() {
    return {
      update: Date.now(),
      state: '',
      searchText: '',
      dept: '',
      po: '',
      deptTree: [],
      poTree: [],
      editStaffId: '',
      currentPage: 1,
      total: 0,
      hrStaff: {
        total: 0,
        currentPage: 1,
        tableList: [],
        loading: false,
      },
      selected: {
        total: 0,
        currentPage: 1,
        tableList: [],
        loading: false,
        searchText: '',
      },
      integerList: [],
      chooseHrStaff: [],
      chooseStaff: [],
    };
  },
  methods: {
    onPage(page) {
      this.currentPage = page;
      this.getStaffList({
        state: this.state,
        name: this.searchText.trim(),
        depName: this.dept,
        poName: this.po,
      });
    },
    changeDrawerClose() {
      this.getStaffList({ state: '' });
      this.$store.dispatch('layout/changeDrawer', false);
    },
    removeAll() {
      this.deleteStaff(this.chooseStaff, 'hr', true);
    },
    onHandleDelete(data) {
      this.deleteStaff(data, 'hr');
    },
    deleteStaff(data, type = '', all = false) {
      let tip = `确定要删除id ${data[0]} 的员工吗?`;
      if (all) {
        tip = '确定要删除选中的所有员工吗?';
      }
      const h = this.$createElement;
      this.$msgbox({
        title: '删除提示',
        message: h('p', null, [h('span', null, tip)]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            staff.del(data).then(() => {
              let state;
              let name;
              if (type === 'hr') {
                state = '';
                name = this.selected.searchText;
                this.chooseStaffTable({ state, name });
              } else {
                state = this.state;
                name = this.searchText;
                this.getStaffList({ state, name });
              }
              done();
            });
          } else {
            done();
          }
        },
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功',
          });
        })
        .catch((err) => {
          this.$message.error(err.message);
        });
    },
    updateStaffData(data) {
      staff.update(data).then((res) => {
        if (res) {
          this.$message({
            type: 'success',
            message: '修改成功',
          });
          this.getStaffList({ state: this.state, name: this.searchText });
          this.$store.dispatch('staff/changeDrawer', false);
        }
      });
    },
    handleChange(value, type) {
      if (type === 'dept') {
        this.dept = value[value.length - 1] || '';
      } else if (type === 'po') {
        this.po = value[value.length - 1] || '';
      }
    },
    viewDetails() {
      this.$router.push({ name: 'ArchivesDetails' });
    },
    handleEnable(index, row) {
      this.$store.commit('staff/loadingState', true);
      const state = row.state === 1 || row.state === 3 || row.state === 4;
      this.updateStaffData({ id: row.id, state: state ? 2 : 1 });
    },
    handleEdit(index, row) {
      this.$store.dispatch('staff/changeDrawer', true);
      this.update = Date.now();
      this.editStaffId = row.id;
    },
    handleDelete(index, row) {
      this.deleteStaff([row.id]);
    },
    changeDrawerOpen() {
      this.getHrTableList(this.integerList);
      this.chooseStaffTable();
      this.$store.dispatch('layout/changeDrawer', true);
    },
    getStaffList(data = {}) {
      this.$store.commit('staff/loadingState', true);
      staff
        .list({
          ...data,
          current: this.currentPage,
          size: '10',
        })
        .then(
          (res) => {
            this.total = res.total;
            this.$store.dispatch('staff/setStaffList', res.records);
            this.$store.commit('staff/loadingState', false);
          },
          (err) => {
            this.$message.error(`${err.message}123444`);
            this.$store.commit('staff/loadingState', false);
          },
        );
    },
    chooseStaffTable(data = {}) {
      staff
        .list({
          ...data,
          current: this.selected.currentPage,
          size: '10',
        })
        .then(
          (res) => {
            this.$set(this.selected, 'tableList', res.records);
            this.selected.total = res.total;
            const integerList = [];
            for (let i = 0; i < res.records.length; i += 1) {
              integerList.push(res.records[i].personNumber);
            }
            this.integerList = integerList;
          },
          (err) => {
            this.$message.error(`${err.message}123444`);
          },
        );
    },
    getHrTableList(integerList, name = '', phone = '') {
      this.$set(this.hrStaff, 'loading', true);
      const data = {
        current: this.hrStaff.currentPage,
        size: '10',
        name: name.trim(),
        phone: phone.trim(),
        integerList,
      };
      staff.hr(data).then(
        (res) => {
          this.hrStaff.total = res.total;
          this.$set(this.hrStaff, 'tableList', res.list);
          this.$set(this.hrStaff, 'loading', false);
        },
        (err) => {
          this.$message.error(err.message);
          this.$set(this.hrStaff, 'loading', false);
        },
      );
    },
    onHrChangePage(page) {
      this.hrStaff.currentPage = page;
      this.getHrTableList(this.integerList);
    },
    onChangePage(page) {
      this.selected.currentPage = page;
      this.chooseStaffTable();
    },
    handleHrStaffChange(chooseHrStaff) {
      this.chooseHrStaff = chooseHrStaff;
    },
    handleStaffChange(chooseStaff) {
      const chooseStaffList = chooseStaff;
      this.chooseStaff = chooseStaffList.map((res) => res.id);
    },
    async save() {
      this.$store.dispatch('layout/loadingState', true);
      const addStaff = this.chooseHrStaff;
      for (let i = 0; i < addStaff.length; i += 1) {
        const t = addStaff[i];
        addStaff[i] = {
          accountNumber: t.userAccount || '',
          personNumber: t.code || '',
          phone: t.mobile || '',
          photoUrl: t.headUrl || '',
          depName: t.departmentName || '',
          poName: t.postName || '',
          positionId: '1',
          departmentId: '3',
          name: t.name || '',
          email: t.email || '',
          password: t.password || '',
          hrUserId: t.id,
          state: t.state || '',
        };
        await staff.add(addStaff[i]);
        if (i === addStaff.length - 1) {
          this.$store.dispatch('layout/changeDrawer', false);
          this.$store.dispatch('layout/loadingState', false);
        }
      }
    },
    // 搜索
    searchStaff() {
      if (!this.state && !this.searchText && !this.dept && !this.po) {
        this.getStaffList({ state: '' });
        return;
      }
      this.currentPage = 1;
      this.getStaffList({
        state: this.state,
        name: this.searchText.trim(),
        depName: this.dept,
        poName: this.po,
      });
    },
    onSearchStaff(searchText) {
      this.$set(this.selected, 'searchText', searchText);
      this.getStaffList({
        state: '',
        name: searchText.trim(),
      });
    },
    onSearchHrStaff(name, phone) {
      this.getHrTableList(this.integerList, name, phone);
    },
    // 得到部门树数据
    getDeptTreeData() {
      axios.dept().then((res) => {
        this.deptTree = res;
        this.$store.dispatch('tree/setDeptTree', res);
      });
    },
    getPoTreeData() {
      axios.post().then((res) => {
        this.poTree = res;
        this.$store.dispatch('tree/setPoTree', res);
      });
    },
  },
  components: {
    Pagination,
    ChooseStaffDrawer,
    Tabs,
    Cascader,
    Search,
    EditStaffDrawer,
    ExportExcel,
  },
};
</script>

<style lang="less" scoped>
.staff-manage {
  margin-left: 10px;
  .operation {
    display: flex;
    justify-content: space-between;
    .update-tabel {
      display: flex;
      align-items: center;
      margin-right: 50px;
      .search-staff {
        min-width: 262px;
        margin-right: 20px;
        display: flex;
      }
    }
    .handle-staff {
      min-width: 180px;
      display: flex;
      align-items: center;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>
