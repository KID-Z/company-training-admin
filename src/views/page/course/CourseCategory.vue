<!--
 * @Author: your name
 * @Date: 2021-07-09 14:08:50
 * @LastEditTime: 2021-07-29 17:50:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/course-manage/courseCategory.vue
-->
<template>
  <div class="course-category">
    <div class="operation">
      <Search width="150" placeholder="搜索课程分类名称" @onEnterSearch="onSearch" />
      <a-button
        type="primary"
        style="margin-left: 10px; margin-right: 10px; height: 30px"
        @click="add"
      >
        新增
      </a-button>
    </div>
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="false"
      rowKey="id"
      childrenColumnName="child"
    >
      <div slot="iconUrl" class="cover" slot-scope="text, record">
        <div class="demo-image__preview" v-if="record.iconUrl">
          <el-image
            style="width: 50px; height: 50px"
            :src="record.iconUrl"
            :preview-src-list="[record.iconUrl]"
          >
          </el-image>
        </div>
        <template v-else>无</template>
      </div>
      <div slot="url" class="cover" slot-scope="text, record">
        <div class="demo-image__preview" v-if="record.url">
          <el-image
            style="width: 50px; height: 50px"
            :src="record.url"
            :preview-src-list="[record.url]"
          >
          </el-image>
        </div>
        <template v-else>无</template>
      </div>
      <div slot="operation" slot-scope="text, record">
        <a-button style="margin-right: 10px" @click="edit(record.id)">编 辑</a-button>
        <a-button type="danger" @click="remove(record.id)">删 除</a-button>
      </div>
    </a-table>
    <el-drawer title="新增时政要闻" :visible.sync="drawer" append-to-body>
      <div class="add-course-category">
        <el-form
          :model="editData"
          ref="editData"
          label-width="100px"
          label-position="left"
          class="demo-ruleForm"
        >
          <el-form-item
            label="课程分类"
            prop="name"
            :rules="[{ required: true, message: '课程分类名称不能为空' }]"
          >
            <el-input
              type="courseCategoryName"
              v-model.number="editData.name"
              autocomplete="off"
              placeholder="请输入课程分类名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="上级分类">
            <el-cascader
              v-model="editData.pid"
              placeholder="分类"
              :options="tree"
              :props="{ checkStrictly: true, value: 'id', label: 'name', children: 'child' }"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="icon图片" prop="iconUrl" class="upload-img">
            <a-upload
              action="/api/training/upload/upload"
              list-type="picture-card"
              name="file"
              :headers="{
                Authorization: `Bearer ${$store.state.user.token}`,
              }"
              :file-list="iconList"
              @change="handleChangeIcon"
            >
              <div v-if="iconList.length < 1">
                <a-icon type="plus" />
                <div class="ant-upload-text">上传icon图片</div>
              </div>
            </a-upload>
          </el-form-item>
          <el-form-item label="课程封面" prop="url" class="upload-img">
            <a-upload
              action="/api/training/upload/upload"
              list-type="picture-card"
              name="file"
              :headers="{
                Authorization: `Bearer ${$store.state.user.token}`,
              }"
              :file-list="urlList"
              @change="handleChangeCover"
            >
              <div v-if="urlList.length < 1">
                <a-icon type="plus" />
                <div class="ant-upload-text">上传封面</div>
              </div>
            </a-upload>
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

import Search from "@/components/Search/index.vue";
import Loading from "@/components/Loading/index.vue";
import course from "@/api/course";
import tree from "@/api/tree";

function getRandomStr() {
  return Math.random().toString(16).substr(2, 4);
}
const columns = [
  {
    title: "课程名称分类",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "icon图标",
    dataIndex: "iconUrl",
    key: "iconUrl",
    scopedSlots: { customRender: "iconUrl" },
  },
  {
    title: "封面",
    dataIndex: "url",
    key: "url",
    scopedSlots: { customRender: "url" },
  },
  {
    title: "上级分类",
    dataIndex: "pid",
    key: "pid",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    key: "createTime",
  },
  {
    title: "操作",
    dataIndex: "operation",
    key: "operation",
    width: 200,
    scopedSlots: { customRender: "operation" },
  },
];

