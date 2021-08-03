<!--
 * @Author: your name
 * @Date: 2021-07-12 11:05:52
 * @LastEditTime: 2021-07-30 16:29:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/test-paper/ExaminationQuestionsCategory.vue
-->

<template>
  <div class="questions-category">
    <div class="operation">
      <Search width="150" placeholder="搜索课程分类名称" @onEnterSearch="onSearch" />
      <a-button type="primary" style="margin-left: 10px; margin-right: 10px" @click="add">
        添加
      </a-button>
    </div>
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="false"
      rowKey="id"
      childrenColumnName="child"
      :expanded-row-keys.sync="expandedRowKeys"
    >
      <div slot="operation" class="operation" slot-scope="text, record">
        <a-button style="margin-right: 10px" type="danger" @click="remove(record.id)"
          >删除</a-button
        >
        <a-button @click="edit(record.id)">编辑</a-button>
      </div>
    </a-table>
    <el-drawer title="新增部门" :visible.sync="drawer" @close="close" append-to-body>
      <div class="add-dept">
        <el-form
          :model="editData"
          ref="editData"
          label-width="100px"
          label-position="left"
          class="demo-ruleForm"
        >
          <el-form-item
            label="试题分类"
            prop="name"
            :rules="[{ required: true, message: '试题分类名称不能为空' }]"
          >
            <el-input
              v-model.number="editData.name"
              autocomplete="off"
              placeholder="请输入试题分类名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="上级类别">
            <el-cascader
              v-model="editData.pid"
              placeholder="分类"
              :options="tree"
              :props="{ checkStrictly: true, value: 'id', label: 'name', children: 'child' }"
            ></el-cascader>
          </el-form-item>
          <el-form-item class="submit">
            <el-button type="primary" @click="submitForm('editData')">确定</el-button>
            <el-button @click="drawer = false">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
/* eslint-disable */

import Search from "@/components/Search/index.vue";
import Loading from "@/components/Loading/index.vue";
import problem from "@/api/problem";
import tree from "@/api/tree";

const columns = [
  {
    title: "试题分类",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
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
    this.getQuestionsClassificationList("", "tree");
  },
  data() {
    return {
      data: [],
      columns,
      expandedRowKeys: [],
      drawer: false,
      editData: {},
      tree: [],
      searchText: "",
      iconList: [],
      urlList: [],
      type: "",
      originalData: [],
    };
  },
  methods: {
    close() {
      console.log('1111');
      this.editData = {
        name: "",
        pid: null,
      };
      console.log(this.editData);
    },
    add() {
      this.drawer = true;
      this.type = "add";
      console.log(this.editData);
    },
    async edit(id) {
      this.drawer = true;
      this.type = "edit";
      try {
        this.editData = await problem.questionsClassificationDetails(id);
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
      problem.questionsClassificationUpdate(data).then((res) => {
        if (res) {
          this.$message({
            type: "success",
            message: "修改成功",
          });
          this.getQuestionsClassificationList("");
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
            problem.classificationRemove([id]).then(
              () => {
                this.$message({
                  type: "success",
                  message: "删除成功",
                });
                this.getQuestionsClassificationList(this.searchText);
                done();
              },
              (err) => {
                this.$message({
                  type: "error",
                  message: err.message,
                });
                done();
              }
            );
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
      this.getQuestionsClassificationList(text);
    },
    getQuestionsClassificationList(selString, type = "") {
      this.$store.dispatch("layout/loadingState", true);
      tree.questionsClassification(selString).then((res) => {
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
            const problem = editData[i];
            if (original[i][1] !== problem[1]) {
              if (problem[0] === "pid") {
                data[problem[0]] = problem[1][problem[1].length - 1];
              } else {
                data[problem[0]] = problem[1];
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
          this.editData.pid = this.editData.pid
            ? this.editData.pid[this.editData.pid.length - 1] || ""
            : "";
          problem.questionsClassificationAdd(this.editData).then(
            () => {
              this.$message({
                type: "success",
                message: "新增成功",
              });
              this.getQuestionsClassificationList("");
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
  },
  components: {
    Search,
    Loading,
  },
};
</script>

<style lang="less">
.questions-category {
  .operation {
    display: flex;
    padding-left: 20px;
    margin-bottom: 20px;
  }
}
.add-dept {
  padding-left: 50px;
  .submit {
    position: absolute;
    left: 50%;
    bottom: 0;
    border-top: 1px solid #e4e4e4;
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    transform: translateX(-50%);
    .el-form-item__content {
      margin-left: 0 !important;
    }
  }
  .el-input {
    width: 200px;
  }
  .el-input--suffix .el-input__inner {
    width: 100%;
  }
  .el-input__inner {
    height: 30px;
  }
}

.el-drawer {
  width: 410px !important;
}
</style>
