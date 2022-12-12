<template>
  <el-dialog title="代码" :visible.sync="visible" width="900px" :close-on-click-modal="false" center>
    <div class="json">
      <pre>{{ data }}</pre>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" v-copy="data">复 制 代 码</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      visible: false,
      data: null
    }
  },
  methods: {
    show(data) {
      this.visible = true
      this.data = data
    },
    copy() {}
  }
}
</script>
<style scoped lang="scss">
.json {
  max-height: 500px;
  overflow-y: auto;
}
</style>
