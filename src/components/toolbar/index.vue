<template>
  <div class="comp-buttons">
    <control title="按钮组">
      <div style="width: 270px">
        <!-- 左侧功能栏-开始 -->
        <el-collapse :value="['basics', 'advanced', 'sales', 'other', 'marketing']">
          <el-collapse-item :name="index" v-for="(mounted, index) in Panels" :key="index">
            <template slot="title">
              <i class="le-icon le-icon-arrow"></i>
              <span>{{ mounted.title }}</span>
            </template>
            <ul class="fm-collapse-tool">
              <draggable
                :list="mounted.children"
                :clone="cloneItem"
                :group="{ name: 'pageEdit', pull: 'clone', put: true }"
                :options="{ sort: false }"
              >
                <template v-for="(item, index) in mounted.children">
                  <li class="left-widget" :key="index" data-type="module">
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
      </div>
    </control>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import Panels from './Panels'
import control from '@/components/control-panel.vue'
export default {
  components: {
    Draggable,
    control
  },
  data() {
    return {
      Panels
    }
  },
  methods: {
    cloneItem(item) {
      return JSON.parse(JSON.stringify(item))
    }
  }
}
</script>

<style lang="scss" scoped>
.le-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.comp-buttons {
  display: flex;
  flex-wrap: wrap;
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
</style>
