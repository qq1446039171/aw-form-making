<template>
  <div id="app">
    <!-- 左边部分 -->
    <div class="left-area">
      <div class="comp-buttons">
        <control title="按钮组">
          <el-button
            v-for="(item, index) in compButtons"
            :key="index"
            class="renovation-but"
            style="border-radius: 2px"
            @click="addBasicBlock(item)"
            plain
            >{{ item.name }}</el-button
          >
        </control>
      </div>
    </div>
    <!-- 中间部分 -->
    <div class="content-area">
      <!-- 循环显示页面面板 -->
      <div class="layout-phone">
        <!-- 循环显示页面面板 -->
        <draggable v-model="$store.state.activePage.componentsData">
          <div v-for="(item, index) in componentsData" :key="index" @click="checkedComponent(item)" :class="['widget']">
            <component :is="Panel.get(item.type)" :information="item"></component>
            <div class="widget-mask" v-if="item.index === activeComponent.index">
              <div id="widget" class="widget-handle">
                <div class="widget-handle-item" @click="delComponent(item, index)">
                  <i class="le-icon le-icon-trash"></i>
                </div>
                <div class="widget-handle-item" @click="copyComponent(item)">
                  <i class="le-icon le-icon-copy"></i>
                </div>
                <!-- <div class="widget-handle-item">
              <i class="le-icon le-icon-arrow-top"></i>
            </div>
            <div class="widget-handle-item">
              <i class="le-icon le-icon-arrow-down"></i>
            </div> -->
              </div>
            </div>
          </div>
        </draggable>
      </div>
    </div>
    <!-- 右边部分 -->
    <div class="right-area">
      <component :is="EditPanel.get(activeComponent.type)" :information="activeComponent"></component>
    </div>
  </div>
</template>

<script>
import control from '@/components/control-panel.vue'
import { mapGetters, mapMutations } from 'vuex'
import Panel from './components/panel/componentPanel'
import EditPanel from './components/edit/activeEditComponentPanel'
import Draggable from 'vuedraggable'
export default {
  name: 'App',
  components: { control, Draggable },

  data() {
    return {
      Panel,
      EditPanel,
      //  notice 默认图片
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
      ]
    }
  },
  computed: {
    ...mapGetters(['componentsData', 'activeComponent'])
  },
  methods: {
    ...mapMutations(['setActiveComponent']),
    addBasicBlock(item) {
      item = {
        ...item,
        index: this.componentsData.length + 1
      }
      let componentsItem = JSON.stringify(item)
      // this.$store.state.activePage.componentsData.push(JSON.parse(componentsItem))
      this.$store.dispatch('changeComponentsData', JSON.parse(componentsItem))
    },
    checkedComponent(data) {
      this.setActiveComponent(data)
    },
    delComponent(item, index) {
      this.$confirm('确定删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // this.activeComponent = 0
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
      this.$store.state.activePage.componentsData.push(JSON.parse(componentsItem))
    }
  }
}
</script>

<style lang="scss">
#app {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 15px;
}
.left-area {
  width: 320px;
  background: #fff;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow-x: hidden;

  .comp-buttons {
    display: flex;
    flex-wrap: wrap;
    .renovation-but {
      width: 72px;
      height: 26px;
      padding: 0px;
      margin: 4px;
    }
  }
}
.content-area {
  flex: 1;
  overflow-x: hidden;
  .layout-phone {
    width: 375px;
    min-height: 765px;
    margin: 20px auto;
    background: #f5f5f5;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 5%);
  }
  .widget {
    position: relative;
    //  高亮的框框 跟操作按钮
    .widget-mask {
      position: absolute;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      left: -2px;
      top: -2px;
      z-index: 100;
      border: 2px solid #623ceb;
      // opacity: 0;
      // display: none;
      box-shadow: 0 0 20px 0 rgb(98 60 235 / 20%);

      .widget-handle {
        position: absolute;
        right: -43px;
        top: 0;
        width: 36px;
        // height: 143px;
        height: 77px;
        background: #623ceb;
        border-radius: 4px;
        .widget-handle-item {
          width: 36px;
          height: 35.75px;
          line-height: 35.75px;
          text-align: center;
          i {
            font-size: 20px;
            color: #fff;
          }
        }
      }
    }
  }
}

.right-area {
  width: 450px;
  height: 100%;
  overflow-x: hidden;
}

*,
:after,
:before {
  box-sizing: border-box;
}
.le-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
