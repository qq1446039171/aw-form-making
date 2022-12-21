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
    funcTemplate += `
            ${funcList[i].func} (resolve) {
              // label: ${funcList[i].label} || value: ${funcList[i].value}
              // Call callback function once get the data from remote server
              // resolve(data)
              const options = [
                { label: 'remote1',value: '1' },
                { label: 'remote2',value: '2' },
                { label: 'remote3',value: '3' }
              ]
              resolve(options)
            },
    `
  }
  for (let i = 0; i < blankList.length; i++) {
    blankTemplate += `
        <template slot="${blankList[i].name}" slot-scope="scope">
          <!-- ${blankList[i].label} -->
          <!-- use v-model="scope.model.${blankList[i].name}" to bind data -->
        </template>
    `
  }

  return `<template>
  <div>
    <aw-form :data="formData" :remote="remoteList" :value="defaultData" ref="awForm">
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
        this.$refs.awForm.getData().then(data => {
         
        }).catch(e => {
          
        })
      }
    }
  }
</script>
`
}
