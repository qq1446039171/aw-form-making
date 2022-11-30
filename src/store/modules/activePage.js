const activePage = {
  state: {
    activeComponent: {}, // 当前选中的模板数据
    componentsData: {
      list: [
        {
          type: 'input',
          options: {
            width: '100%',
            defaultValue: '',
            required: true,
            dataType: 'string',
            placeholder: '',
            disabled: false,
            maxlength: -1,
            showWordLimit: false,
          },
          name: '单行文本',
          model: '',
          rules: [
            {
              type: 'string',
              message: '单行文本格式不正确'
            },
            {
              required: true,
              message: '单行文本必须填写'
            }
          ]
        }
      ],
      config: { labelWidth: 80, labelPosition: 'right', size: 'small', customClass: '' }
    }
  },
  mutations: {
    setActiveComponent: (state, newCom) => {
      state.activeComponent = newCom
    },
    setComponentsData: (state, newData) => {
      state.componentsData.list.push(newData)
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
