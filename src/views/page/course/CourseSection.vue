<!--
 * @Author: your name
 * @Date: 2021-07-09 09:46:54
 * @LastEditTime: 2021-07-29 16:46:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/course-manage/CourseManage.vue
-->

<template>
  <div class="course-section">
    <h3 class="course-section-title">课节管理列表</h3>
    <div class="manage-list">
      <div class="update-tabel">
        <div class="search-lessons">
          <Tabs label2="待发布" label3="已发布" @changeOptions="tabsState = $event" />
          <Select :options="playTypeList" placeholder="播放类型" @change="playTypeValue = $event" />
          <Search width="120" placeholder="搜索课程名称" @onSearch="searchText = $event" />
          <el-button type="primary" class="on-search" plain @click="searchCourse">搜索</el-button>
        </div>
      </div>
      <div class="add">
        <el-button type="primary" plain @click="add">新增</el-button>
      </div>
    </div>
    <div class="table-content">
      <el-table :data="courseSectionList" style="width: 100%" height="calc(100vh - 240px)" stripe>
        <el-table-column label="ID" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="章节" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.chapter }}</span>
          </template>
        </el-table-column>
        <el-table-column label="课程名称" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.sectionName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="封面" width="100">
          <template slot-scope="scope">
            <div class="demo-image__preview" v-if="scope.row.coverImage">
              <el-image
                style="width: 50px; height: 50px"
                :src="scope.row.coverImage"
                :preview-src-list="[scope.row.coverImage]"
              >
              </el-image>
            </div>
            <template v-else>无</template>
          </template>
        </el-table-column>
        <el-table-column label="学分" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.credit }}</span>
          </template>
        </el-table-column>
        <el-table-column label="时长" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.duration }}</span>
          </template>
        </el-table-column>
        <el-table-column label="播放次数" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.views }}</span>
          </template>
        </el-table-column>
        <el-table-column label="学习人数" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.stuCount }}</span>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.createTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="390" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" @click="updateState(scope.row)">{{
              scope.row.state === 1 ? "发布" : "撤销"
            }}</el-button>
            <el-button size="mini" @click="edit(scope.row.id)">编辑</el-button>
            <el-button size="mini" type="danger" @click="remove(scope.row.id)">删除</el-button>
            <el-button size="mini" @click="viewDetails('CourseComment', scope.row.id)"
              >课程评论</el-button
            >
            <el-button size="mini" @click="viewDetails('CourseNotes', scope.row.id)"
              >课程笔记</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination />
    <el-drawer title="添加课节" :visible.sync="drawer" append-to-body>
      <div class="add-lessons">
        <el-form
          :model="editData"
          ref="editData"
          label-width="100px"
          label-position="left"
          class="demo-ruleForm"
        >
          <el-form-item
            label="章节"
            prop="chapter"
            :rules="[{ required: true, message: '章节不能为空' }]"
          >
            <el-select v-model="editData.chapter" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="课节名称"
            prop="sectionName"
            :rules="[{ required: true, message: '课节名称不能为空' }]"
          >
            <el-input
              v-model.number="editData.sectionName"
              autocomplete="off"
              placeholder="请输入课节名称"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="播放类型"
            prop="playType"
            :rules="[{ required: true, message: '播放类型不能为空' }]"
          >
            <Select
              :value="editData.playType"
              :options="playTypeList"
              placeholder="播放类型"
              @change="editData.playType = $event"
            />
          </el-form-item>
          <el-form-item label="封面" prop="courseImage" class="upload-img">
            <a-upload
              action="/api/training/upload/upload"
              list-type="picture-card"
              name="file"
              :headers="{
                Authorization: `Bearer ${$store.state.user.token}`,
              }"
              :file-list="fileList"
              @change="handleChangeCover"
            >
              <div v-if="fileList.length < 1">
                <a-icon type="plus" />
                <div class="ant-upload-text">上传封面</div>
              </div>
            </a-upload>
          </el-form-item>
          <el-form-item label="文件" prop="file">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-success="handleSuccess"
              :on-remove="handleRemove"
              :file-list="filePathList"
              list-type="picture"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item
            label="学分"
            prop="credit"
            :rules="[{ required: true, message: '学分不能为空' }]"
          >
            <el-input
              v-model.number="editData.credit"
              autocomplete="off"
              placeholder="请输入学分"
            ></el-input>
          </el-form-item>
          <el-form-item label="时长" prop="duration">
            <div class="duration">
              <el-input v-model.number="hour" autocomplete="off" placeholder="时"></el-input>
              <el-input v-model.number="minute" autocomplete="off" placeholder="分"></el-input>
              <el-input v-model.number="second" autocomplete="off" placeholder="秒"></el-input>
            </div>
          </el-form-item>
          <el-form-item class="submit">
            <el-button type="primary" @click="submitForm('editData')">确定</el-button>
            <el-button @click="resetForm('editData')">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
    <Loading />
  </div>
