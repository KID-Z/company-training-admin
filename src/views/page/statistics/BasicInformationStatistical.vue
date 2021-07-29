<!--
 * @Author: your name
 * @Date: 2021-07-15 10:15:52
 * @LastEditTime: 2021-07-15 15:40:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/statistics/statistics.vue
-->

<template>
  <div class="summary">
    <div class="basic-information">
      <div class="basic-information-title">基本信息统计</div>
      <div class="basic-information-detaisl">
        <div class="basic-information-item">
          <span>200</span>
          <span>员工数据</span>
        </div>
        <div class="basic-information-item">
          <span>200</span>
          <span>登录次数</span>
        </div>
        <div class="basic-information-item">
          <span>200</span>
          <span>上线率</span>
        </div>
        <div class="basic-information-item">
          <span>200</span>
          <span>岗位总数</span>
        </div>
        <div class="basic-information-item">
          <span>200</span>
          <span>部门总数</span>
        </div>
        <div class="basic-information-item">
          <span>200</span>
          <span>总学习时长(小时)</span>
        </div>
        <div class="basic-information-item">
          <span>200</span>
          <span>人均学习时长</span>
        </div>
        <div class="basic-information-item">
          <span>200</span>
          <span>课程数量</span>
        </div>
        <div class="basic-information-item">
          <span>200</span>
          <span>培训数量</span>
        </div>
        <div class="basic-information-item">
          <span>200</span>
          <span>试卷数量</span>
        </div>
      </div>
    </div>
    <div class="charts">
      <div class="charts-item">
         <ChartsLine title="登录人数统计图" mark="人数" />
      </div>
        <div class="charts-item">
         <ChartsLine title="学习时长统计图" mark="时长" />
      </div>
        <div class="charts-item">
         <ChartsLine title="考试数据统计" mark="数量" />
      </div>
      <div class="charts-item">
        <ChartsPie title="课程基本信息" />
      </div>
            <div class="charts-item">
         <ChartsLine title="部门培训次数统计" mark="数量" />
      </div>
        <div class="charts-item">
         <ChartsLine title="部门课程统计" mark="数量" />
      </div>
        <div class="charts-item">
         <ChartsLine title="培训类型统计" />
      </div>
            <div class="charts-item">
         <ChartsLine title="培训进行时间统计" />
      </div>
        <div class="charts-item">
         <ChartsLine title="部门培训完成率" mark="完成率" />
      </div>
        <div class="charts-item">
         <ChartsLine title="部门考试完成率" mark="完成率" />
      </div>
    </div>
  </div>
</template>

<script>
import ChartsPie from './ChartsPie.vue';
import ChartsLine from './ChartsLine.vue';

export default {
  components: {
    ChartsPie,
    ChartsLine,
  },
};
</script>

<style lang="less" scoped>
.summary {
  .basic-information {
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: 20px;
    background: #f2f2f2;
    .basic-information-title {
      font-weight: bold;
      font-size: 16px;
      padding: 10px;
    }
    .basic-information-detaisl {
      display: flex;
      justify-content: center;
      margin: 0 20px;
      .basic-information-item {
        width: 120px;
        height: 70px;
        border: 1px solid #797979;
        background: #fff;
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        &:not(&:nth-of-type(1)) {
          margin-left: 20px;
        }
      }
    }
  }
  .charts {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px;
    justify-content: space-between;
    .charts-item {
      width: 48%;
      margin-bottom: 20px;
    }
  }
}
</style>
