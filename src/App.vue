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
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
      <!-- 循环显示页面面板 -->
      <div class="layout">
        <!-- 循环显示页面面板 -->
        <draggable
          class="dragArea list-group"
          :list="componentsData"
          @change="pageChange"
          :group="{ name: 'pageEdit', pull: true, put: true }"
          animation="300"
        >
          <transition-group style="min-height: 200px; display: block">
            <div
              v-for="(item, index) in componentsData"
              :key="index"
              @click="checkedComponent(item, index)"
              :class="['widget']"
            >
              <component :is="ContentPanel.get(item.type)" :information="item"></component>
              <!--  边框与操作按钮 -->
              <div class="widget-mask" v-if="index === activeIndex">
                <div id="widget" class="widget-handle">
                  <div class="widget-handle-item" @click="delComponent(item, index)">
                    <i class="le-icon le-icon-trash"></i>
                  </div>
                  <div class="widget-handle-item" @click="copyComponent(item)">
                    <i class="le-icon le-icon-copy"></i>
                  </div>
                </div>
              </div>
            </div>
          </transition-group>
        </draggable>
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
import { mapGetters, mapMutations } from 'vuex'
import ContentPanel from '@/components/panel/componentPanel'
import EditPanel from '@/components/edit/componentPanel'
import Draggable from 'vuedraggable'
import panels from './panels.js'
export default {
  name: 'App',
  components: { control, Draggable },

  data() {
    return {
      ContentPanel,
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
    ...mapGetters(['componentsData', 'activeComponent']),
    scrollHeight() {
      return {
        height: parseInt(this.fullHeight) + 'px'
      }
    }
  },
  methods: {
    ...mapMutations(['setActiveComponent']),
    addBasicBlock(item) {
      item = {
        ...item,
        index: this.componentsData.length + 1
      }
      let componentsItem = JSON.stringify(item)
      this.$store.dispatch('changeComponentsData', JSON.parse(componentsItem))
    },
    checkedComponent(item, index) {
      this.activeIndex = index
      item.index = index
      this.setActiveComponent(item)
    },
    delComponent(item, index) {
      this.$confirm('确定删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.componentsData.splice(index, 1)
        })
        .catch(() => {})
    },

    copyComponent(item) {
      item = {
        ...item,
        index: this.$store.state.activePage.componentsData.length + 1
      }
      let componentsItem = JSON.stringify(item)
      this.$store.dispatch('changeComponentsData', JSON.parse(componentsItem))
    },
    cloneItem(item) {
      return JSON.parse(JSON.stringify(item))
    },
    pageChange(e) {
      console.log(e)
      if (e.moved) {
        this.activeIndex = e.moved.newIndex
        e.moved.element.index = e.moved.newIndex
        console.log(e.moved.element)
        this.setActiveComponent(e.moved.element)
      }
      if (e.added) {
        this.activeIndex = e.added.newIndex
        e.added.element.index = e.added.newIndex
        this.setActiveComponent(e.added.element)
      }
    }
  }
}
</script>

<style lang="scss">
@import './App.scss';
</style>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';
</style>
