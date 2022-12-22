<template>
  <div class="app">
    <!-- 左边部分 -->
    <div class="left-area" :style="scrollHeight">
      <Tool />
    </div>
    <!-- 中间部分 -->
    <div class="content-area" :style="scrollHeight">
      <div class="layout-header">
        <el-button type="primary" size="small" icon="el-icon-delete" @click="clear">清空</el-button>
        <el-button type="primary" size="small" icon="el-icon-view" @click="showDialogPreview">预览</el-button>
        <el-button type="primary" size="small" icon="el-icon-tickets" @click="showDialogJson">生成JSON</el-button>
        <el-button type="primary" size="small" icon="el-icon-tickets" @click="showDialogCode">生成代码</el-button>
      </div>
      <!-- 循环显示页面面板 -->
      <div class="layout">
        <Content />
      </div>
    </div>
    <!-- 右边部分 -->
    <div class="right-area" :style="scrollHeight">
      <el-tabs v-model="activeName" type="border-card" stretch>
        <el-tab-pane label="字段属性" name="list">
          <Edit />
        </el-tab-pane>
        <el-tab-pane label="表单属性" name="config">配置管理</el-tab-pane>
      </el-tabs>
    </div>

    <DialogJson ref="refDialogJson" />
    <DialogPreview ref="refDialogPreview" />
    <DialogCode ref="refDialogCode" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Tool from '@/components/toolbar/index'
import Content from '@/components/panel/index'
import Edit from '@/components/edit/index'
import DialogJson from '@/components/Dialog/dialog-json.vue'
import DialogPreview from '@/components/Dialog/dialog-preview.vue'
import DialogCode from '@/components/Dialog/dialog-code.vue'
import generateCode from '@/utils/generateCode'
export default {
  name: 'App',
  components: { Tool, Content, Edit, DialogJson, DialogPreview, DialogCode },

  data() {
    return {
      fullHeight: document.documentElement.clientHeight,
      activeName: 'list'
    }
  },
  computed: {
    ...mapGetters(['componentsData']),
    scrollHeight() {
      return {
        height: parseInt(this.fullHeight) + 'px'
      }
    }
  },
  methods: {
    ...mapMutations(['clearComponentsData']),
    clear() {
      this.clearComponentsData()
    },
    showDialogJson() {
      this.$refs.refDialogJson.show(this.componentsData)
    },
    showDialogPreview() {
      // let data = generateCode(JSON.stringify(this.componentsData))
      this.$refs.refDialogPreview.show(this.componentsData)
    },
    showDialogCode() {
      let data = generateCode(JSON.stringify(this.componentsData))
      this.$refs.refDialogCode.show(data)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './App.scss';
.right-area :deep(.el-tabs--border-card) {
  box-shadow: none;
  border: none;
}
.right-area :deep(.el-tabs__content) {
 padding: 0px;
}
.right-area :deep(.el-tabs__item) {
 height: 45px;
 line-height: 45px;
}
</style>
