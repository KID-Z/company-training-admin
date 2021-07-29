<!--
 * @Author: your name
 * @Date: 2021-07-08 16:49:49
 * @LastEditTime: 2021-07-09 09:06:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/ExcelOperation.vue
-->
<template>
  <div class="excel">
    <div class="operation">
      <span>上传</span>
      <span style="color: #3f99f7">部门管理列表</span>
      <span style="color: #eb3223">删除</span>
      <button>保存</button>
    </div>
    <div class="explain">
      <h3>使用说明</h3>
      <div class="explain-img">
        <div class="img"><img src="../../assets/images/excel.png" /></div>
        <span>Excel模版如上</span>
      </div>
      <h3>详细说明</h3>
      <div class="details-explain">
        <div>●第一行：固定格式“部分名称”</div>
        <div>●第二行开始：</div>
        <div>例子中：艾特斯公司/市场部</div>
        <div>解释：艾特斯公司：为公司名称</div>
        <div>市场部：为公司下的一级部门</div>
        <div>●若添加同级部门，在表格中按照以上格式输入</div>
        <div>例：增加人事部</div>
        <div>艾特斯公司/人事部</div>
        <div>●若添加下级部门，则在该部门下增加</div>
        <div>例：在市场部下增加办事处</div>
        <div>艾特斯公司/市场部/办事处</div>
        <div>
          <span style="font-weight: bold; font-size: 17px">备注:</span
          > 必须按照固定格式增加，才可以自动生成部门，如果上一级部门不存在，是增加不了子部门的
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.excel {
  width: 90%;
  margin: 0 auto;
  padding-bottom: 50px;
  .operation {
    font-size: 15px;
    background: #f2f2f2;
    padding: 40px 50px;
    border-radius: 3px;
    box-sizing: border-box;
    margin-bottom: 20px;
    span {
      &:not(&:nth-of-type(1)) {
        margin-left: 40px;
      }
    }
    button {
      background: #f29d38;
      border: none;
      color: #fff;
      border-radius: 3px;
      margin-left: 40px;
      padding: 5px 40px;
    }
  }
  .explain {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    background: #f2f2f2;
    border-radius: 3px;
    box-sizing: border-box;
    overflow: hidden;
    .explain-img {
      margin-left: 20px;
      .img {
        width: 600px;
        height: 200px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .details-explain {
      margin-left: 20px;
      div {
        margin-bottom: 10px;
      }
    }
  }
}
h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