</template>

<script>
/* eslint-disable */

import Pagination from "@/components/Pagination/index.vue";
import Tabs from "@/components/Tabs/index.vue";
import Select from "@/components/Select/index.vue";
import Search from "@/components/Search/index.vue";
import Loading from "@/components/Loading/index.vue";
import course from "@/api/course";

function getRandomStr() {
  return Math.random().toString(16).substr(2, 4);
}

export default {
  data() {
    return {
      tabsState: "",
      courseSectionList: [],
      total: 0,
      drawer: false,
      searchText: "",
      palyTypeValue: "",
      playTypeList: [
        { label: "视频", value: 1 },
        { label: "图文", value: 2 },
        { label: "音频", value: 3 },
        { label: "PDF", value: 4 },
      ],
      type: "",
      editData: {
        chapter: "",
        courseId: "",
        coverImage: "",
        createTime: "",
        credit: 0,
        duration: "0",
        filePath: "",
        isDelete: 1,
        playType: 1,
        sectionName: "",
        state: 1,
        stuCount: null,
      },
      originalData: [],
      fileList: [],
      filePathList: [],
      hour: 0,
      minute: 0,
      second: 0,
    };
  },
  created() {
    this.getCourseSectionList({
      current: "1",
      sectionName: "",
      playType: '',
      courseId: this.$route.params.id,
    });
  },
  computed: {
    date() {
      return `${this.hour * 60 * 60 + this.minute * 60 + this.second}`;
    },
  },
  methods: {
    getDateFormat(val) {
        if (val < 60) {
          return `${val}秒`;
        } else {
          var min_total = Math.floor(val / 60); // 分钟
          var sec = Math.floor(val % 60); // 余秒
          if (min_total < 60) {
            return `${min_total}分${sec}秒`;
          } else {
            return `${Math.floor(min_total / 60)}小时${Math.floor(min_total % 60)}分${sec}秒`;
          }
        }
    },
    add() {
      this.drawer = true;
      this.type = "add";
      const keys = Object.keys(this.editData);
      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        this.editData[key] = "";
      }
      this.hour = 0;
      this.minute = 0;
      this.second = 0;
      this.fileList = [];
      this.$delete(this.editData, "userCredits");
      this.$delete(this.editData, "userId");
      this.$delete(this.editData, "id");
      this.$delete(this.editData, "createTime");
      this.$delete(this.editData, "userStudies");
      this.$set(this.editData, "isDelete", 1);
      this.$set(this.editData, "state", 1);
      this.$set(this.editData, "courseId", this.$route.params.id);
    },
    async edit(id) {
      this.drawer = true;
      this.type = "edit";

      try {
        this.editData = await course.courseSectionDetails({ id });
        const val = this.editData.duration;
       if (val < 60) {
          return val;
        } else {
          var min_total = Math.floor(val / 60); // 分钟
          var sec = Math.floor(val % 60); // 余秒
          if (min_total < 60) {
            this.hour = 0;
            this.minute = min_total;
            this.second = sec;
          } else {
            this.hour = Math.floor(min_total / 60); // 小时数
            this.minute = Math.floor(min_total % 60); // 余分钟
            this.second = sec;
          }
        }
        if (this.editData.coverImage) {
          this.fileList = [
            {
              uid: getRandomStr(),
              name: `${getRandomStr()}.png`,
              status: "deon",
              url: this.editData.coverImage,
            },
          ];
        }
        this.originalData = JSON.parse(JSON.stringify(this.editData));
      } catch (error) {
        this.$message({
          type: "error",
          message: error.message,
        });
      }
    },
    updateState(row) {
      const state = row.state === 1 ? 2 : 1;
      this.update({ id: row.id, state });
    },
    update(data) {
      this.$store.dispatch("layout/loadingState", true);
      course.courseSectionUpdate(data).then((res) => {
        if (res) {
          this.$message({
            type: "success",
            message: "修改成功",
          });
          this.getCourseSectionList({
            current: "1",
            sectionName: this.searchText,
            playType: this.palyTypeValue,
            state: this.tabsState,
            courseId: this.$route.params.id,
          });
        } else {
          this.$message({
            type: "error",
            message: "修改失败",
          });
        }
      });
    },
    remove(id) {
      const h = this.$createElement;
      this.$msgbox({
        title: "提示",
        message: h("p", null, [h("span", null, `确定要删除ID ${id} 的课节吗?`)]),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            course.courseSectionRemove([id]).then(() => {
              this.$message({
                type: "success",
                message: "删除成功",
              });
              this.searchCourse();
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
    searchCourse() {
      this.getCourseSectionList({
        current: "1",
        sectionName: this.searchText,
        playType: this.palyTypeValue,
        state: this.tabsState,
        courseId: this.$route.params.id,
      });
    },
    getCourseSectionList(data) {
      this.$store.dispatch("layout/loadingState", true);
      course.courseSectionList(data).then((res) => {
        this.courseSectionList = res.list;
        this.courseSectionList.map(item=>{
          item.duration = this.getDateFormat(item.duration);
          return item;
        })
        this.total = res.total;
        this.$store.dispatch("layout/loadingState", false);
      });
    },
    viewDetails(path, id) {
      this.$router.push({ name: path, params: { id } });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          console.log("error submit!!");
          return;
        }
        if (this.type === "edit") {
          const original = Object.entries(this.originalData);
          this.editData.duration = this.date;
          const editData = Object.entries(this.editData);
          const data = {};
          for (let i = 0; i < original.length; i += 1) {
            const course = editData[i];
            if (original[i][1] !== course[1]) {
              data[course[0]] = course[1];
            }
          }
          if (JSON.stringify(data) === "{}") {
            this.$message({
              type: "success",
              message: "没有任何改变",
            });
            return;
          }
          data.id = this.originalData.id;
          this.update(data);
          this.drawer = false;
        } else {
          this.editData.duration = this.date();
          course.courseSectionAdd(this.editData).then(
            () => {
              this.$message({
                type: "success",
                message: "新增成功",
              });
              this.searchCourse();
              this.drawer = false;
            },
            (err) => {
              this.$message({
                type: "error",
                message: err.message,
              });
            }
          );
        }
      });
    },
    resetForm() {
      this.drawer = false;
    },
    handleCancel() {
      this.previewVisible = false;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleChangeCover({ file, fileList }) {
      if (file.status === "done") {
        if (fileList[0].response.code === 200) {
          this.editData.coverImage = fileList[0].response.msg;
        }
      } else if (file.status === "removed") {
        this.editData.coverImage = "";
      }
      this.fileList = fileList;
    },
    handleSuccess(file, fileList) {
      console.log(file, fileList);
    },
  },
  components: {
    Pagination,
    Tabs,
    Search,
    Select,
    Loading,
  },
};
</script>

<style lang="less">
.course-section {
  margin-left: 10px;
  .el-input--suffix .el-input__inner {
    width: 100%;
  }
  .el-input {
    width: 100px;
  }
  .select {
    margin-right: 0;
  }
  .on-search {
    height: 30px;
    line-height: 5px;
    margin-left: 20px;
  }
}
.duration {
  display: flex;
  .el-input {
    width: 70px !important;
    &:not(:nth-of-type(1)) {
      margin-left: 5px;
    }
  }
}
.manage-list {
  display: flex;
  justify-content: space-between;
  .update-tabel {
    display: flex;
    align-items: center;
    margin-right: 50px;
    .search-lessons {
      margin-right: 20px;
      display: flex;
      align-items: center;
    }
  }
  .add {
    min-width: none;
    margin-right: 10px;
  }
}

.add-lessons {
  padding-left: 50px;
  .el-input,
  .el-textarea__inner,
  .el-upload-list__item {
    width: 200px;
  }
  .submit {
    position: absolute;
    left: 50%;
    margin-top: 20px;
    transform: translateX(-50%);
    .el-form-item__content {
      margin-left: 0 !important;
    }
  }
  .el-input--suffix .el-input__inner {
    width: 100%;
  }
  .el-input__inner {
    height: 30px;
  }

  .upload-img {
    height: 100px;
  }
  .ant-upload-list-item-actions a {
    display: none;
  }
}

.el-drawer {
  width: 410px !important;
}
</style>
