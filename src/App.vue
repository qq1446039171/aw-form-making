<template>
  <div class="app">
    <!-- 左边部分 -->
    <div class="left-area" :style="scrollHeight">
      <Tool />
    </div>
    <!-- 中间部分 -->
    <div class="content-area" :style="scrollHeight">
      <div class="layout-header">
        <el-button type="primary" size="small" icon="el-icon-delete">清空</el-button>
        <el-button type="primary" size="small" icon="el-icon-view">预览</el-button>
        <el-button type="primary" size="small" icon="el-icon-tickets">生成JSON</el-button>
      </div>
      <!-- 循环显示页面面板 -->
      <div class="layout">
        <Content />
      </div>
    </div>
    <!-- 右边部分 -->
    <div class="right-area" :style="scrollHeight">
      <!-- <Edit /> -->
    </div>
  </div>
</template>

<script>
import Tool from '@/components/toolbar/index'
import Content from '@/components/panel/index'
import Edit from '@/components/edit/index'
export default {
  name: 'App',
  components: { Tool, Content, Edit },

  data() {
    return {
      fullHeight: document.documentElement.clientHeight
    }
  },
  computed: {
    scrollHeight() {
      return {
        height: parseInt(this.fullHeight) + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './App.scss';
</style>
