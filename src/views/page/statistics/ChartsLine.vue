<!--
 * @Author: your name
 * @Date: 2021-07-14 15:15:03
 * @LastEditTime: 2021-07-16 16:37:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/statistics/Charts.vue
-->
<template>
  <div class="charts-line">
    <div class="title">
      <span class="text">{{ title }}</span>
      <div class="date">
        <el-date-picker v-model="date" type="datetime" placeholder="选择日期">
        </el-date-picker>
      </div>
    </div>
    <div class="charts">
      <div class="mark">{{ mark }}</div>
      <ve-line  :data="chartData" :settings="chartSettings" :extend="extend" />
      <div class="month">月份</div>
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
    mark: {
      type: String,
    },
  },
  data() {
    this.chartSettings = {
      type: 'line',
    };
    this.extend = {
      // x轴文本设置
      'xAxis.0.axisLabel.fontSize': 13, // x轴文本字体大小
      'xAxis.0.nameTextStyle.lineHeight': 0.1,
      'xAxis.0.nameTextStyle.height': 1,

      // y轴文本设置
      'yAxis.0.axisLabel.color': 'green', // y轴文本改变颜色
      'yAxis.0.splitNumber': 2,
      'grid.bottom': '56%',
    };
    return {
      date: '',
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          {
            日期: '一月',
            访问用户: 70,
          },
          {
            日期: '二月',
            访问用户: 20,
          },
          {
            日期: '三月',
            访问用户: 0,
          },
          {
            日期: '四月',
            访问用户: 30,
          },
          {
            日期: '五月',
            访问用户: 50,
          },
        ],
      },
    };
  },
};
</script>

<style lang="less">
.charts-line {
  .title {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    line-height: 40px;
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
    .date {
      .el-icon-time {
        line-height: 32px;
      }
    }
  }
  .charts {
    display: flex;
    background: #f2f2f2;
    padding: 0px 30px;
    .mark {
      width: 40px;
      font-size: 13px;
      padding-top: 51px;
      font-weight: bold;
    }
    .month {
      display: flex;
      align-items: flex-end;
      width: 30px;
      font-size: 13px;
      padding-bottom: 23px;
      font-weight: bold;
    }
    .ve-line {
      flex: 1;
    }
  }
  .ve-line {
    height: 200px !important;
  }
}
</style>
