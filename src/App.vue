<template>
  <div id="app">
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
      <Edit />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Tool from '@/components/toolbar/index'
import Content from '@/components/panel/index'
import Edit from '@/components/edit/index'
// import Panels from './Panels'
export default {
  name: 'App',
  components: { Tool, Content, Edit },

  data() {
    return {
      compButtons: [
        {
          name: '搜索框',
          type: 'searchInput',
          data: {
            backgroundColor: '#f1f1f2', // 搜索区域背景颜色
            inputBackgroundColor: '#ffffff', // 搜索框背景颜色
            wordColor: '#999999', // 搜索文字颜色
            iconColor: '#b4b4b4', // 搜索图标颜色
            tipsWord: '请输入关键字进行搜索',
            inputStyleRadio: '0', // 搜索框类型
            wordAlignRadio: '0', // 文字对齐方式
            topBottomPx: 5, // 上下编剧
            leftRightPx: 5 // 左右边距
          }
        }
      ],
      fullHeight: document.documentElement.clientHeight,
    }
  },
  computed: {
    ...mapGetters(['activeComponent']),
    scrollHeight() {
      return {
        height: parseInt(this.fullHeight) + 'px'
      }
    }
  }
}
</script>

<style lang="scss">
@import './App.scss';
</style>
