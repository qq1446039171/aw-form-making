<template>
  <el-dialog title="预览" :visible.sync="visible" :close-on-click-modal="false">
    <aw-form :data="json" @on-change="handleDataChange" ref="awForm"></aw-form>

    <div slot="footer" class="dialog-footer">
      <el-button icon="el-icon-circle-close" @click="visible = false"> 取消</el-button>
      <el-button icon="el-icon-circle-check" type="primary" @click="save"> 确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      visible: false,
      json: {}
    }
  },
  methods: {
    show(json) {
      this.visible = true
      this.json = json
    },
    handleDataChange(field, value, data) {
      console.log(field, value, data)
    },
    save() {
      this.$refs.awForm
        .getData()
        .then((data) => {
          console.log('提交的数据')
          console.log(data)
        })
        .catch((e) => {})
    }
  }
}
</script>
<style scoped lang="scss"></style>
