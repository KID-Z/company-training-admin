<!--
 * @Author: your name
 * @Date: 2021-06-30 17:45:34
 * @LastEditTime: 2021-07-16 09:49:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/views/layout/components/Tabs.vue
-->
<template>
  <div>
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      closable
      @tab-remove="removeTab"
      @tab-click="tabClick"
    >
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  watch: {
    tabIndex: {
      handler(newIndex) {
        this.editableTabsValue = newIndex;
        this.index = newIndex;
      },
      immediate: true,
    },
  },
  computed: {
    ...mapState('layout', ['editableTabs', 'tabIndex']),
  },
  data() {
    return {
      editableTabsValue: '1',
      // tabIndex: 2,
      index: '1',
    };
  },
  methods: {
    tabClick(tab) {
      if (tab.name === this.index) return;
      const res = this.$store.getters['layout/filterTab'](tab.label);
      this.$router.push({ name: res.path });
      this.index = tab.name;
    },
    removeTab(index) {
      this.$store.commit('layout/removeTab', { removeIndex: index, router: this.$router });
    },
  },
};
</script>
