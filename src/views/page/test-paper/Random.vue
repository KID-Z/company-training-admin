<!--
 * @Author: your name
 * @Date: 2021-07-12 14:17:04
 * @LastEditTime: 2021-07-12 14:18:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/test-paper/Random.vue
-->

<template>
  <div>
    <div style="display: flex">
      <span style="margin: 3px 30px 0px 20px; font-size: 15px; font-weight: bold">试题分类</span>
      <Search width="150" placeholder="搜索名称" />
    </div>
    <div class="make-out-questions">
      <div class="tree">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </div>
      <div class="examination-questions">
        <h3 class="examination-questions-title">试题类型及数量</h3>
        <div class="examination-questions-content">
          <div class="examination-questions-item">
            <span>单选题</span>
            <span>可用497道题</span>
            <div><input type="text" />道</div>
            <div>每道<input type="text" />分</div>
          </div>
          <div class="examination-questions-item">
            <span>多选题</span>
            <span>可用497道题</span>
            <div><input type="text" />道</div>
            <div>每道<input type="text" />分</div>
          </div>
          <div class="examination-questions-item">
            <span>判断题</span>
            <span>可用497道题</span>
            <div><input type="text" />道</div>
            <div>每道<input type="text" />分</div>
          </div>
          <div class="examination-questions-item">
            <span>不定向选择题</span>
            <span>可用497道题</span>
            <div><input type="text" />道</div>
            <div>每道<input type="text" />分</div>
          </div>
          <div class="examination-questions-item">
            <span>填空题</span>
            <span>可用497道题</span>
            <div><input type="text" />道</div>
            <div>每道<input type="text" />分</div>
          </div>
          <div class="examination-questions-item">
            <span>主观题</span>
            <span>可用497道题</span>
            <div><input type="text" />道</div>
            <div>每道<input type="text" />分</div>
          </div>
          <div style="margin: 40px 0">备注组卷分数要等于试卷总分，超出和低于都无法完成组卷</div>
          <div style="margin-bottom: 40px">试卷总分 100分</div>
          <div style="margin-bottom: 40px">
            <span>组卷分数</span> <span style="color: 0021f5">0</span>分
          </div>
          <div class="submit-examination-questions">
            <button>取消</button>
            <button>保存</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search/index.vue';

export default {
  data() {
    return {
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1',
                },
              ],
            },
          ],
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1',
                },
              ],
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1',
                },
              ],
            },
          ],
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1',
                },
              ],
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1',
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
  },
  components: {
    Search,
  },
};
</script>

<style lang="less" scoped>
.make-out-questions {
  display: flex;
  .tree {
    width: 300px;
    margin-right: 30px;
    margin-left: 20px;
    padding: 20px 20px 0 20px;
    border: 1px solid #ccc;
    border-left: none;
    box-sizing: border-box;
  }
  .examination-questions {
    flex: 1;
    border: 1px solid #ccc;
    box-sizing: border-box;
    padding-bottom: 30px;
    margin-right: 20px;
    .examination-questions-title {
      padding: 15px;
      margin-bottom: 30px;
    }
    .examination-questions-content {
      width: 900px;
      padding: 0px 50px;
      margin: 0 auto;
      .examination-questions-item {
        display: flex;
        justify-content: space-between;
        &:not(&:nth-of-type(1)) {
          margin-top: 40px;
        }
        span:nth-of-type(1) {
          width: 90px;
        }
        span:nth-of-type(2) {
          color: #ccc;
        }
        div {
          input {
            width: 100px;
            outline: none;
            border: 1px solid #ccc;
            margin: 0px 7px;
          }
        }
      }
      .submit-examination-questions {
        margin-top: 100px;
        display: flex;
        justify-content: center;
        color: #fff;
        button {
          outline: none;
          border: none;
          border-radius: 5px;
          padding: 10px 50px;
          &:nth-of-type(1) {
            background: #666666;
            margin: 0px 20px;
          }
           &:nth-of-type(2) {
            background: #469ad0;
            margin: 0px 20px;
          }
        }
      }
    }
  }
}
</style>
