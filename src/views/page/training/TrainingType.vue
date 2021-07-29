<!--
 * @Author: your name
 * @Date: 2021-07-13 14:01:19
 * @LastEditTime: 2021-07-20 15:51:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/training/ TrainingType.vue
-->

<template>
  <div class="training-type">
    <div class="operation">
      <Search width="150" placeholder="搜索课程分类名称" />
      <a-button
        type="primary"
        style="margin-left: 10px; margin-right: 10px; height: 30px"
        @click="drawer = true"
      >
        新增
      </a-button>
    </div>
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="false"
    >
      <div slot="operation" slot-scope="text, record">
        <a-button style="margin-right: 10px" @click="drawer = true">编 辑</a-button>
        <a-button type="danger" @click="removeProduct(record)">删 除</a-button>
      </div>
    </a-table>
  </div>
</template>
<script>
import Search from '@/components/Search/index.vue';

const columns = [
  {
    title: '培训类型',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '层级',
    dataIndex: 'cover',
    key: 'cover',
  },
  {
    title: '上级分类',
    dataIndex: 'superiorDept',
    key: 'superiorDept',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
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
    name: '1',
    id: 'John Brown sr.',
    children: [
      {
        key: 12,
        name: '1',
        id: 'John Brown jr.',
        children: [
          {
            key: 121,
            name: '1',
            id: 'Jimmy Brown',
          },
        ],
      },
    ],
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
        courseCategoryName: '',
        superiorCategory: '',
        cover: '',
      },
      fileList: [],
    };
  },
  components: {
    Search,
  },
};
</script>

<style lang="less">
.training-type {
.operation {
  display: flex;
  padding-left: 20px;
  margin-bottom: 20px;
}
}
</style>
