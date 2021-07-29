<!--
 * @Author: your name
 * @Date: 2021-07-09 14:27:17
 * @LastEditTime: 2021-07-27 09:14:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/test-paper/TestPaper.vue
-->
<template>
  <div class="training-statistical">
    <h3 class="training-statistical-title">试题列表</h3>
    <div class="operation">
      <a-button
        type="primary"
        style="margin-left: 10px; margin-right: 10px; height: 30px"
        @click="drawer = true"
      >
        新增
      </a-button>
      <a-button type="primary" style="margin-left: 10px; margin-right: 30px; height: 30px">
        excel模版导入
      </a-button>
      <Cascader placeholder="分类" />
      <Cascader placeholder="试题类型" />
      <Cascader placeholder="试卷难度" />
      <Search width="180" placeholder="搜索员工姓名、手机号" />
    </div>
    <div class="table-content">
      <el-table :data="tableData" style="width: 100%" height="calc(100vh - 250px)" stripe>
        <el-table-column label="ID">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="试题内容">
          <template slot-scope="scope">
            <span>{{ scope.row.personNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column label="分类">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="试题类型">
          <template slot-scope="scope">
            <span>{{ scope.row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column label="试题难度">
          <template slot-scope="scope">
            <span>{{ scope.row.email }}</span>
          </template>
        </el-table-column>
        <el-table-column label="创建时间">
          <template slot-scope="scope">
            <span>{{ scope.row.depName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="250" fixed="right">
          <template>
            <el-button size="mini">查看答案</el-button>
            <el-button size="mini" @click="drawer = true">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination />
    <el-drawer title="添加试题" :visible.sync="drawer" append-to-body>
      <div class="add-dep">
        <el-form
          :model="numberValidateForm"
          ref="numberValidateForm"
          label-width="100px"
          label-position="left"
          class="demo-ruleForm"
        >
          <el-form-item
            label="类型"
            prop="superiorCategory"
            :rules="[{ required: true, message: '类型不能为空' }]"
          >
            <el-select v-model="numberValidateForm.superiorCategory" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="难度"
            prop="superiorCategory"
            :rules="[{ required: true, message: '难度不能为空' }]"
          >
            <el-select v-model="numberValidateForm.superiorCategory" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="分类"
            prop="superiorCategory"
            :rules="[{ required: true, message: '分类不能为空' }]"
          >
            <el-select v-model="numberValidateForm.superiorCategory" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="问题"
            prop="textarea"
            :rules="[{ required: true, message: '问题不能为空' }]"
          >
            <el-input
              type="textarea"
              v-model.number="numberValidateForm.textarea"
              :rows="2"
              autocomplete="off"
              placeholder="请输入问题"
            >
            </el-input>
          </el-form-item>
          <el-form-item
            label="选项内容"
            prop="textarea"
            :rules="[{ required: true, message: '问题不能为空' }]"
          >
            <div>
              <a-radio>A</a-radio>
              <el-input
                type="textarea"
                v-model.number="numberValidateForm.textarea"
                :rows="2"
                autocomplete="off"
                placeholder="请输入问题"
              >
              </el-input>
            </div>
            <div>
              <a-radio>B</a-radio>
              <el-input
                type="textarea"
                v-model.number="numberValidateForm.textarea"
                :rows="2"
                autocomplete="off"
                placeholder="请输入问题"
              >
              </el-input>
            </div>
            <div>
              <a-radio>C</a-radio>
              <el-input
                type="textarea"
                v-model.number="numberValidateForm.textarea"
                :rows="2"
                autocomplete="off"
                placeholder="请输入问题"
              >
              </el-input>
            </div>
            <a-button type="primary" style="margin-top: 10px"> 添加选项 </a-button>
          </el-form-item>
          <el-form-item
            label="正确答案"
            prop="superiorCategory"
            :rules="[{ required: true, message: '正确答案不能为空' }]"
          >
            A
          </el-form-item>
          <el-form-item
            label="试题解析"
            prop="textarea"
            :rules="[{ required: true, message: '试题解析不能为空' }]"
          >
            <el-input
              type="textarea"
              v-model.number="numberValidateForm.textarea"
              :rows="2"
              autocomplete="off"
              placeholder="请输入试题解析"
            >
            </el-input>
          </el-form-item>
          <el-form-item class="submit">
            <el-button type="primary" @click="submitForm('numberValidateForm')">确定</el-button>
            <el-button @click="resetForm('numberValidateForm')">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
    <!-- 查看答案 -->
    <div class="popover">
      <div class="item"><span>试题类型</span><span>主观题</span></div>
      <div class="item"><span>试题难度</span><span>简单</span></div>
      <div class="item"><span>试题内容</span><span>测试题</span></div>
      <div class="item"><span>试题内容</span></div>
      <div style="margin-bottom: 10px; text-align: center">火警必须要打110吗?</div>
      <div class="item"><span>试题解析</span></div>
      <div style="margin-bottom: 10px; text-align: center">不是, 除非有人故意纵火!</div>
      <div class="popover-btn">
        <a-button type="primary" style="margin-right: 20px; height: 30px"> 取消 </a-button>
        <a-button type="primary" style="height: 30px"> 确定 </a-button>
      </div>
    </div>
  </div>
</template>
<script>
import Search from '@/components/Search/index.vue';
import Cascader from '@/components/Cascader/index.vue';
import Pagination from '@/components/Pagination/index.vue';

export default {
  data() {
    return {
      tableData: [
        {
          id: 2,
          personNumber: '77',
          name: '张三',
          phone: '158988811',
          photoUrl:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fg-search1.alicdn.com%2Fimg%2Fbao%2Fuploaded%2Fi3%2F3883849635%2FTB2eWnVhDXYBeNkHFrdXXciuVXa_%21%213883849635.jpg_300x300.jpg&refer=http%3A%2F%2Fg-search1.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627464871&t=2fd2a58223c94dfc8091b16c2991575e"',
          email: '88@163efsfs.com',
          depName: '行政部',
          poName: '开发部',
          accountNumber: 'zs',
          createTime: '2021-06-03',
          state: 1,
          departmentId: 5,
          positionId: 1,
        },
      ],
      drawer: false,
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
  components: {
    Search,
    Cascader,
    Pagination,
  },
};
</script>

<style lang="less">
.training-statistical {
  .training-statistical-title {
  margin-bottom: 20px;
  padding-left: 30px;
}
.operation {
  display: flex;
  padding-left: 20px;
  margin-bottom: 20px;
}

.el-input {
  width: 100px;
}
}

.add-dep {
  padding-left: 50px;
  .el-input,
  .el-textarea__inner,
  .el-upload-list__item {
    width: 200px;
  }
  .el-input__inner {
  height: 30px;
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

.el-input--suffix .el-input__inner {
  width: 100%;
}

// 查看答案弹出框
.popover {
  width: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  .item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    span:nth-of-type(1) {
      color: #ccc;
    }
  }
  .popover-btn {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
}
</style>
