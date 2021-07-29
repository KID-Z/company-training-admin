<!--
 * @Author: your name
 * @Date: 2021-07-09 10:59:12
 * @LastEditTime: 2021-07-28 15:32:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/course-manage/CourseComment.vue
-->
<template>
  <div class="course-comment">
    <div class="search-course">
      <Search width="190" placeholder="搜索员工姓名、手机号" @onEnterSearch="onEnterSearch" />
    </div>
    <div class="table-content">
      <el-table :data="commentList" style="width: 100%" height="calc(100vh - 190px)" stripe>
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
        <el-table-column label="评论内容">
          <template slot-scope="scope">
            <span>{{ scope.row.commentContent }}</span>
          </template>
        </el-table-column>
        <el-table-column label="评论时间">
          <template slot-scope="scope">
            <span>{{ scope.row.createTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="100" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="removeComment(scope.row.id)"
              >删除</el-button
            >
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
    this.getCommentList({
      current: '1',
      chaptersId: this.$route.params.id,
      userName: '',
    });
  },
  data() {
    return {
      commentList: [],
      total: 0,
    };
  },
  methods: {
    onEnterSearch(searcText) {
      this.getCommentList({
        current: '1',
        chaptersId: this.$route.params.id,
        userName: searcText,
      });
    },
    removeComment(id) {
      const h = this.$createElement;
      this.$msgbox({
        title: '提示',
        message: h('p', null, [h('span', null, `确定要删除ID ${id} 的评论吗?`)]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            course.removeComment([id]).then(() => {
              this.$message({
                type: 'success',
                message: '删除成功',
              });
              this.getCommentList({
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
    getCommentList(data) {
      this.$store.dispatch('layout/loadingState', true);
      course.courseSectionComment(data).then((res) => {
        this.commentList = res.records;
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

<style lang="less">
.course-comment {
  margin-left: 10px;
  .search-course {
    padding-left: 20px;
  }
}
</style>
