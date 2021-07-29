<template>
  <div class="course-list">
    <h3 class="course-list-title">课程管理列表</h3>
    <div class="operation">
      <div class="search-course">
        <Tabs label2="待发布" label3="已发布" @changeOptions="tabsState = $event" />
        <Cascader
          placeholder="分类"
          @handleChange="classifyValue = $event[$event.length - 1]"
          children="child"
          :options="classify"
        />
        <Select
          :options="courseTypeList"
          placeholder="课程类型"
          @change="courseTypeValue = $event"
        />
        <Search width="120" placeholder="搜索课程名称" @onSearch="searchText = $event" />
        <el-button type="primary" class="on-search" plain @click="searchCourse">搜索</el-button>
      </div>
      <div class="add">
        <el-button type="primary" plain @click="addCourse">新增</el-button>
      </div>
    </div>
    <div class="table-content">
      <el-table :data="courseList" style="width: 100%" height="calc(100vh - 240px)" stripe>
        <el-table-column label="ID" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="课程名称" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="分类" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.clName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="课程类型" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.courseType === 1 ? "公开课" : "培训课" }}</span>
          </template>
        </el-table-column>
        <el-table-column label="课程种类" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.courseKind === 1 ? "线上课程" : "线下课程" }}</span>
          </template>
        </el-table-column>
        <el-table-column label="地址" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.courseAddress || "无" }}</span>
          </template>
        </el-table-column>
        <el-table-column label="课节" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.classDay }}</span>
          </template>
        </el-table-column>
        <el-table-column label="课程详情" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.courseIntroduction || "无" }}</span>
          </template>
        </el-table-column>
        <el-table-column label="播放次数" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.views }}</span>
          </template>
        </el-table-column>
        <el-table-column label="学习人数" width="165">
          <template slot-scope="scope">
            <span>{{ scope.row.stuCount }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态" width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.state === 1 ? "未发布" : "已发布" }}</span>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.createTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="300" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" @click="updateState(scope.$index, scope.row)">{{
              scope.row.state === 1 ? "发布" : "撤销"
            }}</el-button>
            <el-button size="mini" @click="edit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="removeCourse(scope.$index, scope.row)"
              >删除</el-button
            >
            <el-button size="mini" @click="viewDetails(scope.row)">课节管理</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Loading />
    <Pagination />
    <el-drawer title="添加课程" :visible.sync="drawer" append-to-body>
      <div class="add-course">
        <el-form
          :model="editCourseData"
          ref="editCourseData"
          label-width="100px"
          label-position="left"
          class="demo-ruleForm"
        >
          <el-form-item
            label="课程名称"
            prop="name"
            :rules="[{ required: true, message: '课程名称不能为空' }]"
          >
            <el-input
              v-model.number="editCourseData.name"
              autocomplete="off"
              placeholder="请输入部门名称"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="分类"
            prop="classificationId"
            :rules="[{ required: true, message: '分类不能为空' }]"
          >
            <el-cascader
              v-model="editCourseData.classificationId"
              placeholder="分类"
              :options="classify"
              :props="{ checkStrictly: true, value: 'id', label: 'name', children: 'child' }"
            ></el-cascader>
          </el-form-item>
          <el-form-item
            label="课程类型"
            prop="courseType"
            :rules="[{ required: true, message: '课程类型不能为空' }]"
          >
            <el-select v-model="editCourseData.courseType" placeholder="请选择">
              <el-option
                v-for="item in courseTypeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="课程种类"
            prop="courseKind"
            :rules="[{ required: true, message: '课程种类不能为空' }]"
          >
            <el-select v-model="editCourseData.courseKind" placeholder="请选择">
              <el-option
                v-for="item in playTypeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="课节"
            prop="classDay"
            :rules="[{ required: true, message: '课节名称不能为空' }]"
          >
            <el-input
              v-model.number="editCourseData.classDay"
              autocomplete="off"
              placeholder="请输入部门名称"
            ></el-input>
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
              @change="handleChangeCourseImage"
            >
              <div v-if="fileList.length < 1">
                <a-icon type="plus" />
                <div class="ant-upload-text">上传封面</div>
              </div>
            </a-upload>
          </el-form-item>
          <el-form-item label="地址" prop="courseAddress">
            <el-input
              v-model.number="editCourseData.courseAddress"
              autocomplete="off"
              placeholder="请输入地址"
            ></el-input>
          </el-form-item>
          <el-form-item label="课程详情" prop="courseIntroduction">
            <el-input
              type="textarea"
              v-model.number="editCourseData.courseIntroduction"
              :rows="2"
              autocomplete="off"
              placeholder="请输入课程详情"
            >
            </el-input>
          </el-form-item>
          <el-form-item class="submit">
            <el-button type="primary" @click="submitForm('editCourseData')">确定</el-button>
            <el-button @click="resetForm('editCourseData')">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
/* eslint-disable */

import Pagination from "@/components/Pagination/index.vue";
import Tabs from "@/components/Tabs/index.vue";
import Cascader from "@/components/Cascader/index.vue";
import Select from "@/components/Select/index.vue";
import Search from "@/components/Search/index.vue";
import Loading from "@/components/Loading/index.vue";
import course from "@/api/course";
import tree from "@/api/tree";
function getRandomStr() {
  return Math.random().toString(16).substr(2, 4);
}
export default {
  created() {
    this.getClassifyTree();
    this.getCourseList({
      current: "1",
      name: "",
      clName: "",
      courseType: 0,
    });
  },
  data() {
    return {
      classify: [],
      classifyValue: "",
      courseList: [],
      value: "",
      drawer: false,
      total: 0,
      type: "add",
      courseTypeValue: "",
      playTypeValue: "",
      searchText: "",
      courseTypeList: [
        { label: "公开课", value: 1 },
        { label: "培训课", value: 2 },
      ],
      playTypeList: [
        { label: "线上课程", value: 1 },
        { label: "线下课程", value: 2 },
      ],
      tabsState: "",
      editCourseData: {
        classDay: "",
        classificationId: "",
        courseAddress: "",
        courseImage: "",
        courseIntroduction: "",
        courseKind: "",
        courseType: "",
        createTime: "",
        id: "",
        isDelete: "",
        name: "",
        state: "",
        type: "",
        updateTime: "",
      },
      fileList: [],
    };
  },
  methods: {
    addCourse() {
      this.drawer = true;
      this.type = "add";
      const keys = Object.keys(this.editCourseData);
      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        this.editCourseData[key] = "";
      }
      this.fileList = [];
      this.$delete(this.editCourseData, "id");
      this.$delete(this.editCourseData, "createTime");
      this.$delete(this.editCourseData, "updateTime");
      this.$set(this.editCourseData, "isDelete", 1);
      this.$set(this.editCourseData, "state", 1);
      this.$set(this.editCourseData, "type", 2);
    },
    async edit(index, row) {
      this.drawer = true;
      this.type = "edit";
      try {
        this.editCourseData = await course.details({ id: row.id });
        if (this.editCourseData.courseImage) {
          this.fileList = [
            {
              uid: getRandomStr(),
              name: `${getRandomStr()}.png`,
              status: "deon",
              url: this.editCourseData.courseImage,
            },
          ];
        }
        this.originalData = JSON.parse(JSON.stringify(this.editCourseData));
      } catch (error) {
        this.$message({
          type: "error",
          message: error.message,
        });
      }
    },
    removeCourse(index, row) {
      const h = this.$createElement;
      this.$msgbox({
        title: "提示",
        message: h("p", null, [h("span", null, `确定要删除课程名称 ${row.name} 的课程吗?`)]),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            course.remove([row.id]).then(() => {
              this.$message({
                type: "success",
                message: "删除成功",
              });
              this.getCourseList({
                current: "1",
                name: this.searchText,
                clName: this.classifyValue,
                courseType: this.courseTypeValue,
                state: this.tabsState,
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
    updateState(index, row) {
      const state = row.state === 1 ? 2 : 1;
      this.updateCourseInfo({ id: row.id, state });
    },
    updateCourseInfo(data) {
      this.$store.dispatch("layout/loadingState", true);
      course.update(data).then((res) => {
        if (res) {
          this.$message({
            type: "success",
            message: "修改成功",
          });
          this.getCourseList({
            current: "1",
            name: this.searchText,
            clName: this.classifyValue,
            courseType: this.courseTypeValue,
            state: this.tabsState,
          });
        } else {
          this.$message({
            type: "error",
            message: "修改失败",
          });
        }
      });
    },
    searchCourse() {
      const data = {
        current: 1,
        name: this.searchText,
        clName: this.classifyValue,
        courseType: this.courseTypeValue,
        state: this.tabsState,
      };
      this.getCourseList(data);
    },
    getCourseList(data) {
      this.$store.dispatch("layout/loadingState", true);
      course.list(data).then((res) => {
        this.courseList = res.records;
        this.total = res.total;
        this.$store.dispatch("layout/loadingState", false);
      });
    },
    getClassifyTree() {
      tree.course().then((data) => {
        this.classify = data;
      });
    },
    viewDetails(row) {
      this.$router.push({ name: "CourseSection", params: { id: row.id } });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          console.log("error submit!!");
          return;
        }
        if (this.type === "edit") {
          const original = Object.entries(this.originalData);
          const courseData = Object.entries(this.editCourseData);
          const data = {};
          for (let i = 0; i < original.length; i += 1) {
            const course = courseData[i];
            if (original[i][1] !== course[1]) {
               if (course[0] === "classificationId") {
                data[course[0]]  = course[1][course[1].length - 1];
              } else {
                data[course[0]] = course[1];
              }
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
          this.updateCourseInfo(data);
          this.drawer = false;
        } else {
          course.add(this.editCourseData).then(
            () => {
              this.$message({
                type: "success",
                message: "新增成功",
              });
              this.getCourseList({
                current: "1",
                name: this.searchText,
                clName: this.classifyValue,
                courseType: this.courseTypeValue,
                state: this.tabsState,
              });
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
    handleChangeCourseImage({ file, fileList }) {
      if (file.status === "done") {
        if (fileList[0].response.code === 200) {
          this.editCourseData.courseImage = fileList[0].response.msg;
        }
      } else if (file.status === "removed") {
        this.editCourseData.courseImage = "";
      }
      this.fileList = fileList;
    },
  },
  components: {
    Pagination,
    Tabs,
    Cascader,
    Select,
    Search,
    Loading,
  },
};
</script>

<style lang="less">
.course-list {
  margin-left: 10px;
  .el-input {
    width: 100px;
  }
  .el-input--suffix .el-input__inner {
    width: 100%;
  }
  .operation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .search-course {
      margin-right: 120px;
      display: flex;
      align-items: center;
    }
    .add {
      margin-right: 10px;
      margin-bottom: 10px;
    }
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

.add-course {
  padding-left: 50px;
  .el-input,
  .el-textarea__inner {
    width: 200px;
  }
  .upload-img {
    height: 100px;
  }
  .ant-upload-list-item-actions a {
    display: none;
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
}
.el-drawer {
  width: 410px !important;
}
</style>
