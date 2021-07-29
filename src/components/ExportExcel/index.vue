<!--
 * @Author: your name
 * @Date: 2021-07-21 09:43:25
 * @LastEditTime: 2021-07-21 10:25:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/components/ExportExcel/index.vue
-->

<template>
  <div style="margin: 0 10px">
    <el-button type="primary" @click="export2Excel()">导出Excel</el-button>
  </div>
</template>

<script>
import { export_json_to_excel } from '../../excel/Export2Excel';

export default {
  data() {
    return {
      tableData: [
        {
          index: 0,
          username: '张三',
          password: 333,
          age: 22,
        },
        {
          index: 1,
          username: '李四',
          password: 444,
          age: 23,
        },
      ],
    };
  },
  methods: {
    export2Excel() {
      const h = this.$createElement;
      this.$msgbox({
        title: '提示',
        message: h('p', null, [h('span', null, '此操作将导出excel文件, 是否继续?')]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            require.ensure([], () => {
              const fieldName = ['索引', '用户名', '密码'];
              const filterVal = ['index', 'username', 'password'];
              const data = this.tableData.map((v) => filterVal.map((j) => v[j]));
              export_json_to_excel(fieldName, data, '用户列表');
              done();
            });
          } else {
            done();
          }
        },
      }).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>
