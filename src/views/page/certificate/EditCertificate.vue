<!--
 * @Author: your name
 * @Date: 2021-07-14 13:31:03
 * @LastEditTime: 2021-07-14 13:31:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/exam/EditCertificate.vue
-->

<template>
  <div class="edit-certificate">
    <div class="certificate-img"><img src="../../../assets/images/certificate.jpeg"></div>
      <div class="edit-certificate-form">
      <el-form
        :model="numberValidateForm"
        ref="numberValidateForm"
        label-width="120px"
        label-position="left"
        class="demo-ruleForm"
      >
        <el-form-item
          label="证书名称"
          prop="courseName"
          :rules="[{ required: true, message: '证书名称不能为空' }]"
        >
          <el-input
            type="courseName"
            v-model.number="numberValidateForm.courseName"
            autocomplete="off"
            placeholder="请输入证书名称"
          ></el-input>
        </el-form-item>
              <el-form-item
          label="证书副标题"
          prop="courseName"
          :rules="[{ required: true, message: '证书副标题不能为空' }]"
        >
          <el-input
            type="courseName"
            v-model.number="numberValidateForm.courseName"
            autocomplete="off"
            placeholder="请输入证书副标题"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="模版选择"
          prop="class"
          :rules="[{ required: true, message: '模版不能为空' }]"
        >
          <el-select v-model="numberValidateForm.class" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
                <el-form-item
          label="证书内容"
          prop="textarea"
          :rules="[{ required: true, message: '简介不能为空' }]"
        >
          <el-input
            type="textarea"
            v-model.number="numberValidateForm.textarea"
            :rows="5"
            autocomplete="off"
            placeholder="请输入证书内容"
          >
          </el-input>
        </el-form-item>
              <el-form-item
          label="办证机构"
          prop="courseName"
          :rules="[{ required: true, message: '办证机构不能为空' }]"
        >
          <el-input
            type="courseName"
            v-model.number="numberValidateForm.courseName"
            autocomplete="off"
            placeholder="请输入办证机构"
          ></el-input>
        </el-form-item>
        <el-form-item class="submit">
          <el-button type="primary" @click="submitForm('numberValidateForm')">取消</el-button>
          <el-button @click="resetForm('numberValidateForm')">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      numberValidateForm: {},
      date: '',
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          console.log('error submit!!');
          return;
        }
        console.log('submit');
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    open() {
      this.$emit('addExam', true);
      console.log('开');
    },
    close() {
      this.$emit('addExam', false);
      console.log('关');
    },
  },
};
</script>

<style lang="less">
.edit-certificate {
  display: flex;
  justify-content: space-between;
  width: 88%;
  margin: 0 auto;
  padding-top: 100px;
  box-sizing: border-box;
  .certificate-img {
    margin-right: 20px;
  }
  .edit-certificate-form {
  padding-top: 17px;
  width: 500px;
  margin: 0 auto;
  background: #fff;
  .el-input,
  .el-textarea__inner {
    width: 200px;
  }
  .el-input__inner {
    height: 30px;
    font-size: 13px;
  }

  .el-form-item__content {
    line-height: 1;
    margin-top: 5px;
  }

.submit {
  margin-top: 20px;
  margin-left: 120px;
  .el-form-item__content {
    margin-left: 0 !important;
  }
}
.el-input--suffix .el-input__inner {
  width: 100%;
}
}
}

</style>
