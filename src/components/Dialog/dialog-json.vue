<template>
  <el-dialog title="JSON数据" :visible.sync="visible" :close-on-click-modal="false">
    {{ data }}
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取 消</el-button>
      <el-button type="primary" @click="save">保 存</el-button>
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
    }
  }
}
</script>
<style scoped lang="scss"></style>
