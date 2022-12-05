<template>
  <control title="Grid 栅格布局">
    <el-form ref="formValidate" label-width="90px" label-position="left" size="mini">
      <el-row>
        <Item title="列配置项">
          <draggable
            tag="ul"
            :list="information.columns"
            ghostClass="selectClass"
            chosenClass="selectClass"
            :group="{ name: 'options' }"
            handle=".drag-item"
          >
            <li v-for="(item, index) in information.columns" :key="index">
              <img class="drag-item" src="http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/separate-icon.png" />

              <el-input
                placeholder="请输入数字"
                size="mini"
                style="width: 120px"
                type="number"
                v-model.number="item.span"
                :max="24"
              ></el-input>

              <el-button
                @click="handleOptionsRemove(index)"
                circle
                plain
                type="danger"
                size="mini"
                icon="el-icon-minus"
                style="padding: 4px; margin-left: 8px"
              ></el-button>
            </li>
          </draggable>
          <div style="margin-left: 5px">
            <el-button type="text" @click="handleAddColumn">添加列</el-button>
          </div>
        </Item>
        <Item title="配置设置">
          <el-form-item label="栅格间隔">
            <el-input
              placeholder="请输入数字"
              size="mini"
              style="width: 120px"
              type="number"
              v-model.number="information.options.gutter"
            ></el-input>
          </el-form-item>
        </Item>
      </el-row>
    </el-form>
  </control>
</template>

<script>
import { mapGetters } from 'vuex'
import Draggable from 'vuedraggable'
import control from '@/components/control-panel.vue'
import Item from './components/Item.vue'
export default {
  components: {
    Draggable,
    control,
    Item
  },
  props: ['information'],
  computed: {
    ...mapGetters(['componentsData'])
  },
  data() {
    return {}
  },
  methods: {
    handleAddColumn() {
      this.information.columns.push({
        span: '',
        list: []
      })
    },
    handleOptionsRemove(index) {
      this.information.columns.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.drag-item {
  width: 24px;
  height: 24px;
  margin-right: 5px;
  cursor: move;
}
li {
  display: flex;
  align-items: center;
  padding: 5px;
}
.selectClass {
  position: relative;
  &::after {
    width: 100%;
    height: 100%;
    display: block;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px dashed #66b1ff;
  }
}

:deep(.el-form-item__label) {
  color: #8c8c8c;
  opacity: 0.65;
}
</style>
