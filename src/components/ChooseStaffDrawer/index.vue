<!--
 * @Author: your name
 * @Date: 2021-06-30 10:22:29
 * @LastEditTime: 2021-07-23 17:39:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ljt-ats-base/src/components/ChooseStaffTable/index.vue
-->
<template>
  <div class="popover-container">
    <el-drawer
      :class="{ 'hide-menu': $store.state.layout.collapsed }"
      :visible="drawer"
      direction="rtl"
      @close="close"
      append-to-body
    >
      <div class="popover">
        <div class="popover-table">
          <div>
            <div class="title">选择员工</div>
            <!-- 搜索员工 -->
            <div class="popover-search">
              <Search placeholder="搜索姓名" width="100" @onSearch="hrSearchName = $event" />
              <Search placeholder="搜索手机" width="100" @onSearch="hrSearchPhone = $event" />
              <el-button
                type="primary"
                @click="onSearchHrStaff"
                style="margin-left: 20px; height: 30px; line-height: 0px"
                >搜索</el-button
              >
            </div>

            <!-- 选择 -->
            <div class="choose">
              <el-table
                ref="multipleTable"
                :data="hrStaff.tableList"
                tooltip-effect="dark"
                height="calc(100vh - 270px)"
                v-loading="hrStaff.loading"
                stripe
                @selection-change="handleHrStaffChange"
              >
                <el-table-column type="selection" width="45"> </el-table-column>
                <el-table-column prop="userAccount" label="账号" width="115"> </el-table-column>

                <el-table-column label="照片" width="85">
                  <template slot-scope="scope">
                    <div class="demo-image__preview" v-if="scope.row.headUrl">
                      <el-image
                        style="width: 50px; height: 50px"
                        :src="scope.row.headUrl"
                        :preview-src-list="[scope.row.headUrl]"
                      >
                      </el-image>
                    </div>
                    <template v-else>无</template>
                  </template>
                </el-table-column>
                <el-table-column prop="id" label="员工编号" width="115"> </el-table-column>
                <el-table-column prop="name" label="姓名" width="70"> </el-table-column>
                <el-table-column prop="mobile" label="手机" width="115"> </el-table-column>
                <el-table-column prop="departmentName" label="部门" width="140"> </el-table-column>
                <el-table-column prop="postName" label="岗位" width="80"> </el-table-column>
              </el-table>
            </div>
            <Pagination
              :current="hrStaff.currentPage"
              :total="hrStaff.total"
              @onChangePage="onHrChangePage"
            />
          </div>

          <div class="right-arrow"><i class="el-icon-arrow-right"></i></div>

          <div>
            <div class="title">已选择员工</div>
            <!-- 搜索员工 -->
            <div class="remove-staff">
              <div class="delete">
                <i class="el-icon-delete"></i> <span @click="removeAll">移除员工</span>
              </div>
              <div class="popover-search">
                <Search placeholder="搜索姓名、手机" width="200" @onSearch="searchText = $event" />
                <el-button
                  type="primary"
                  @click="onSearchStaff"
                  style="margin-left: 20px; height: 30px; line-height: 0px"
                  >搜索</el-button
                >
              </div>
            </div>

            <!-- 选择 -->
            <div class="choose">
              <el-table
                ref="multipleTable"
                tooltip-effect="dark"
                :data="selected.tableList"
                v-loading="selected.loading"
                stripe
                height="calc(100vh - 270px)"
                @selection-change="handleStaffChange"
              >
                <el-table-column type="selection" width="50"> </el-table-column>
                <el-table-column prop="accountNumber" label="账号" width="100"> </el-table-column>
                <el-table-column prop="personNumber" label="员工编号" width="100">
                </el-table-column>
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
            </div>
            <Pagination
              :current="selected.currentPage"
              :total="selected.total"
              @onChangePage="onChangePage"
            />
          </div>
        </div>

        <!--  按钮 -->
        <div class="submit">
          <el-button type="info" size="large" @click.stop="close">取消</el-button>
          <el-button type="primary" size="large" @click="save">保存</el-button>
        </div>
      </div>
      <Loading  />
    </el-drawer>
  </div>
</template>

<script>
import Search from '@/components/Search/index.vue';
import Loading from '@/components/Loading/index.vue';
import Pagination from '@/components/Pagination/index.vue';
import { mapState } from 'vuex';

export default {
  props: {
    selected: {
      type: Object,
    },
    hrStaff: {
      type: Object,
    },
    integerList: {
      type: Array,
    },
    chooseHrStaff: {
      type: Array,
    },
  },
  data() {
    return {
      hrSearchName: '',
      hrSearchPhone: '',
      searchText: '',
      drawerClose: false,
    };
  },
  computed: {
    ...mapState('layout', ['drawer']),
  },
  methods: {
    removeAll() {
      this.$emit('removeAll');
    },
    handleDelete(index, row) {
      this.$emit('onHandleDelete', [row.id], 'hr');
    },
    onSearchHrStaff() {
      this.$emit('onSearchHrStaff', this.hrSearchName, this.hrSearchPhone);
    },
    onSearchStaff() {
      this.$emit('onSearchStaff', this.searchText);
    },
    save() {
      this.$emit('save');
    },
    handleHrStaffChange(chooseHrStaff) {
      this.$emit('handleHrStaffChange', chooseHrStaff);
    },
    handleStaffChange(chooseStaff) {
      this.$emit('handleStaffChange', chooseStaff);
    },
    onChangePage(page) {
      this.$emit('onChangePage', page);
    },
    onHrChangePage(page) {
      this.$emit('onHrChangePage', page);
    },
    close() {
      if (!this.drawerClose) {
        this.$emit('changeDrawerClose', false);
        this.drawerClose = true;
        setTimeout(() => {
          this.drawerClose = false;
        }, 500);
      }
    },
  },
  components: {
    Search,
    Loading,
    Pagination,
  },
};
</script>

<style lang="less" scoped>
.search {
  margin-left: 20px;
}
.popover-container {
  width: 90%;
  margin: 0 auto;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}
.popover {
  width: 1200px;
  background: #fff;
  margin: 0 50px;
  margin-left: 110px;
  box-sizing: border-box;
}
.popover-search {
  display: flex;
  padding: 10px 0px 0px 20px;
}
.popover-table {
  display: flex;
  justify-content: center;
  background: #fff;
}
.right-arrow {
  font-size: 40px;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  align-items: center;
}

.title {
  padding: 15px 0px 15px 15px;
  color: #333;
  font-size: 17px;
  font-weight: bold;
  background: #fafafa;
  margin-bottom: 0;
}

.remove-staff {
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  background: #fff;
  .delete {
    width: 77px;
    margin-top: 14px;
    margin-left: 12px;
  }
}

.submit {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.staff-avatar {
  width: 40px;
  height: 40px;
}
</style>
