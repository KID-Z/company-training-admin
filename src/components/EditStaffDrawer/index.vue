<!--
 * @Author: your name
 * @Date: 2021-07-07 14:57:59
 * @LastEditTime: 2021-08-02 13:36:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/components/Drawer/index.vue
-->

<template>
  <div>
    <el-drawer
      :visible="drawer"
      custom-class="add-staff-drawer"
      title="编辑员工"
      direction="rtl"
      @open="open"
      @close="close"
      append-to-body
    >
      <div class="add-staff">
        <el-form
          :model="staffData"
          ref="staffData"
          label-width="100px"
          label-position="left"
          class="demo-ruleForm"
        >
          <el-form-item
            label="员工编号"
            prop="personNumber"
            :rules="[{ required: true, message: '员工编号不能为空' }]"
          >
            <el-input
              v-model.number="staffData.personNumber"
              autocomplete="off"
              placeholder="请输入员工编号"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="姓名"
            prop="name"
            :rules="[{ required: true, message: '姓名不能为空' }]"
          >
            <el-input
              v-model.number="staffData.name"
              autocomplete="off"
              placeholder="请输入姓名"
            ></el-input>
          </el-form-item>

          <el-form-item label="照片" prop="photoUrl" class="upload-img">
            <a-upload
              action="/api/training/upload/upload"
              list-type="picture-card"
              name="file"
              :headers="{
                Authorization: `Bearer ${$store.state.user.token}`,
              }"
              :file-list="fileList"
              @change="handleChange"
            >
              <div v-if="fileList.length < 1">
                <a-icon type="plus" />
                <div class="ant-upload-text">上传头像</div>
              </div>
            </a-upload>
          </el-form-item>

          <el-form-item
            label="手机"
            prop="phone"
            :rules="[{ required: true, message: '手机号不能为空' }]"
          >
            <el-input
              v-model.number="staffData.phone"
              autocomplete="off"
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>

          <el-form-item
            label="邮箱"
            prop="email"
            :rules="[{ required: true, message: '邮箱不能为空' }]"
          >
            <el-input
              v-model.number="staffData.email"
              autocomplete="off"
              placeholder="请输入邮箱"
            ></el-input>
          </el-form-item>

          <el-form-item
            label="部门"
            prop="depName"
            :rules="[{ required: true, message: '部门不能为空' }]"
          >
            <el-cascader
              v-model="staffData.departmentId"
              placeholder="请选择部门"
              :options="$store.state.tree.dept"
              :props="{ checkStrictly: true, value: 'id', label: 'name' }"
              clearable
            ></el-cascader>
          </el-form-item>

          <el-form-item
            label="岗位"
            prop="poName"
            :rules="[{ required: true, message: '岗位不能为空' }]"
          >
            <el-cascader
              v-model="staffData.positionId"
              placeholder="请选择岗位"
              :options="$store.state.tree.po"
              :props="{ checkStrictly: true, value: 'id', label: 'name' }"
              clearable
            ></el-cascader>
          </el-form-item>

          <el-form-item
            label="账号"
            prop="accountNumber"
            :rules="[{ required: true, message: '账号不能为空' }]"
          >
            <el-input
              type="accountNumber"
              v-model.number="staffData.accountNumber"
              autocomplete="off"
              placeholder="请输入登录账号"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="密码"
            prop="password"
            :rules="[{ required: true, message: '密码不能为空' }]"
          >
            <el-input
              v-model.number="staffData.password"
              autocomplete="off"
              placeholder="请输入登录密码"
            ></el-input>
          </el-form-item>
          <el-form-item class="submit">
            <el-button type="primary" @click="submitForm('staffData')">提交</el-button>
            <el-button @click="resetForm()">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
/* eslint-disable */

import { mapState } from "vuex";
import staff from "@/api/staff";

function getRandomStr() {
  return Math.random().toString(16).substr(2, 4);
}

export default {
  props: {
    editStaffId: {
      type: [String, Number],
    },
    update: {
      type: [String, Number],
    },
  },
  watch: {
    update() {
      staff.edit(this.editStaffId).then((data) => {
        this.staffData = data;
        this.staffData.departmentId = `${this.staffData.departmentId}`;
        this.staffData.positionId = `${this.staffData.positionId}`;
        if (this.staffData.photoUrl) {
          this.fileList = [
            {
              uid: getRandomStr(),
              name: `${getRandomStr()}.png`,
              status: "deon",
              url: this.staffData.photoUrl,
            },
          ];
        }
        this.original = JSON.parse(JSON.stringify(data));
      });
    },
  },
  data() {
    return {
      staffData: {},
      original: {},
      fileList: [],
    };
  },
  computed: {
    ...mapState("staff", ["drawer"]),
  },
  methods: {
    open() {
      this.$store.dispatch("staff/changeDrawer", true);
    },
    close() {
      this.$store.dispatch("staff/changeDrawer", false);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          console.log("error submit!!");
          return;
        }
        const original = Object.entries(this.original);
        const staffData = Object.entries(this.staffData);
        const data = {};
        for (let i = 0; i < original.length; i += 1) {
          const staff = staffData[i];
          if (original[i][1] !== staff[1]) {
            if (Array.isArray(staff[1])) {
              if (staff[0] === "departmentId") {
                data.departmentId = staff[1][staff[1].length - 1];
              } else if (staff[0] === "positionId") {
                data.positionId = staff[1][staff[1].length - 1];
              }
            } else {
              data[staff[0]] = staff[1];
            }
          }
        }
        if (JSON.stringify(data) === "{}") {
          console.log("没有任何修改");
          return;
        }
        data.id = this.original.id;
        this.$emit("updateStaffData", data);
      });
    },
    resetForm() {
      this.$store.dispatch("staff/changeDrawer", false);
    },
    handleCancel() {
      this.previewVisible = false;
    },
    handleChange({ file, fileList }) {
      if (file.status === "done") {
        if (fileList[0].response.code === 200) {
          this.staffData.photoUrl = fileList[0].response.msg;
        }
      } else if (file.status === "removed") {
        this.staffData.photoUrl = "";
      }
      this.fileList = fileList;
    },
  },
};
</script>

<style lang="less" scoped>
.add-staff {
  padding-left: 50px;
  margin-top: 30px;
  box-sizing: border-box;
  .upload-img {
    height: 100px;
  }
  .submit {
    margin-top: 60px;
    .el-form-item__content {
      margin-left: 0 !important;
    }
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
  .ant-upload-list-item-actions a {
    display: none;
  }
  .el-input {
    width: 200px;
  }
}

.el-input--suffix .el-input__inner {
  width: 100%;
}
</style>
