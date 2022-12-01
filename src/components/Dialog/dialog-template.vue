<template>
  <el-dialog title="​新增随访" :visible.sync="visible" :close-on-click-modal="false">
    awasdasd
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
        list: []
      }
    },
    methods: {
      show(list) {
        this.visible = true
        this.list = list
      }
    }
  }
</script>
<style scoped lang="scss"></style>
