<template>
  <el-dialog title="预览" :visible.sync="visible" :close-on-click-modal="false">
    <aw-form :data="json" ref="awForm"></aw-form>
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
      json: {}
    }
  },
  methods: {
    show(json) {
      this.visible = true
      this.json = json
    },
    save() {}
  }
}
</script>
<style scoped lang="scss"></style>
