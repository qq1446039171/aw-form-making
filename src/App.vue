<template>
  <div id="app">
    <div class="left-area">
      <div class="but-box">
        <el-button
          v-for="(item, index) in baseButs"
          :key="index"
          class="renovation-but"
          style="border-radius: 2px"
          @click="addBasicBlock(item)"
          plain
          >{{ item.name }}</el-button
        >
      </div>
    </div>
    <div class="content-area">
      <!-- 循环显示页面面板 -->
      <div
        v-for="(item, index) in componentsData"
        :key="index"
        @click="checkedComponent(item)"
        :class="['select-box', 'box-component', 'list-group-item']"
      >
        <component :is="Panel.get(item.type)" :information="item"></component>
      </div>
    </div>
    <div class="right-area">
      <component :is="EditPanel.get(activeComponent.type)" :information="activeComponent"></component>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Panel from './components/panel/componentPanel'
import EditPanel from './components/edit/activeEditComponentPanel'
export default {
  name: 'App',
  components: {},

  data() {
    return {
      Panel,
      EditPanel,
      //  notice 默认图片
      baseButs: [
        {
          name: '搜索框',
          type: 'searchInput',
          data: {
            backgroundColor: '#f1f1f2',
            inputBackgroundColor: '#ffffff',
            wordColor: '#999999',
            iconColor: '#b4b4b4',
            tipsWord: '请输入关键字进行搜索',
            inputStyleRadio: '0',
            wordAlignRadio: '0',
            topBottomPx: 4,
            leftRightPx: 4
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
    }
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: space-between;
  margin: 15px;
  .left-area {
    width: 300px;
    .but-box {
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
}

.right-area {
}
</style>
