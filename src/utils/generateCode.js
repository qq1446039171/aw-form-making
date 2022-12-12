function findRemoteFunc(list, funcList, blankList) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].options.remote && list[i].options.remoteFunc) {
      funcList.push({
        func: list[i].options.remoteFunc,
        label: list[i].label,
        model: list[i].model
      })
    }
  }
}

export default function generateCode(data) {
  const funcList = []
  const blankList = []
  findRemoteFunc(JSON.parse(data).list, funcList)
  let funcTemplate = ''
  let blankTemplate = ''
  return `<template>
  <div>
    <aw-form :data="formData" :remote="remoteList" :value="defaultData" ref="generateForm">
      ${blankTemplate}
    </aw-form>
    <el-button type="primary" @click="save">提交</el-button>
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
          // data check success
          // data - form data
        }).catch(e => {
          // data check failed
        })
      }
    }
  }
</script>
`
}
