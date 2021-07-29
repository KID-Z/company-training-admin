<!--
 * @Author: your name
 * @Date: 2021-07-14 14:04:36
 * @LastEditTime: 2021-07-19 10:20:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/statistics/a.vue
-->

<template>
  <div class="charts-pie">
    <div class="title">
      <span class="text">{{ title }}</span>
    </div>
    <div class="charts">
      <div class="pie">
        <ve-pie
          :data="chartData"
          :settings="chartSettings"
          :extend="extend"
        ></ve-pie>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    this.extend = {
      'legend.top': '15%',
      ' radius': '30%',
    };
    return {
      chartSettings: { type: 'pie', hoverAnimation: false },
      chartData: {
        columns: ['name', 'value'],
        rows: [
          {
            name: '1月1号',
            value: 1393,
          },
          {
            name: '1月2号',
            value: 3530,
          },
          {
            name: '1月3号',
            value: 2923,
          },
        ],
      },
    };
  },
};
</script>

<style lang="less">
.charts-pie {
  .title {
    display: flex;
    box-sizing: border-box;
    .text {
      display: block;
      font-size: 16px;
      font-weight: bold;
      &::before {
        content: "";
        display: inline-block;
        width: 5px;
        height: 17px;
        background: #0021f5;
        vertical-align: -3px;
        margin-right: 10px;
      }
    }
    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 121px;
    }
  }
  .charts {
    display: flex;
    background: #f2f2f2;
    box-sizing: border-box;
    .pie {
      width: 350px;
      margin: 0 auto;
    }
  }
  .ve-pie {
    height: 200px !important;
  }
}
</style>
