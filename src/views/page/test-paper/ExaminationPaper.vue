<!--
 * @Author: your name
 * @Date: 2021-07-12 09:55:25
 * @LastEditTime: 2021-07-12 09:55:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/test-paper/a.vue
-->

<template>
  <div class="test-paper">
    <div class="header">
      <div class="item"><span>试卷名称</span><span>xxx试卷</span></div>
      <div class="item"><span>考试时间</span><span>120分钟</span></div>
      <div class="item"><span>试卷总分</span><span>100分</span></div>
      <div class="item"><span>当前分数</span><span>10分</span></div>
    </div>
    <div class="operation">
      <div>
        <button style="background: #4899d0; padding: 8px 10px">题型添加</button>
        <button style="background: #999999; margin-left: 17px; padding: 8px 10px">清空试题</button>
      </div>
      <button style="background: #f39d38; padding: 8px 30px">试卷保存</button>
    </div>
    <div class="title">
      <div>
        <span>一. 单选题</span>
        <span>每题1分 共10分</span>
        <span>(5/10)</span>
      </div>
      <div>
        <button>添加试题</button>
        <button>修改题型</button>
        <button>删除题型</button>
      </div>
    </div>
    <div class="title">
      <div>
        <span>二. 多选题</span>
        <span>每题1分 共10分</span>
        <span>(10/10)</span>
      </div>
      <div>
        <button>添加试题</button>
        <button>修改题型</button>
        <button>删除题型</button>
      </div>
    </div>
    <div class="examination-questions">
      <div>1. 火警必须拨打110吗?</div>
      <div class="options">
        <span>A 不用</span>
        <span>B 需要</span>
        <span>A 看情况</span>
        <span>A 我也不知道</span>
      </div>
      <div class="line"></div>
      <div class="correct"><span>正确答案: </span><span>A、B、C、D</span></div>
      <div><span>题型解析: </span><span>题型的内容解析, 结束为什么选择这个</span></div>
      <div class="line-bold"></div>
    </div>
    <div class="examination-questions">
      <div>2. 火警必须拨打110吗?</div>
      <div class="options">
        <span>A 不用</span>
        <span>B 需要</span>
        <span>A 看情况</span>
        <span>A 我也不知道</span>
      </div>
      <div class="line"></div>
      <div class="correct"><span>正确答案: </span><span>A、B、C、D</span></div>
      <div><span>题型解析: </span><span>题型的内容解析, 结束为什么选择这个</span></div>
    </div>
    <div class="title">
      <div>
        <span>三. 主关题</span>
        <span>每题1分 共10分</span>
        <span>(10/10)</span>
      </div>
      <div>
        <button>添加试题</button>
        <button>修改题型</button>
        <button>删除题型</button>
      </div>
    </div>

    <!-- 下面这个有时间抽成写成组件 -->
    <div class="popover">
      <div class="popover-title">题型添加</div>
      <div class="popover-content">
        <el-form
          :model="numberValidateForm"
          ref="numberValidateForm"
          label-width="100px"
          label-position="left"
          class="demo-ruleForm"
        >
          <el-form-item
            label="题型选择"
            prop="superiorCategory"
            :rules="[{ required: true, message: '题型选择不能为空' }]"
          >
            <el-select v-model="numberValidateForm.superiorCategory" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="每题分数"
            prop="depName"
            :rules="[{ required: true, message: '每题分数不能为空' }]"
          >
            <el-input
              type="depName"
              v-model.number="numberValidateForm.depName"
              autocomplete="off"
              placeholder="请输入每题分数"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="题目数"
            prop="depName"
            :rules="[{ required: true, message: '题目数不能为空' }]"
          >
            <el-input
              type="depName"
              v-model.number="numberValidateForm.depName"
              autocomplete="off"
              placeholder="请输入题目数"
            ></el-input>
          </el-form-item>
          <el-form-item class="btn">
            <el-button type="primary" @click="submitForm('numberValidateForm')">确定</el-button>
            <el-button @click="resetForm('numberValidateForm')">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberValidateForm: {
        courseCategoryName: '',
        superiorCategory: '',
        cover: '',
      },
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
  },
};
</script>

<style lang="less">
.test-paper {
  width: 92%;
  margin: 0 auto;
  .header {
    background: #d7d7d7;
    border-radius: 2px;
    padding: 20px;
    .item {
      span:nth-of-type(1) {
        font-weight: bold;
        margin-right: 30px;
      }
      &:not(&:nth-of-type(1)) {
        margin-top: 10px;
      }
    }
  }
  .operation {
    margin-top: 10px;
    background: #d7d7d7;
    border-radius: 2px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    button {
      border: none;
      color: #fff;
      border-radius: 5px;
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    background: #d7d7d7;
    border-radius: 2px;
    padding: 10px 20px;
    align-items: center;
    div:nth-of-type(1) {
      span:nth-of-type(1) {
        font-weight: bold;
      }
      span:nth-of-type(2) {
        margin-left: 20px;
        margin-right: 30px;
        color: #4899d0;
      }
    }
    div:nth-of-type(2) {
      button {
        border: none;
        color: #fff;
        border-radius: 5px;
        padding: 3px 5px;
      }
      button:nth-of-type(1) {
        background: #4899d0;
      }
      button:nth-of-type(2) {
        background: #fff;
        color: #ccc;
        margin-left: 20px;
        margin-right: 20px;
      }
      button:nth-of-type(3) {
        background: #666666;
      }
    }
  }
  .examination-questions {
    margin-top: 17px;
    div:nth-of-type(1) {
      font-weight: bold;
    }
    .options {
      display: flex;
      flex-direction: column;
      padding-left: 30px;
      span {
        margin-top: 10px;
      }
    }
    .line {
      width: 300px;
      height: 1px;
      background: #d7d7d7;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .correct {
      margin-bottom: 10px;
      span:nth-of-type(2) {
        color: #0021f5;
      }
    }
    .line-bold {
      height: 15px;
      background: #d7d7d7;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
}

// popover
.popover {
  position: fixed;
  width: 400px;
  top: 500px;
  right: 400px;
  background: #f2f2f2;
  .popover-title {
    background-color: #fafafa;
    padding: 10px 0px 10px 20px;
    font-weight: bold;
  }
  .popover-content {
    padding-left: 50px;
    padding-top: 20px;
    .el-input,
    .el-input__inner,
    .el-upload-list__item {
      width: 200px;
      height: 40px;
    }
    .btn {
      margin-top: 30px;
    }
  }
}
</style>
