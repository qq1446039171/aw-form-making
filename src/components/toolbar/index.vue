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

<style lang="scss"></style>
