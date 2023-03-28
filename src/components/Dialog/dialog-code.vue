<template>
  <el-dialog title="代码" :visible.sync="visible" width="960px" :close-on-click-modal="false" center>
    <div class="json">
      <pre class="pre"> <div class="code">{{ data }}</div></pre>
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
      this.data = data
      this.visible = true
    },
    copy() {}
  }
}
</script>
<style scoped lang="scss">
.json {
  max-height: 500px;
  overflow-y: auto;
  border-radius: 3px;
  background: #292d3e;
  .pre {
    line-height: 28px;
    // color: #3182bd;
    color: bisque;
    .code {
      line-height: 28px;
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New';
    }
  }
}
</style>