export default {
  created() {
    this.getCourseClassificationList("", "tree");
  },
  data() {
    return {
      data: [],
      columns,
      expandedRowKeys: [],
      drawer: false,
      editData: {
        child: null,
        createTime: null,
        current: null,
        iconUrl: null,
        id: 1,
        isDelete: 1,
        name: "",
        pid: 0,
        size: null,
        updateTime: "",
        url: "",
      },
      tree: [],
      searchText: "",
      iconList: [],
      urlList: [],
      type: "",
      originalData: [],
    };
  },
  methods: {
    add() {
      this.drawer = true;
      this.type = "add";
      const keys = Object.keys(this.editData);
      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        this.editData[key] = "";
      }
      this.iconList = [];
      this.urlList = [];
      this.$delete(this.editData, "updateTime");
      this.$delete(this.editData, "size");
      this.$delete(this.editData, "id");
      this.$delete(this.editData, "createTime");
      this.$delete(this.editData, "createTime");
      this.$delete(this.editData, "current");
      this.$delete(this.editData, "child");
      this.$set(this.editData, "isDelete", 1);
    },
    async edit(id) {
      this.drawer = true;
      this.type = "edit";
      try {
        this.editData = await course.courseClassificationDetails(id);
        if (this.editData.iconUrl) {
          this.iconList = [
            {
              uid: getRandomStr(),
              name: `${getRandomStr()}.png`,
              status: "deon",
              url: this.editData.iconUrl,
            },
          ];
        } else {
          this.iconList = [];
        }
        if (this.editData.url) {
          this.urlList = [
            {
              uid: getRandomStr(),
              name: `${getRandomStr()}.png`,
              status: "deon",
              url: this.editData.url,
            },
          ];
        } else {
          this.urlList = [];
        }
        this.originalData = JSON.parse(JSON.stringify(this.editData));
      } catch (error) {
        this.$message({
          type: "error",
          message: error.message,
        });
      }
    },
    update(data) {
      this.$store.dispatch("layout/loadingState", true);
      course.courseClassificationUpdate(data).then((res) => {
        if (res) {
          this.$message({
            type: "success",
            message: "修改成功",
          });
          this.getCourseClassificationList("");
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
        message: h("p", null, [h("span", null, `确定要删除ID ${id} 的分类吗?`)]),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            course.courseClassificationRemove([id]).then(() => {
              this.$message({
                type: "success",
                message: "删除成功",
              });
              this.getCourseClassificationList(this.searchText);
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
    onSearch(text) {
      this.searchText = text;
      this.getCourseClassificationList(text);
    },
    getCourseClassificationList(name, type = "") {
      this.$store.dispatch("layout/loadingState", true);
      tree.courseClassification({ name }).then((res) => {
        this.data = res;
        if (type === "tree") {
          this.tree = res;
        }
        this.$store.dispatch("layout/loadingState", false);
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          console.log("error submit!!");
          return;
        }
        if (this.type === "edit") {
          const original = Object.entries(this.originalData);
          const editData = Object.entries(this.editData);
          const data = {};
          for (let i = 0; i < original.length; i += 1) {
            const course = editData[i];
            if (original[i][1] !== course[1]) {
              if (course[0] === "pid") {
                data[course[0]] = course[1][course[1].length - 1];
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
          this.update(data);
          this.drawer = false;
        } else {
          course.courseClassificationAdd(this.editData).then(
            () => {
              this.$message({
                type: "success",
                message: "新增成功",
              });
              this.getCourseClassificationList("");
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
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleCancel() {
      this.previewVisible = false;
    },
    handleChangeIcon({ file, fileList }) {
      if (file.status === "done") {
        if (fileList[0].response.code === 200) {
          this.editData.iconUrl = fileList[0].response.msg;
        }
      } else if (file.status === "removed") {
        this.editData.iconUrl = "";
      }
      this.iconList = fileList;
    },
    handleChangeCover({ file, fileList }) {
      if (file.status === "done") {
        if (fileList[0].response.code === 200) {
          this.editData.url = fileList[0].response.msg;
        }
      } else if (file.status === "removed") {
        this.editData.url = "";
      }
      this.urlList = fileList;
    },
  },
  components: {
    Search,
    Loading,
  },
};
</script>

<style lang="less">
.course-category {
  .operation {
    display: flex;
    padding-left: 20px;
    margin-bottom: 20px;
  }
}

.add-course-category {
  padding-left: 50px;
  .el-input__inner {
    height: 30px;
  }
  .upload-img {
    height: 100px;
  }
  .ant-upload-list-item-actions a {
    display: none;
  }
  .el-input {
    width: 200px;
  }
  .el-input--suffix .el-input__inner {
    width: 100%;
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
}

.el-drawer {
  width: 410px !important;
}
</style>
