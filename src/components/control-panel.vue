<template>
  <div class="control attribute">
    <h3 class="control-content__title">{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    title: {
      type: String,
      default: '搜索框设置'
    }
  }
}
</script>

<style lang="scss" scoped>
@import './control.scss';
</style>
