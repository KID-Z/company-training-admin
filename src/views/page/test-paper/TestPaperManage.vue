<!--
 * @Author: your name
 * @Date: 2021-07-09 14:27:17
 * @LastEditTime: 2021-08-03 11:16:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/page/test-paper/TestPaper.vue
-->
<template>
  <div class="training-statistical">
    <h3 class="training-statistical-title">试题列表</h3>
    <div class="operation">
      <!-- <a-button type="primary" style="margin-left: 10px; margin-right: 30px; height: 30px">
        excel模版导入
      </a-button> -->
      <Cascader
        placeholder="分类"
        @handleChange="classifyValue = $event[$event.length - 1]"
        children="child"
        :options="classificationTree"
      />
      <Select :options="problemKind" placeholder="试题类型" @change="problemKindValue = $event" />
      <Select
        :options="problemDifficult"
        placeholder="试题难度"
        @change="problemDifficultValue = $event"
      />
      <Search width="180" placeholder="搜索员工姓名、手机号" @onSearch="searchText = $event" />
      <a-button
        type="primary"
        style="margin-left: 10px; margin-right: 10px; height: 30px"
        @click="drawer = true"
      >
        搜索
      </a-button>
      <a-button
        type="primary"
        style="margin-left: 10px; margin-right: 10px; height: 30px"
        @click="drawer = true"
      >
        新增
      </a-button>
    </div>
    <div class="table-content">
      <el-table :data="problemList" style="width: 100%" height="calc(100vh - 250px)" stripe>
        <el-table-column label="ID">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="试题内容">
          <template slot-scope="scope">
            <span>{{ scope.row.questionValue }}</span>
          </template>
        </el-table-column>
        <el-table-column label="分类">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="试题类型">
          <template slot-scope="scope">
            <span>{{ problemKind[scope.row.problemKind - 1].label }}</span>
          </template>
        </el-table-column>
        <el-table-column label="试题难度">
          <template slot-scope="scope">
            <span>{{ problemDifficult[scope.row.problemDifficult - 1].label }}</span>
          </template>
        </el-table-column>
        <el-table-column label="创建时间">
          <template slot-scope="scope">
            <span>{{ scope.row.createTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="250" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" @click="answer(scope.row)">查看答案</el-button>
            <el-button size="mini" @click="drawer = true">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination />
    <el-drawer title="添加试题" :visible.sync="drawer" append-to-body>
      <div class="add-dep">
        <el-form
          :model="editData"
          ref="editData"
          label-width="100px"
          label-position="left"
          class="demo-ruleForm"
        >
          <el-form-item label="类型">
            <Select
              width="200"
              :value="editData.problemKind"
              :options="problemKind"
              placeholder="试题类型"
              @change="editData.problemKind = $event"
            />
          </el-form-item>
          <el-form-item
            label="难度"
            prop="problemDifficult"
            :rules="[{ required: true, message: '难度不能为空' }]"
          >
            <Select
              width="200"
              :value="editData.problemDifficult"
              :options="problemDifficult"
              placeholder="试题难度"
              @change="editData.problemDifficult = $event"
            />
          </el-form-item>
          <el-form-item
            label="分类"
            prop="setId"
            :rules="[{ required: true, message: '分类不能为空' }]"
          >
            <Cascader
              :value="editData.setId"
              width="200"
              placeholder="分类"
              @handleChange="editData.setId = $event[$event.length - 1]"
              children="child"
              :options="classificationTree"
            />
          </el-form-item>
          <el-form-item
            label="问题"
            prop="questionValue"
            :rules="[{ required: true, message: '问题不能为空' }]"
          >
            <el-input
              type="textarea"
              style="width: 200px"
              v-model="editData.questionValue"
              :rows="2"
              autocomplete="off"
              placeholder="请输入问题"
            >
            </el-input>
          </el-form-item>
          <!-- 单选 -->
          <template v-if="editData.problemKind === 1">
            <el-form-item label="选项内容">
              <div v-for="(r, index) in add.radioArr" :key="r.label">
                <div>
                  <el-radio v-model="add.radioRes" :label="r.label">{{ r.label }}</el-radio>
                  <i
                    class="el-icon-close"
                    style="cursor: pointer"
                    @click="removeChoose(index, 'radioArr')"
                  ></i>
                </div>
                <el-input
                  type="textarea"
                  style="width: 200px"
                  v-model="r.value"
                  :label="r.label"
                  :rows="2"
                  autocomplete="off"
                  placeholder="请输入答案"
                >
                </el-input>
              </div>
              <a-button
                type="primary"
                style="margin-top: 10px"
                v-if="isAdd"
                @click="addChoose('radioArr')"
              >
                添加选项
              </a-button>
            </el-form-item>
            <el-form-item label="正确答案">
              {{ add.radioRes }}
            </el-form-item>
          </template>
          <!-- 多选 -->
          <template v-else-if="editData.problemKind === 2">
            <el-form-item label="选项内容">
              <div v-for="(r, index) in add.checkList" :key="r.label">
                <div>
                  <el-checkbox :label="r.label" v-model="add.checkRes"></el-checkbox>
                  <i
                    class="el-icon-close"
                    style="cursor: pointer; margin-left: 20px"
                    @click="removeChoose(index, 'checkList')"
                  ></i>
                </div>
                <el-input
                  type="textarea"
                  style="width: 200px"
                  v-model="r.value"
                  :label="r.label"
                  :rows="2"
                  autocomplete="off"
                  placeholder="请输入答案"
                >
                </el-input>
              </div>
              <a-button
                type="primary"
                style="margin-top: 10px"
                v-if="isAdd"
                @click="addChoose('checkList')"
              >
                添加选项
              </a-button>
            </el-form-item>
            <el-form-item
              label="正确答案"
              prop="superiorCategory"
              :rules="[{ required: true, message: '正确答案不能为空' }]"
            >
              {{ add.checkRes.join("、") }}
            </el-form-item>
          </template>
          <!-- 填空 -->
          <template v-else-if="editData.problemKind === 3">
            <el-form-item label="选项内容">
              <div v-for="(r, index) in add.fillInTheBlanks" :key="index">
                <div>
                  {{ index + 1 }} 空
                  <i
                    class="el-icon-close"
                    style="cursor: pointer; margin-left: 20px"
                    @click="removeChoose(index, 'fillInTheBlanks')"
                  ></i>
                </div>
                <el-input
                  type="textarea"
                  style="width: 200px"
                  v-model="r.value"
                  :rows="1"
                  autocomplete="off"
                  placeholder="请输入答案"
                >
                </el-input>
              </div>
              <a-button
                type="primary"
                style="margin-top: 10px"
                v-if="isAdd"
                @click="addChoose('fillInTheBlanks')"
              >
                添加选项
              </a-button>
            </el-form-item>
            <el-form-item
              label="正确答案"
              prop="superiorCategory"
              :rules="[{ required: true, message: '正确答案不能为空' }]"
            >
              {{ add.fillInTheBlanks[0].value }}
            </el-form-item>
          </template>
          <!-- 判断题 -->
          <template v-else-if="editData.problemKind === 4">
            <el-form-item label="选项内容">
              <div>
                <el-radio v-model="add.judge" label="对">对</el-radio>
                <el-radio v-model="add.judge" label="错">错</el-radio>
              </div>
            </el-form-item>
            <el-form-item
              label="正确答案"
              prop="superiorCategory"
              :rules="[{ required: true, message: '正确答案不能为空' }]"
            >
              {{ add.judge }}
            </el-form-item>
          </template>
          <!-- 不定向 -->
          <template v-if="editData.problemKind === 5">
            <el-form-item label="选项内容">
              <div v-for="(r, index) in add.checkList" :key="r.label">
                <div>
                  <el-checkbox :label="r.label" v-model="add.checkRes"></el-checkbox>
                  <i
                    class="el-icon-close"
                    style="cursor: pointer; margin-left: 20px"
                    @click="removeChoose(index, 'checkList')"
                  ></i>
                </div>
                <el-input
                  type="textarea"
                  style="width: 200px"
                  v-model="r.value"
                  :label="r.label"
                  :rows="2"
                  autocomplete="off"
                  placeholder="请输入答案"
                >
                </el-input>
              </div>
              <a-button
                type="primary"
                style="margin-top: 10px"
                v-if="isAdd"
                @click="addChoose('checkList')"
              >
                添加选项
              </a-button>
            </el-form-item>
            <el-form-item
              label="正确答案"
              prop="superiorCategory"
              :rules="[{ required: true, message: '正确答案不能为空' }]"
            >
              {{ add.checkRes.join("、") }}
            </el-form-item>
          </template>
          <!-- 主观题 -->
          <template v-else-if="editData.problemKind === 6">
            <el-form-item label="参考答案">
              <el-input
                type="textarea"
                style="width: 200px"
                v-model="add.problemAnalysis"
                :rows="3"
                autocomplete="off"
                placeholder="请输入答案"
              >
              </el-input>
            </el-form-item>
          </template>
          <el-form-item
            label="试题解析"
            prop="problemAnalysis"
            :rules="[{ required: true, message: '试题解析不能为空' }]"
          >
            <el-input
              type="textarea"
              style="width: 200px"
              v-model.number="editData.problemAnalysis"
              :rows="2"
              autocomplete="off"
              placeholder="请输入试题解析"
            >
            </el-input>
          </el-form-item>
          <el-form-item class="submit">
            <el-button type="primary" @click="submitForm('editData')">确定</el-button>
            <el-button @click="resetForm('editData')">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
    <!-- 查看答案 -->
    <el-dialog
      :visible.sync="dialogVisible"
      title="答案"
      width="300px"
      center
      top="24vh"
      append-to-body
      class="popover"
    >
      <div class="item">
        <span>试题类型</span
        ><span>{{
          answerData.problemKind ? problemKind[answerData.problemKind - 1].label : ""
        }}</span>
      </div>
      <div class="item">
        <span>试题难度</span
        ><span>{{
          answerData.problemDifficult ? problemDifficult[answerData.problemDifficult - 1].label : ""
        }}</span>
      </div>
      <div class="item"><span>分类</span><span>测试题</span></div>
      <div class="item"><span>试题内容</span></div>
      <div style="margin-bottom: 10px; text-align: center">
        {{ answerData.problemAnswer || "无" }}
      </div>
      <div class="item"><span>试题解析</span></div>
      <div style="margin-bottom: 10px; text-align: center">
        {{ answerData.problemAnalysis || "无" }}
      </div>
      <div class="popover-btn">
        <a-button type="primary" style="height: 30px" @click="dialogVisible = false">
          关闭
        </a-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Search from '@/components/Search/index.vue';
import Cascader from '@/components/Cascader/index.vue';
import Select from '@/components/Select/index.vue';
import Pagination from '@/components/Pagination/index.vue';
import problem from '@/api/problem';
import tree from '@/api/tree';

export default {
  created() {
    this.getclassificationTree();
    this.getproblemList({
      problemKind: '',
      problemDifficult: '',
      selectlabel: '',
      current: 1,
    });
  },
  data() {
    return {
      answerData: {},
      dialogVisible: false,
      problemList: [],
      total: 0,
      drawer: false,
      problemKind: [
        { label: '单选', value: 1 },
        { label: '多选', value: 2 },
        { label: '填空', value: 3 },
        { label: '判断', value: 4 },
        { label: '不定项选择', value: 5 },
        { label: '主观', value: 6 },
      ],
      classifyValue: '',
      searchText: '',
      problemKindValue: '',
      problemDifficultValue: '',
      problemDifficult: [
        { label: '简单', value: 1 },
        { label: '中等', value: 2 },
        { label: '困难', value: 3 },
      ],
      radioLabel: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
      isAdd: true,
      add: {
        judge: '',
        subjective: '',
        radioRes: '',
        checkRes: [],
        classifyValue: '',
        problemKindValue: '',
        problemDifficultValue: '',
        radioArr: [
          { label: 'A', value: '' },
          { label: 'B', value: '' },
        ],
        checkList: [
          { label: 'A', value: '' },
          { label: 'B', value: '' },
        ],
        fillInTheBlanks: [{ value: '' }],
      },
      editData: {
        problemKind: 1,
        problemDifficult: '',
        setId: '',
        questionValue: '',
        problemAnswer: '',
        problemAnalysis: '',
      },
      classificationTree: [],
    };
  },
  methods: {
    removeChoose(index, targetArr) {
      if (targetArr === 'checkList') {
        const { label } = this.add[targetArr][index];
        const labelIndex = this.add.checkRes.indexOf(label);
        if (labelIndex !== -1) {
          this.add.checkRes.splice(labelIndex, 1);
        }
      }
      this.add[targetArr].splice(index, 1);
      for (let i = index; i < this.add[targetArr].length; i += 1) {
        this.add[targetArr][i].label = this.radioLabel[i];
      }
      let result;
      if (targetArr === 'radioArr') {
        result = this.add.radioArr.some((res) => res.label === this.add.radioRes);
        if (result && this.add.radioArr[index].label === this.add.radioRes) this.add.radioRes = '';
        if (!result) this.add.radioRes = '';
      } else if (targetArr === 'checkList') {
        result = [];
        for (let i = 0; i < this.add.checkList.length; i += 1) {
          this.add.checkRes.forEach((item) => {
            if (this.add.checkList[i].label.includes(item)) {
              result.push(item);
            }
          });
        }
        this.add.checkRes = result;
      }
      if (this.add[targetArr].length < 10) {
        this.isAdd = true;
      }
    },
    addChoose(targetArr) {
      const { length } = this.add[targetArr];
      this.add[targetArr].push({ label: this.radioLabel[length], value: '' });
      if (this.add[targetArr].length === 10) {
        this.isAdd = false;
      }
    },
    answer(row) {
      this.dialogVisible = true;
      this.answerData = row;
    },
    getproblemList(data) {
      this.$store.dispatch('layout/loadingState', true);
      problem.list(data).then((res) => {
        this.problemList = res.records;
        this.total = res.total;
        this.$store.dispatch('layout/loadingState', false);
      });
    },
    getclassificationTree() {
      this.$store.dispatch('layout/loadingState', true);
      tree.questionsClassification('').then((res) => {
        this.classificationTree = res;
        this.$store.dispatch('layout/loadingState', false);
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          console.log('error submit!!');
          return;
        }
        const data = {
          problemMain: {
            setId: this.editData.setId,
            problemKind: this.editData.problemKind,
            problemDifficult: this.editData.problemDifficult,
            questionValue: this.editData.questionValue,
            answer1: '选A',
          },
          problemAnswer: ['A'],
          problemAnalysis: this.editData.problemAnalysis,
        };
        if (data.problemMain.problemKind === 1) {
          data.problemMain.answer1 = `选${this.add.radioRes}`;
          data.problemAnswer = [this.add.radioRes];
        } else if (data.problemMain.problemKind === 2) {
          for (let i = 0; i < this.add.checkRes.length; i += 1) {
            data.problemMain[`answer${i + 1}`] = `选${this.add.radioRes[i]}`;
          }
          data.problemAnswer = this.add.checkRes;
        } else if (data.problemMain.problemKind === 3) {
          for (let i = 0; i < this.add.fillInTheBlanks.length; i += 1) {
            data.problemMain[`answer${i + 1}`] = `选${this.add.fillInTheBlanks[i]}`;
          }
          console.log('填空');
        } else if (data.problemMain.problemKind === 4) {
          console.log('判断');
        } else if (data.problemMain.problemKind === 5) {
          console.log('不定向');
        } else if (data.problemMain.problemKind === 6) {
          console.log('主观');
        }
        // problem.questionsAdd(data).then((res) => {
        //   console.log(res);
        // });
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  components: {
    Search,
    Select,
    Cascader,
    Pagination,
  },
};
</script>

<style lang="less" scoped>
.training-statistical {
  .training-statistical-title {
    padding-left: 30px;
  }
  .operation {
    display: flex;
    align-items: center;
    padding-left: 20px;
    margin-bottom: 20px;
  }

  .el-input {
    width: 100px;
  }
  .select {
    margin-right: 0;
  }
}

.add-dep {
  padding-left: 50px;
  .el-input__inner {
    height: 30px;
  }
  .submit {
    margin-top: 20px;
    text-align: center;
    .el-form-item__content {
      margin-left: 0 !important;
    }
  }
}

.el-input--suffix .el-input__inner {
  width: 100%;
}

// 查看答案弹出框
.popover {
  .item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    span:nth-of-type(1) {
      color: #ccc;
    }
  }
  .popover-btn {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
}
</style>
