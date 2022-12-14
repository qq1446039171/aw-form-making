function findRemoteFunc(list, funcList, blankList) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].type == 'grid') {
      list[i].columns.forEach((item) => {
        findRemoteFunc(item.list, funcList, blankList)
      })
    } else {
      if (list[i].type == 'blank') {
        if (list[i].model) {
          blankList.push({
            name: list[i].model,
            label: list[i].name
          })
        }
      } else {
        if (list[i].options.remote && list[i].options.remoteFunc) {
          console.log(list[i].options)
          debugger
          funcList.push({
            func: list[i].options.remoteFunc,
            label: list[i].options.props.label,
            value: list[i].options.props.value,
            model: list[i].model
          })
        }
      }
    }
  }
}

export default function generateCode(data) {
  const funcList = []
  const blankList = []
  findRemoteFunc(JSON.parse(data).list, funcList, blankList)
  let funcTemplate = ''
  let blankTemplate = ''
  for (let i = 0; i < funcList.length; i++) {
    console.log(funcList[i])
    debugger
    funcTemplate += `
            ${funcList[i].func} (resolve) {
              // label: ${funcList[i].label} || value: ${funcList[i].value}
              // Call callback function once get the data from remote server
              // resolve(data)
            },
    `
  }

  return `<template>
  <div>
    <aw-form :data="formData" :remote="remoteList" :value="defaultData" ref="generateForm">
      ${blankTemplate}
    </aw-form>
    <div>
      <el-button icon="el-icon-circle-close"> 取消</el-button>
      <el-button icon="el-icon-circle-check" type="primary"  @click="save"> 确认</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        formData: ${data},
        defaultData: {},
        remoteList: {
          ${funcTemplate}
        }
      }
    },
    methods: {
      save () {
        this.$refs.generateForm.getData().then(data => {
         
        }).catch(e => {
          
        })
      }
    }
  }
</script>
`
}
