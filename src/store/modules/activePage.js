const activePage = {
  state: {
    activeComponent: {}, // 当前选中的模板数据
    componentsData: {
      list: [],
      config: { labelWidth: 100, labelPosition: 'right', size: 'small', customClass: '' }
    },
    
  },
  mutations: {
    setActiveComponent: (state, newCom) => {
      state.activeComponent = newCom
    },
    setComponentsData: (state, newData) => {
      state.componentsData.list.push(newData)
    },
    clearComponentsData:(state) => {
      state.componentsData.list = []
    },
  },
  actions: {
    changeComponentsData(context, data) {
      //触发mutations里的setComponentsData函数
      context.commit('setComponentsData', data)
    }
  }
}

export default activePage
