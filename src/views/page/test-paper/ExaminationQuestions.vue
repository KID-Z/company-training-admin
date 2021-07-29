<!--
 * @Author: your name
 * @Date: 2021-07-09 16:13:30
 * @LastEditTime: 2021-07-13 15:49:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/test-paper/a.vue
-->
<template>
  <div class="examination-questions">
    <h3 class="examination-questions-title">试卷列表</h3>
    <div class="operation">
      <a-button
        type="primary"
        style="margin-left: 10px; margin-right: 10px; height: 30px"
        @click="drawer = true"
      >
        新增试卷
      </a-button>
       <a-button
        type="primary"
        style="margin-left: 10px; margin-right: 30px; height: 30px"
      >
        excel模版导入
      </a-button>
    </div>
    <div class="table-content">
      <el-table
        :data="tableData"
        style="width: 100%"
        height="calc(100vh - 250px)"
        stripe
      >
        <el-table-column label="ID">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="试卷名称">
          <template slot-scope="scope">
            <span>{{ scope.row.personNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column label="分类">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="试卷类型">
          <template slot-scope="scope">
            <span>{{ scope.row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column label="分数">
          <template slot-scope="scope">
            <span>{{ scope.row.email }}</span>
          </template>
        </el-table-column>
         <el-table-column label="及格线">
          <template slot-scope="scope">
            <span>{{ scope.row.email }}</span>
          </template>
        </el-table-column>
         <el-table-column label="限时(分钟)">
          <template slot-scope="scope">
            <span>{{ scope.row.email }}</span>
          </template>
        </el-table-column>
           <el-table-column label="备注">
          <template slot-scope="scope">
            <span>{{ scope.row.email }}</span>
          </template>
        </el-table-column>
           <el-table-column label="阅卷人">
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
            <el-button size="mini"  @click="drawer = true">编辑</el-button>
            <el-button size="mini" type="danger"
              >删除</el-button
            >
             <el-button size="mini" @click="generatingExaminationPaper">组卷</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination />
     <el-drawer title="添加试题" :visible.sync="drawer" append-to-body>
      <div class="add-examination-questions">
        <el-form
          :model="numberValidateForm"
          ref="numberValidateForm"
          label-width="100px"
          label-position="left"
          class="demo-ruleForm"
        >
                   <el-form-item
              label="试卷名称"
              prop="depName"
              :rules="[{ required: true, message: '试卷名称不能为空' }]"
            >
              <el-input
                type="depName"
                v-model.number="numberValidateForm.depName"
                autocomplete="off"
                placeholder="请输入试卷名称"
              ></el-input>
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
              label="分数"
              prop="depName"
              :rules="[{ required: true, message: '分数不能为空' }]"
            >
              <el-input
                type="depName"
                v-model.number="numberValidateForm.depName"
                autocomplete="off"
                placeholder="请输入分数"
              ></el-input>
            </el-form-item>
                  <el-form-item
            label="试卷类型"
            prop="superiorCategory"
            :rules="[{ required: true, message: '试卷类型不能为空' }]"
          >
            <el-select v-model="numberValidateForm.superiorCategory" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
           <el-form-item
              label="限时"
              prop="depName"
              :rules="[{ required: true, message: '限时时间不能为空' }]"
            >
              <el-input
                type="depName"
                v-model.number="numberValidateForm.depName"
                autocomplete="off"
                placeholder="请输入限时时间 分钟"
              ></el-input>
            </el-form-item>
             <el-form-item
              label="及格线"
              prop="depName"
              :rules="[{ required: true, message: '及格线不能为空' }]"
            >
              <el-input
                type="depName"
                v-model.number="numberValidateForm.depName"
                autocomplete="off"
                placeholder="请输入及格线 分"
              ></el-input>
            </el-form-item>
                    <el-form-item
            label="备注"
            prop="textarea"
          >
            <el-input
              type="textarea"
              v-model.number="numberValidateForm.textarea"
              :rows="2"
              autocomplete="off"
              placeholder="请输入备注"
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
  </div>
</template>
<script>
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
    generatingExaminationPaper() {
      this.$router.push({ name: 'ExaminationPaper' });
    },
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
    Pagination,
  },
};
</script>

<style lang="less">
.examination-questions {
  .examination-questions-title {
  margin-bottom: 20px;
  padding-left: 30px;
}
.operation {
  display: flex;
  padding-left: 20px;
  margin-bottom: 20px;
}
}

.add-examination-questions {
  padding-left: 50px;
  .el-input,
  .el-textarea__inner,
  .el-upload-list__item {
    width: 200px;
  }
  .el-input--suffix .el-input__inner {
  width: 100%;
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

</style>
