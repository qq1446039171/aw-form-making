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
    <div class="content-area">
      <!-- 循环显示页面面板 -->
      <div class="layout-phone">
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
#app {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 0;
  background: #f3f5f7;
  padding: 0;
}
.left-area {
  width: 320px;
  background: #fff;
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
  // 在移入中间容器后 这些样式应该被隐藏
  .left-widget {
    .widget-icon {
      display: none;
    }
    .widget-title {
      display: none;
    }
  }
  .covermask {
    min-height: 40px;
    border: 1px dashed #623ceb;
    background: rgba(98, 60, 235, 0.05);
    -webkit-transition: 0.3s linear;
    transition: 0.3s linear;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 14px;
    color: #cccccc;
    margin-left: -1px;

    span {
      font-size: 14px;
      font-weight: 400;
      color: #623ceb;
      line-height: 12px;
    }

    i {
      font-size: 18px;
    }
  }
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
  background: #fff;
  overflow-x: hidden;
}

*,
:after,
:before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
ol,
li {
  list-style: none;
  margin: 0px;
  padding: 0px;
}

.le-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

<style lang="scss">
.layout-tool {
  width: 320px;
  background: #ffffff;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
.fm-collapse-tool {
  list-style-type: none;
  padding: 0;
  margin: 0;
  .covermask {
    display: none;
  }
  li {
    position: relative;
    float: left;
    width: 87px;
    height: 92px;
    background: #ffffff;
    margin-bottom: 8px;
    z-index: 1px;
    //border: 1px solid #EBEEF5;
    text-align: center;
    cursor: move;

    .le-icon {
      font-size: 32px;
      color: rgba(98, 60, 235, 1);
    }

    .widget-icon {
      width: 32px;
      height: 32px;
      margin-top: 15px;
    }

    span {
      display: block;
      width: 100%;
      text-align: center;
      color: rgba(0, 0, 0, 0.65);
      font-size: 12px;
    }

    &:hover {
      box-shadow: 0px 0px 10px 0px rgba(98, 60, 235, 0.1);
      border-radius: 8px;
      z-index: 10;
    }
  }
}
::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background: #cfcbcb;
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: 10px;
  background: #ededed;
}
</style>
