<template>
  <el-dialog title="JSON数据" :visible.sync="visible" width="900px" :close-on-click-modal="false">
    <div class="json">
      <json-viewer :value="data" :expand-depth="10" copyable boxed sort></json-viewer>
    </div>
   
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
    save() {}
  }
}
</script>
<style scoped lang="scss">
.json {
  max-height: 500px;
  overflow-y: auto;
}
</style>
