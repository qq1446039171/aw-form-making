<template>
  <div class="Item">
    <div class="control-item-title">{{ title }}</div>
    <slot></slot>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss" scoped>
.Item {
  margin: 15px 0;
  .el-divider--horizontal {
    margin: 12px 0;
  }
}
.control-item-title {
  line-height: 35px;
  margin-bottom: 10px;
  font-weight: 400;
  color: #333;
  opacity: 0.85;
  font-size: 14px;
}
</style>
