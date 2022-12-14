<template>
  <el-form
    :size="componentsData.config.size"
    label-suffix=":"
    :label-position="componentsData.config.labelPosition"
    :label-width="componentsData.config.labelWidth + 'px'"
  >
    <draggable
      class="panel"
      :list="componentsData.list"
      @change="pageChange"
      :group="{ name: 'pageEdit', pull: true, put: true }"
      animation="300"
    >
      <transition-group style="min-height: 200px; display: block">
        <div
          v-for="(item, index) in componentsData.list"
          :key="index"
          @click="checkedComponent(item, index)"
          class="widget"
        >
          <!--  网格布局的时候 -->
          <template v-if="item.type == 'grid'">
            <el-row
              :key="item.key"
              type="flex"
              :gutter="item.options.gutter ? item.options.gutter : 0"
              :justify="item.options.justify"
              :align="item.options.align"
              @click="checkedComponent(item, index)"
              class="grid-draggable"
            >
              <el-col v-for="(col, colIndex) in item.columns" :key="colIndex" :span="col.span">
                <draggable
                  class="panel"
                  :list="col.list"
                  @change="gridPageChange"
                  :group="{ name: 'pageEdit', pull: true, put: true }"
                  animation="200"
                  ghostClass="selectClass"
                  chosenClass="selectClass"
                >
                  <transition-group style="min-height: 50px; display: block">
                    <template v-for="(colItem, index) in col.list">
                      <Form
                        ref="Form"
                        :key="index"
                        :data="colItem"
                        :label-width="
                          colItem.labelWidth ? colItem.labelWidth + 'px' : componentsData.config.labelWidth + 'px'
                        "
                      ></Form>
                    </template>
                  </transition-group>
                </draggable>
              </el-col>
            </el-row>
          </template>

          <template v-else>
            <Form
              ref="Form"
              :data="item"
              :label-width="item.labelWidth ? item.labelWidth + 'px' : componentsData.config.labelWidth + 'px'"
            ></Form>
          </template>
          <!--  边框与操作按钮 -->
          <div class="widget-mask" v-if="index === activeIndex">
            <div class="widget-handle">
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
  </el-form>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Draggable from 'vuedraggable'
import Form from './form-item.vue'

export default {
  data() {
    return {
      activeIndex: -1 // 当前高亮的组件
    }
  },
  components: {
    Draggable,
    Form
  },
  computed: {
    ...mapGetters(['componentsData', 'activeComponent']),
    scrollHeight() {
      return {
        height: parseInt(this.fullHeight) + 'px'
      }
    },
    formJson() {
      return this.componentsData.list
    }
  },
  methods: {
    ...mapMutations(['setActiveComponent']),
    // ...mapActions(['changeComponentsData']),
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
          this.componentsData.list.splice(index, 1)
        })
        .catch(() => {})
    },
    copyComponent(item) {
      item = {
        ...item,
        index: this.$store.state.activePage.componentsData.list.length + 1
      }
      let componentsItem = JSON.stringify(item)
      this.$store.dispatch('changeComponentsData', JSON.parse(componentsItem))
    },
    pageChange(e) {
      if (e.moved) {
        this.activeIndex = e.moved.newIndex
        e.moved.element.index = e.moved.newIndex
        console.log(e.moved.element)
        this.setActiveComponent(e.moved.element)
      }
      if (e.added) {
        const key = Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
        e.added.element.model == key
        this.activeIndex = e.added.newIndex
        e.added.element.index = e.added.newIndex
        // 绑定键值
        this.$set(e.added.element, 'model', e.added.element.type + '_' + key)
        // //  添加一个远程的方法
        // if (e.added.element.type === 'radio') {
        //   this.$set(e.added.element.options, 'remoteFunc', 'func_' + key)
        // }
        this.setActiveComponent(e.added.element)
      }
    },
    gridPageChange(e) {
      console.log(`移入Grid中的数据`)
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.selectClass {
  border: 1px dashed #66b1ff !important;
}
.panel :before {
  box-sizing: border-box;
}
.grid-draggable {
  background: rgba(98, 60, 235, 0.05);
}
// 在移入中间容器后 这些样式应该被隐藏 跟 显示
.panel {
  position: relative;
  :deep(.left-widget) {
    .widget-icon {
      display: none;
    }
    .widget-title {
      display: none;
    }
    // 释放鼠标将组建添加到此处 在此组件中展示
    .covermask {
      min-height: 40px;
      border: 1px dashed #623ceb;
      background: rgba(98, 60, 235, 0.05);
      transition: 0.3s linear;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      align-items: center;
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
  }
}
.widget {
  position: relative;
  .el-form-item {
    padding-bottom: 18px;
    margin: 2px !important;
  }
  //  高亮的框框 跟操作按钮
  .widget-mask {
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    left: -2px;
    top: -2px;
    z-index: 100;
    border: 2px solid #623ceb;
    // #409ef
    box-shadow: 0 0 20px 0 rgba(98, 60, 235, 0.2);

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
</style>
