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
          <Form
            ref="Form"
            :data="item"
            :label-width="item.labelWidth ? item.labelWidth + 'px' : componentsData.config.labelWidth + 'px'"
          ></Form>
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
import Form from './FormItem.vue'

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

<style lang="scss" scoped>
.panel :before {
  box-sizing: border-box;
}
// 在移入中间容器后 这些样式应该被隐藏 跟 显示
.panel {
  ::v-deep .left-widget {
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
</style>
