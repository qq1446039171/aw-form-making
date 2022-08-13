<template>
  <div
    class="widget-content"
    :style="[
      {
        backgroundColor: information.data.backgroundColor
      },
      {
        height: information.data.height +'px'
      }
    ]"
  ></div>
</template>

<script>
export default {
  props: {
    // 获取传递过来的数据
    information: { Object, default: {} }
  }
}
</script>

<style lang="scss" scoped>
.widget-content {
}
</style>
