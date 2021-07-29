<!--
 * @Author: your name
 * @Date: 2021-07-13 13:53:23
 * @LastEditTime: 2021-07-13 13:53:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/training/ReviewPapers.vue
-->
<template>
  <div class="review-papers">
    <div class="personnel-list">
      <div class="personnel-search">
        <span>人员名单</span>
        <Search width="130" placeholder="搜索名称" />
      </div>
      <div class="personnel-list-details">
        <div class="personnel-list-item">
          <span>姓名</span>
          <span>成绩</span>
        </div>
        <div class="personnel-list-item active">
          <span>王某</span>
          <span>很好</span>
        </div>
      </div>
    </div>
    <div class="review-papers-score">
      <div class="review-papers-title">
        <div>
          <span style="font-weight: bold; font-size: 17px">主观题</span><span>总分20分</span>
        </div>
        <div><span>共计10道题</span><span>每题2分</span></div>
      </div>
      <div class="examination-paper-questions">
        <div class="examination-paper-questions-content">
          <div class="questions">
            <span>问题1: 发生火灾需要拨打110吗?</span>
          </div>
          <div class="answer">
            <span>答: 不需要, 发生火灾需要拨打119</span>
          </div>
          <div class="explain-questions">
            <span>试题解析:</span>
            <span>不光要考虑火灾的问题, 刑事问题有时也要考虑的</span>
          </div>
        </div>
        <div class="examination-paper-questions-score">
          <div>总得分</div>
          <div>98</div>
        </div>
      </div>
      <div class="grades">
        <span>得分</span>
        <input type="text" />
      </div>
            <div class="examination-paper-questions">
        <div class="examination-paper-questions-content">
          <div class="questions">
            <span>问题1: 发生火灾需要拨打110吗?</span>
          </div>
          <div class="answer">
            <span>答: 不需要, 发生火灾需要拨打119</span>
          </div>
          <div class="explain-questions">
            <span>试题解析:</span>
            <span>不光要考虑火灾的问题, 刑事问题有时也要考虑的</span>
          </div>
        </div>
      </div>
      <div class="grades">
        <span>得分</span>
        <input type="text" />
      </div>
       <!--  按钮 -->
      <div class="submit">
        <el-button type="info" size="large">取消</el-button>
        <el-button type="primary" size="large">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search/index.vue';

export default {
  components: {
    Search,
  },
};
</script>

<style lang="less" scoped>
.review-papers {
  display: flex;
  .personnel-list {
    width: 220px;
    height: calc(100vh - 150px);
    margin-left: 20px;
    border-right: 1px solid #999;
    .personnel-search {
      display: flex;
      vertical-align: 3px;
      border-bottom: 1px solid #999;
      span {
        display: block;
        font-weight: bold;
        margin-top: 3px;
        margin-right: 15px;
      }
    }
    .personnel-list-details {
      .personnel-list-item {
        height: 50px;
        line-height: 50px;
        display: flex;
        padding: 0 20px;
        justify-content: space-between;
        margin-bottom: 10px;
        &:nth-of-type(1) {
          border-bottom: 1px solid #999;
        }
        &.active {
          background: blue;
          color: #fff;
        }
      }
    }
  }
  .review-papers-score {
    flex: 1;
    .review-papers-title {
      display: flex;
      justify-content: space-between;
      padding: 10px 20px;
      span:nth-of-type(1) {
        margin-right: 17px;
      }
    }
    .examination-paper-questions {
      display: flex;
      padding: 0 50px 0px 20px;
      margin-bottom: 20px;
      align-items: center;
      justify-content: space-between;
      .examination-paper-questions-content {
        .questions {
          margin-bottom: 15px;
        }
        .answer {
          margin-left: 20px;
          margin-bottom: 15px;
        }
        .explain-questions {
          display: flex;
          flex-direction: column;
          span:nth-of-type(2) {
            margin-top: 15px;
            margin-left: 20px;
          }
        }
      }
    }
    .examination-paper-questions-score {
      width: 120px;
      height: 120px;
      text-align: center;
      border: 1px solid #999;
      div:nth-of-type(1) {
        border-bottom: 1px solid #999;
        padding: 7px 0;
      }
      div:nth-of-type(2) {
        color: red;
        font-size: 17px;
        margin-top: 27px;
      }
    }
    .grades {
      border-top: 1px solid #999;
      border-bottom: 1px solid #999;
      padding: 0 20px;
      margin-bottom: 20px;
      span {
        font-size: 17px;
        font-weight: bold;
        margin-right: 10px;
      }
      input {
        outline: none;
        border: 1px solid #ccc;
        width: 300px;
        height: 70px;
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
    .submit {
      margin-top: 100px;
      text-align: center;
    }
  }
}
</style>
