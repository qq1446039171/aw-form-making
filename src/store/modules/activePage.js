const activePage = {
  state: {
    // 1.敲了vuex的中间介质要使用的数据
    activeComponent: {}, // 模板数据
    componentsData: [], // 模板组件数据
    currentGoodsId: ''
  },
  mutations: {
    setActiveComponent: (state, newCom) => {
      state.activeComponent = newCom
    },
    setComponentsData: (state, newData) => {
      state.componentsData.push(newData)
    }
  },
  actions: {
    
    changeComponentsData(context, data) {
      //触发mutations里的setComponentsData函数
      context.commit('setComponentsData', data)
    }
  }
}

export default activePage
