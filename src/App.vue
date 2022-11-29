<template>
  <div id="app">
    <!-- 左边部分 -->
    <div class="left-area" :style="scrollHeight">
      <div class="comp-buttons">
        <control title="按钮组">
          <div style="width: 270px" :style="scrollHeight">
            <!-- 左侧功能栏-开始 -->
            <el-collapse :value="['basics', 'advanced', 'sales', 'other', 'marketing']">
              <el-collapse-item :name="index" v-for="(mounted, index) in panels" :key="index">
                <template slot="title">
                  <i class="le-icon le-icon-arrow"></i>
                  <span>{{ mounted.title }}</span>
                </template>
                <ul class="fm-collapse-tool">
                  <draggable
                    class="dragArea list-group"
                    :list="mounted.children"
                    :clone="cloneItem"
                    :group="{ name: 'pageEdit', pull: 'clone', put: true }"
                    :options="{ sort: false }"
                  >
                    <template v-for="(item, index) in mounted.children">
                      <li class="widget left-widget" :key="index" data-type="module">
                        <img class="widget-icon" :src="item.icon" />
                        <span class="widget-title">{{ item.title }}</span>
                        <div class="covermask" :key="index">
                          <span>释放鼠标将组建添加到此处</span>
                        </div>
                      </li>
                    </template>
                  </draggable>
                </ul>
              </el-collapse-item>
            </el-collapse>
            <!-- 左侧功能栏-结束 -->
          </div>
        </control>
      </div>
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
      <component :is="EditPanel.get(activeComponent.type)" :information="activeComponent"></component>
    </div>
  </div>
</template>

<script>
import control from '@/components/control-panel.vue'
import { mapGetters } from 'vuex'
import Content from '@/components/panel/Form'
import EditPanel from '@/components/edit/componentPanel'
import Draggable from 'vuedraggable'
import panels from './panels.js'
export default {
  name: 'App',
  components: { control, Draggable, Content },

  data() {
    return {
      EditPanel,
      //  notice 默认图片
      panels,
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
      activeIndex: -1 // 当前高亮的组件
    }
  },
  computed: {
    ...mapGetters(['activeComponent']),
    scrollHeight() {
      return {
        height: parseInt(this.fullHeight) + 'px'
      }
    }
  },
  methods: {
    cloneItem(item) {
      return JSON.parse(JSON.stringify(item))
    }
  }
}
</script>

<style lang="scss">
@import './App.scss';
</style>
