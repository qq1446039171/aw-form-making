<template>
  <div class="control">
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
.control {
  padding: 4px 32px;
  .control-content__title {
    position: relative;
    font-weight: 400;
    font-size: 20px;
    padding-left: 16px;
    margin: 10px 0;

    &:before {
      position: absolute;
      content: '';
      left: 0;
      top: 5px;
      border-left: 4px solid #623ceb;
      height: 20px;
    }
  }
}
</style>
