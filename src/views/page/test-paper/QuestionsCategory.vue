<!--
 * @Author: your name
 * @Date: 2021-07-12 11:05:52
 * @LastEditTime: 2021-07-21 09:46:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/test-paper/ExaminationQuestionsCategory.vue
-->

<template>
  <div class="questions-category">
    <div style="display: flex; justify-content: flex-end">
      <Search width="150" placeholder="搜索课程分类名称" />
      <a-button type="primary" style="margin-left: 10px; margin-right: 10px" @click="drawer = true">
        新增
      </a-button>
    </div>
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="false"
      :row-selection="rowSelection"
      :expanded-row-keys.sync="expandedRowKeys"
    >
      <div slot="operation" class="operation" slot-scope="text, record">
        <a-button style="margin-right: 10px" @click="drawer = true">添加</a-button>
        <a-button style="margin-right: 10px" type="danger" @click="removeProduct(record)"
          >删除</a-button
        >
        <a-button type="danger" @click="removeProduct(record)">编辑</a-button>
      </div>
    </a-table>
    <el-drawer title="新增部门" :visible.sync="drawer" append-to-body>
      <div class="add-dept">
        <el-form
          :model="numberValidateForm"
          ref="numberValidateForm"
          label-width="100px"
          label-position="left"
          class="demo-ruleForm"
        >
          <el-form-item
            label="试题分类"
            prop="depName"
            :rules="[{ required: true, message: '试题分类名称不能为空' }]"
          >
            <el-input
              type="depName"
              v-model.number="numberValidateForm.depName"
              autocomplete="off"
              placeholder="请输入试题分类名称"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="上级类别"
            prop="higherCategory"
            :rules="[{ required: true, message: '上级类别不能为空' }]"
          >
            <el-select v-model="numberValidateForm.higherCategory" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
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
import Search from '@/components/Search/index.vue';

const columns = [
  {
    title: '试题分类',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '上级分类',
    dataIndex: 'a',
    key: 'a',
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    width: 300,
    scopedSlots: { customRender: 'operation' },
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown sr.',
    children: [
      {
        key: 11,
        name: 'John Brown',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

export default {
  data() {
    return {
      data,
      columns,
      rowSelection,
      expandedRowKeys: [],
      drawer: false,
      numberValidateForm: {
        depName: '',
        higherDep: '',
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
    excelOperation() {
      this.$router.push({ name: 'Operation' });
    },
  },
  components: {
    Search,
  },
};
</script>

<style lang="less">
.questions-category {
  .operation {
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
