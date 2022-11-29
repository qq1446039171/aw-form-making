<template>
  <!-- <el-form
    :size="data.config.size"
    label-suffix=":"
    :label-position="data.config.labelPosition"
    :label-width="data.config.labelWidth + 'px'"
  > -->
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
        <!-- <widget-form v-if="!resetJson"  ref="widgetForm" :data="widgetForm" :select.sync="widgetFormSelect"></widget-form> -->
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
  <!-- </el-form> -->
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import ContentPanel from '@/components/panel/componentPanel'
import Draggable from 'vuedraggable'

export default {
  data() {
    return {
      ContentPanel,
      activeIndex: -1 // 当前高亮的组件
    }
  },
  components: {
    Draggable
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
// .widget {
//   position: relative;
//   //  高亮的框框 跟操作按钮
//   .widget-mask {
//     position: absolute;
//     width: calc(100% + 4px);
//     height: calc(100% + 4px);
//     left: -2px;
//     top: -2px;
//     z-index: 100;
//     border: 2px solid #623ceb;
//     // opacity: 0;
//     // display: none;
//     box-shadow: 0 0 20px 0 rgb(98 60 235 / 20%);

//     .widget-handle {
//       position: absolute;
//       right: -43px;
//       top: 0;
//       width: 36px;
//       // height: 143px;
//       height: 77px;
//       background: #623ceb;
//       border-radius: 4px;
//       .widget-handle-item {
//         width: 36px;
//         height: 35.75px;
//         line-height: 35.75px;
//         text-align: center;
//         i {
//           font-size: 20px;
//           color: #fff;
//         }
//       }
//     }
//   }
// }
</style>
