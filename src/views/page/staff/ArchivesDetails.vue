<!--
 * @Author: your name
 * @Date: 2021-07-08 11:13:34
 * @LastEditTime: 2021-07-08 15:18:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/details.vue
-->
<template>
  <div class="staff-archives-details">
    <div class="basic-information">
      <h3 class="title">基本信息</h3>
      <div class="saff-detailst">
        <div class="item">
          <div class="block">
            <div>姓名</div>
            <div>王某某</div>
          </div>
          <div class="block">
            <div>手机</div>
            <div>12345678901</div>
          </div>
        </div>
        <div class="item">
          <div class="block">
            <div>邮箱</div>
            <div>wmm@163.com</div>
          </div>
          <div class="block">
            <div>部门</div>
            <div>研发部</div>
          </div>
          <div class="block">
            <div>岗位</div>
            <div>web工程师</div>
          </div>
        </div>
      </div>
    </div>
    <div class="statistical-details">
      <h3 class="title">统计信息</h3>
      <div class="item">
        <div class="category">
          <div>课程</div>
          <div>完成8/13</div>
        </div>
        <div class="progress">
          <div class="progress-title">课程完成率</div>
          <div>
            <div class="progress-line">
              <el-progress :percentage="50"></el-progress>
            </div>
            累计学习时长: 15小时20分26秒
          </div>
        </div>
      </div>
      <div class="item">
        <div class="category">
          <div>考试</div>
          <div>完成8/13</div>
        </div>
        <div class="progress">
          <div class="progress-title">考试完成率</div>
          <div>
            <div class="progress-line">
              <el-progress :percentage="50"></el-progress>
            </div>
            考试平均分: 78
          </div>
        </div>
      </div>
      <div class="item">
        <div class="category">
          <div>培训</div>
          <div>完成8/13</div>
        </div>
        <div class="progress">
          <div class="progress-title">培训完成率</div>
          <div>
            <div class="progress-line">
              <el-progress :percentage="50"></el-progress>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="statistical-details-classify">
      <div class="item">
        <div class="display-details-title">
          <span>课程</span>
          <span style="cursor: pointer" @click="toStatisticalPage('CourseStatistical')"
            >查看详情>></span
          >
        </div>
        <div class="display-details">
          <div class="display-details-item">
            <span>部门课程完成:</span>
            <span>0/13</span>
          </div>
          <div class="display-details-item">
            <span>岗位课程完成:</span>
            <span>3/15</span>
          </div>
          <div class="display-details-item">
            <span>个人课程完成:</span>
            <span>15/15</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="display-details-title">
          <span>培训</span>
          <span style="cursor: pointer" @click="toStatisticalPage('TrainingStatistical')"
            >查看详情>></span
          >
        </div>
        <div class="display-details-number">
          <div class="display-progress-number">
            <div>8</div>
            <div>进行中的培训</div>
          </div>
          <div class="display-details-progress">
            <div>培训完成度: 5/20</div>
            <div>参加培训: 11</div>
            <div>获得学分: 10</div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="display-details-title">
          <span>考试</span>
          <span style="cursor: pointer" @click="toStatisticalPage('ExamStatistical')"
            >查看详情>></span
          >
        </div>
        <div class="display-details-number">
          <div class="display-progress-number">
            <div>8</div>
            <div>进行中的培训</div>
          </div>
          <div class="display-details-progress">
            <div>培训完成度: 5/20</div>
            <div>参加培训: 11</div>
            <div>获得学分: 10</div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="display-details-title">
          <span>学分</span>
          <span style="cursor: pointer" @click="toStatisticalPage('CreditHourStatistical')"
            >查看详情>></span
          >
        </div>
        <div class="display-details-number">
          <div class="display-progress-number">
            <div>8</div>
            <div>进行中的培训</div>
          </div>
          <div class="display-details-progress">
            <div>培训完成度: 5/20</div>
            <div>参加培训: 11</div>
            <div>获得学分: 10</div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="display-details-title">
          <span>证书</span>
          <span style="cursor: pointer" @click="toStatisticalPage('CertificateStatistical')"
            >查看详情>></span
          >
        </div>
        <div class="display-details-number">
          <div class="display-progress-number">
            <div>8</div>
            <div>进行中的培训</div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="display-details-title">
          <span>学习记录</span>
          <span style="cursor: pointer" @click="toStatisticalPage('LearnStatistical')"
            >查看详情>></span
          >
        </div>
        <div class="display-details-number">
          <div class="display-progress-number">
            <div>8</div>
            <div>进行中的培训</div>
          </div>
          <div class="display-details-progress">
            <div>培训完成度: 5/20</div>
            <div>参加培训: 11</div>
            <div>获得学分: 10</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toStatisticalPage(path) {
      this.$router.push({ name: path });
    },
  },
};
</script>

<style lang="less" scoped>
.staff-archives-details {
  padding-bottom: 40px;
}
.title {
  font-weight: normal;
  font-size: 15px;
  margin-bottom: 25px;
  &::before {
    content: "";
    width: 5px;
    height: 15px;
    margin-left: 12px;
    margin-right: 12px;
    background: red;
    vertical-align: -2px;
    display: inline-block;
  }
}
.basic-information {
  margin-bottom: 40px;
  .saff-detailst {
    padding: 15px 30px;
    background-color: #f2f2f2;
    width: 88%;
    margin: 0 auto;
    .item {
      display: flex;
      &:nth-of-type(1) {
        margin-bottom: 55px;
      }
      .block {
        display: flex;
        width: 33.33%;
        div:nth-of-type(1)::after {
          content: "";
          width: 2px;
          height: 15px;
          margin-left: 12px;
          margin-right: 12px;
          background: red;
          vertical-align: -2px;
          display: inline-block;
        }
      }
    }
  }
}
.statistical-details {
  .item {
    padding: 15px;
    background-color: #f2f2f2;
    width: 88%;
    margin: 0 auto;
    display: flex;
    .category {
      background: #fff;
      margin-right: 20px;
      border-radius: 3px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 120px;
      width: 190px;
      div {
        &:nth-of-type(1) {
          margin-bottom: 20px;
        }
      }
    }
    .progress {
      height: 120px;
      background: #fff;
      border-radius: 3px;
      padding: 10px 20px;
      flex: 1;
      .progress-title {
        margin-top: 20px;
        margin-bottom: 17px;
        font-weight: bold;
      }
      div {
        &:nth-of-type(2) {
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
.statistical-details-classify {
  width: 88%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .item {
    width: 48%;
    padding-top: 7px;
    padding-bottom: 10px;
    margin-top: 10px;
    background: #f2f2f2;
    box-sizing: border-box;
    .display-details-title {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding-left: 17px;
      padding-right: 17px;
      padding-bottom: 7px;
      font-size: 13px;
      font-weight: bold;
    }
    .display-details {
      .display-details-item {
        width: 70%;
        margin: 0 auto;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
      }
    }
    .display-details-number {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      justify-content: space-around;
      .display-progress-number {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100px;
        flex: 1;
        div:nth-of-type(1) {
          margin-bottom: 10px;
        }
      }
      .display-details-progress {
        margin-right: 50px;
        div {
          &:not(&:nth-of-type(1)) {
            margin-top: 5px;
          }
        }
      }
    }
  }
}
.progress-line {
  width: 300px;
  margin-top: 3px;
  margin-right: 40px;
}
</style>
