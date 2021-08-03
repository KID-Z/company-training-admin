<!--
 * @Author: your name
 * @Date: 2021-07-12 16:32:56
 * @LastEditTime: 2021-08-02 13:03:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/training/AddTraining.vue
-->
<template>
  <div>
    <div class="add-training">
      <el-form
        :model="numberValidateForm"
        ref="numberValidateForm"
        label-width="120px"
        label-position="left"
        class="demo-ruleForm"
      >
        <el-form-item
          label="名称"
          prop="courseName"
          :rules="[{ required: true, message: '名称不能为空' }]"
        >
          <el-input
            type="courseName"
            v-model.number="numberValidateForm.courseName"
            autocomplete="off"
            placeholder="请输入名称"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="培训类型"
          prop="class"
          :rules="[{ required: true, message: '培训类型不能为空' }]"
        >
          <el-select v-model="numberValidateForm.class" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="开始时间"
          prop="courseType"
          :rules="[{ required: true, message: '开始时间不能为空' }]"
        >
          <el-select v-model="numberValidateForm.courseType" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="结束时间"
          prop="courseCategory"
          :rules="[{ required: true, message: '结束时间不能为空' }]"
        >
          <el-select v-model="numberValidateForm.courseCategory" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="达标学分"
          prop="courseSection"
          :rules="[{ required: true, message: '达标学分不能为空' }]"
        >
          <el-input
            type="courseSection"
            v-model.number="numberValidateForm.courseSection"
            autocomplete="off"
            placeholder="请输入达标学分"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="封面"
          prop="cover"
          class="upload-img"
          :rules="[{ required: true, message: '封面不能为空' }]"
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
              <div class="ant-upload-text">上传封面</div>
            </div>
          </a-upload>
        </el-form-item>
        <el-form-item
          label="证书"
          prop="cover"
          class="upload-img"
          :rules="[{ required: true, message: '证书不能为空' }]"
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
              <div class="ant-upload-text">上传证书</div>
            </div>
          </a-upload>
        </el-form-item>
        <el-form-item
          label="简介"
          prop="textarea"
          :rules="[{ required: true, message: '简介不能为空' }]"
        >
          <el-input
            type="textarea"
            v-model.number="numberValidateForm.textarea"
            :rows="2"
            autocomplete="off"
            placeholder="请输入简介"
          >
          </el-input>
        </el-form-item>
        <el-form-item
          label="必须课程添加"
          prop="courseName"
          :rules="[{ required: true, message: '必须课程添加不能为空' }]"
        >
          <div class="choose-course">
            <div class="choose-course-imgs">
              <div class="choose-course-img">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="url"
                  :preview-src-list="srcList"
                >
                </el-image>
                <div class="demonstration">123</div>
              </div>
              <div class="choose-course-img">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="url"
                  :preview-src-list="srcList"
                >
                </el-image>
                <div class="demonstration">123</div>
              </div>
              <div class="choose-course-img">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="url"
                  :preview-src-list="srcList"
                >
                </el-image>
                <div>
                  <div class="demonstration">123</div>
                </div>
              </div>
            </div>
            <div class="choose-course-btn">
              <button>选择课程</button>
            </div>
          </div>
        </el-form-item>

        <el-form-item
          label="选修课程添加"
          prop="courseName"
          :rules="[{ required: true, message: '选修课程不能为空' }]"
        >
          <div class="choose-course">
            <div class="choose-course-imgs">
              <div class="choose-course-img">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="url"
                  :preview-src-list="srcList"
                >
                </el-image>
                <div class="demonstration">123</div>
              </div>
              <div class="choose-course-img">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="url"
                  :preview-src-list="srcList"
                >
                </el-image>
                <div>
                  <div class="demonstration">123</div>
                </div>
              </div>
            </div>
            <div class="choose-course-btn">
              <button>选择课程</button>
            </div>
          </div>
        </el-form-item>
        <el-form-item
          label="人员添加"
          prop="courseName"
          :rules="[{ required: true, message: '人员不能为空' }]"
        >
          <div class="choose-course">
            <span>行政部、人事部</span>
            <div class="choose-course-btn">
              <button>选择人员</button>
            </div>
          </div>
        </el-form-item>
        <el-form-item
          label="是否有考试"
          prop="courseName"
          :rules="[{ required: true, message: '是否有考试不能为空' }]"
        >
          <div class="switch">
            <button>否</button>
            <button>是</button>
          </div>
        </el-form-item>
        <template>
          <el-form-item
            label="重考次数"
            prop="class"
            :rules="[{ required: true, message: '重考次数不能为空' }]"
          >
            <el-select v-model="numberValidateForm.class" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="试卷添加">
            <div class="file">
              <div><span>关于消防知识试卷</span><span>删除</span></div>
              <button>选择试卷</button>
            </div>
          </el-form-item>
        </template>
              <el-form-item label="资料">
            <div class="file material">
              <div><span>关于消防知识试卷pdf</span><span>删除</span></div>
              <button>上传</button>
            </div>
              <div class="file">
              <div><span>关于消防知识试卷MP4</span><span>删除</span></div>
            </div>
          </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="submitForm('numberValidateForm')">取消</el-button>
          <el-button @click="resetForm('numberValidateForm')">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
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
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
      ],
      fileList: [],
      numberValidateForm: {},
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
.add-training {
  width: 580px;
  margin: 0 auto;
  background: #fff;

.choose-course {
  width: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .choose-course-imgs {
    display: flex;
    .choose-course-img {
      text-align: center;
      &:not(&:nth-of-type(1)) {
        margin-left: 10px;
      }
    }
  }
  .choose-course-btn {
    button {
      outline: none;
      border: none;
      color: #fff;
      border-radius: 5px;
      padding: 8px 20px;
      background: #469ad0;
    }
  }
}
.switch {
  button {
    width: 40px;
    height: 30px;
    outline: none;
    border: none;
    cursor: pointer;
    &:nth-of-type(1) {
      background-color: #d7d7d7;
    }
    &:nth-of-type(2) {
      background-color: #469ad0;
      color: #fff;
    }
  }
}
.file {
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.material {
    margin-bottom: 20px;
  }
  div:nth-of-type(1) {
    span:nth-of-type(1) {
      color: #3f99f7;
      margin-right: 20px;
    }
    span:nth-of-type(2) {
      color: #ee5144;
    }
  }
  button {
      outline: none;
      border: none;
      color: #fff;
      border-radius: 5px;
      padding: 8px 20px;
      background: #469ad0;
  }
}
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
  .upload-img {
  height: 100px;
}
.ant-upload-list-item-actions a {
  display: none;
}
.btn {
  margin-top: 20px;
  text-align: center;
  .el-form-item__content {
    margin-left: 0 !important;
  }
}

.el-input--suffix .el-input__inner {
  width: 100%;
}
}

</style>
