<template>
<el-drawer title="添加考试任务" :visible="drawer" append-to-body>
    <div class="add-exam">
      <el-form
        :model="numberValidateForm"
        ref="numberValidateForm"
        label-width="120px"
        label-position="left"
        class="demo-ruleForm"
      >
        <el-form-item
          label="考试任务名称"
          prop="courseName"
          :rules="[{ required: true, message: '考试任务名称不能为空' }]"
        >
          <el-input
            type="courseName"
            v-model.number="numberValidateForm.courseName"
            autocomplete="off"
            placeholder="请输入考试任务名称"
          ></el-input>
        </el-form-item>
                <el-form-item
          label="开始时间"
          prop="courseName"
          :rules="[{ required: true, message: '开始时间不能为空' }]"
        >
           <div class="date">
    <el-date-picker
      v-model="date"
      type="datetime"
      placeholder="选择考试开始时间">
    </el-date-picker>
  </div>
        </el-form-item>
         <el-form-item
          label="结束时间"
          prop="courseName"
          :rules="[{ required: true, message: '结束时间不能为空' }]"
        >
           <div class="date">
    <el-date-picker
      v-model="date"
      type="datetime"
      placeholder="选择考试结束时间">
    </el-date-picker>
  </div>
        </el-form-item>
         <el-form-item
          label="答案公布时间"
          prop="courseName"
          :rules="[{ required: true, message: '答案公布时间不能为空' }]"
        >
           <div class="date">
    <el-date-picker
      v-model="date"
      type="datetime"
      placeholder="选择答案公布时间">
    </el-date-picker>
  </div>
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
                      <el-form-item label="试卷添加">
            <div class="file material">
              <div><span>关于消防知识试卷</span><span>删除</span></div>
              <button>选择试卷</button>
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
        <el-form-item class="submit">
          <el-button type="primary" @click="submitForm('numberValidateForm')">取消</el-button>
          <el-button @click="resetForm('numberValidateForm')">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
</el-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false,
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
.add-exam {
  width: 580px;
  margin: 0 auto;
  background: #fff;
  .date {
    .el-icon-time {
      line-height: 32px;
    }
  }
.choose-course {
  width: 300px;
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

</style>
