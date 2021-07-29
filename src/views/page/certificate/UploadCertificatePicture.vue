<!--
 * @Author: your name
 * @Date: 2021-07-14 13:54:51
 * @LastEditTime: 2021-07-14 13:57:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/certificate/UploadCertificateImg.vue
-->

<template>
  <div class="upload-certificate-picture">
        <el-form
          :model="numberValidateForm"
          ref="numberValidateForm"
          label-width="100px"
          label-position="left"
          class="demo-ruleForm"
        >
                  <el-form-item
            label="图片名称"
            prop="courseCategoryName"
            :rules="[{ required: true, message: '图片名称不能为空' }]"
          >
            <el-input
              type="courseCategoryName"
              v-model.number="numberValidateForm.courseCategoryName"
              autocomplete="off"
              placeholder="请输入图片名称"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="证书图片"
            prop="cover"
            class="upload-img"
            :rules="[{ required: true, message: '证书图片不能为空' }]"
          >
            <a-upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              list-type="picture-card"
              :file-list="fileList"
              @preview="handlePreview"
              @change="handleChange"
            >
              <div v-if="fileList.length < 1">
                <a-icon type="plus" />
                <div class="ant-upload-text">选择证书上传</div>
              </div>
            </a-upload>
          </el-form-item>
          <el-form-item class="submit">
            <el-button type="primary" @click="submitForm('numberValidateForm')">确定</el-button>
            <el-button @click="resetForm('numberValidateForm')">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
</template>
<script>

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default {
  data() {
    return {
      drawer: false,
      numberValidateForm: {
        courseCategoryName: '',
        superiorCategory: '',
        cover: '',
      },
      fileList: [],
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
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(myFile) {
      const file = myFile;
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ file, fileList }) {
      console.log(file, fileList);
      this.fileList = fileList;
    },

  },
};
</script>

<style lang="less">

.upload-certificate-picture {
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
