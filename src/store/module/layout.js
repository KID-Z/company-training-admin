/*
 * @Author: your name
 * @Date: 2021-07-06 13:50:13
 * @LastEditTime: 2021-07-27 10:53:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/src/store/module/a.js
 */
export default {
  namespaced: true,
  state: {
    // 切换左侧菜单收起/展开
    collapsed: true,
    // 存储菜单的路由
    menuRoutes: [],
    // 当前选中的tab索引
    tabIndex: 1,
    // 新增tab自动增长的name
    addIndex: 1,
    // tab 数组
    editableTabs: [{
      title: '欢迎使用',
      name: '1',
      path: 'Home',
    }],
    // 弹出层
    drawer: false,
    loading: false,
  },
  getters: {
    filterTab(state) {
      return (label) => state.editableTabs.find((item) => item.title === label);
    },
  },
  mutations: {
    loadingState(state, boole) {
      state.loading = boole;
    },
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setMenuRoutes(state, routes) {
      state.menuRoutes = routes;
    },
    addTab(state, tabObj) {
      const {
        title,
        path,
      } = tabObj;
      const isTrue = state.editableTabs.some((item) => item.path === path);
      if (isTrue) return;
      const index = state.addIndex + 1;
      state.addIndex = index;
      state.editableTabs.push({
        title,
        name: `${index}`,
        path,
      });
      state.tabIndex = `${index}`;
    },
    removeTab(state, {
      removeIndex,
      router,
    }) {
      if (removeIndex === '1') return;
      const tabs = state.editableTabs;
      let activeName = state.tabIndex;
      let path = '';
      if (activeName === removeIndex) {
        tabs.forEach((tab, index) => {
          if (tab.name === removeIndex) {
            const nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
              path = nextTab.path;
            }
          }
        });
      }
      state.tabIndex = activeName;
      router.push({
        name: path,
      });
      state.editableTabs = tabs.filter((tab) => tab.name !== removeIndex);
    },
    setTabIndex(state, index) {
      state.tabIndex = index;
    },
    changeDrawer(state, boole) {
      state.drawer = boole;
    },
  },
  actions: {
    // 切换左侧菜单收起/展开
    changeCollapsed({
      commit,
    }) {
      commit('changeCollapsed');
    },
    setMenuRoutes({
      commit,
    }, routes) {
      commit('setMenuRoutes', routes);
    },
    setToken({
      commit,
    }, token) {
      commit('setToken', token);
    },
    changeDrawer({
      commit,
    }, boole) {
      commit('changeDrawer', boole);
    },
    loadingState({
      commit,
    }, boole) {
      commit('loadingState', boole);
    },
  },
};
