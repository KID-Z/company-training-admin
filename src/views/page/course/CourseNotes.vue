<!--
 * @Author: your name
 * @Date: 2021-07-09 10:58:15
 * @LastEditTime: 2021-08-02 13:34:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/course-manage/CourseNotes.vue
-->

<template>
  <div class="course-notes">
    <div class="search-staff">
      <Search width="190" placeholder="搜索员工姓名、手机号" @onEnterSearch="onEnterSearch" />
    </div>
    <div class="table-content">
      <el-table :data="notesList" style="width: 100%" height="calc(100vh - 190px)" stripe>
        <el-table-column label="ID">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="课程名称">
          <template slot-scope="scope">
            <span>{{ scope.row.chaptersName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="员工姓名">
          <template slot-scope="scope">
            <span>{{ scope.row.userName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="手机号">
          <template slot-scope="scope">
            <span>{{ scope.row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column label="笔记内容">
          <template slot-scope="scope">
            <span>{{ scope.row.noteContent }}</span>
          </template>
        </el-table-column>
        <el-table-column label="记录时间">
          <template slot-scope="scope">
            <span>{{ scope.row.createTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="removeNotes(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination />
    <Loading />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination/index.vue';
import Search from '@/components/Search/index.vue';
import Loading from '@/components/Loading/index.vue';
import course from '@/api/course';

export default {
  created() {
    this.getNotesList({
      current: '1',
      chaptersId: this.$route.params.id,
      userName: '',
    });
  },
  data() {
    return {
      notesList: [],
      total: 0,
    };
  },
  methods: {
    onEnterSearch(searcText) {
      this.getNotesList({
        current: '1',
        chaptersId: this.$route.params.id,
        userName: searcText,
      });
    },
    removeNotes(id) {
      const h = this.$createElement;
      this.$msgbox({
        title: '提示',
        message: h('p', null, [h('span', null, `确定要删除ID ${id} 的笔记吗?`)]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            course.removeNotes([id]).then(() => {
              this.$message({
                type: 'success',
                message: '删除成功',
              });
              this.getNotesList({
                current: '1',
                chaptersId: this.$route.params.id,
                userName: '',
              });
              done();
            });
          } else {
            done();
          }
        },
      }).catch((err) => {
        console.log(err);
      });
    },
    getNotesList(data) {
      this.$store.dispatch('layout/loadingState', true);
      course.courseSectionNotes(data).then((res) => {
        this.notesList = res.records;
        this.total = res.total;
        this.$store.dispatch('layout/loadingState', false);
      });
    },
  },
  components: {
    Pagination,
    Search,
    Loading,
  },
};
</script>

<style lang="less" scoped>
.course-notes {
  margin-left: 10px;
  .search-staff {
    padding-left: 20px;
  }
}
</style>
