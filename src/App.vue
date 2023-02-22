<template>
  <div class="app">
    <!-- 左边部分 -->
    <div class="left-area" :style="scrollHeight">
      <Tool />
    </div>
    <!-- 中间部分 -->
    <div class="content-area" :style="scrollHeight">
      <div class="layout-header">
        <el-button type="primary" size="small" icon="el-icon-delete" @click="clear">清空</el-button>
        <el-button type="primary" size="small" icon="el-icon-view" @click="showDialogPreview">预览</el-button>
        <el-button type="primary" size="small" icon="el-icon-tickets" @click="showDialogJson">生成JSON</el-button>
        <el-button type="primary" size="small" icon="el-icon-tickets" @click="showDialogCode">生成代码</el-button>
      </div>
      <!-- 循环显示页面面板 -->
      <div class="layout">
        <Content />
      </div>
    </div>
    <!-- 右边部分 -->
    <div class="right-area" :style="scrollHeight">
      <el-tabs v-model="activeName" type="border-card" stretch>
        <el-tab-pane label="字段属性" name="list">
          <Edit />
        </el-tab-pane>
        <el-tab-pane label="表单属性" name="config">
          <Control title="表单配置">
            <el-form ref="formValidate" label-width="90px" label-position="left" size="mini">
              <el-row>
                <Item title="配置设置">
                  <el-form-item label="标签对齐方式">
                    <el-select
                      v-model="componentsData.config.labelPosition"
                      size="small"
                      placeholder="请选择"
                      style="width: 236px"
                    >
                      <el-option
                        v-for="item in positionOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="标签宽度">
                    <el-input v-model="componentsData.config.labelWidth" placeholder="" size="small" />
                  </el-form-item>
                  <el-form-item label="组件尺寸">
                    <el-select
                      v-model="componentsData.config.size"
                      size="small"
                      placeholder="请选择"
                      style="width: 236px"
                    >
                      <el-option v-for="item in sizeOptions" :key="item" :label="item" :value="item"> </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="footer对齐方式">
                    <el-select
                      v-model="componentsData.config.footer"
                      size="small"
                      placeholder="请选择"
                      style="width: 236px"
                    >
                      <el-option
                        v-for="item in footerPositionOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </Item>
              </el-row>
            </el-form>
          </Control>
        </el-tab-pane>
      </el-tabs>
    </div>

    <DialogJson ref="refDialogJson" />
    <DialogPreview ref="refDialogPreview" />
    <DialogCode ref="refDialogCode" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Tool from '@/components/toolbar/index'
import Content from '@/components/panel/index'
import Control from '@/components/control-panel.vue'
import Item from '@/components/edit/components/Item.vue'
import Edit from '@/components/edit/index'
import DialogJson from '@/components/Dialog/dialog-json.vue'
import DialogPreview from '@/components/Dialog/dialog-preview.vue'
import DialogCode from '@/components/Dialog/dialog-code.vue'
import generateCode from '@/utils/generateCode'
export default {
  name: 'App',
  components: { Tool, Content, Edit, DialogJson, DialogPreview, DialogCode, Control, Item },

  data() {
    return {
      fullHeight: document.documentElement.clientHeight,
      activeName: 'list',
      sizeOptions: ['medium', 'small', 'mini'],
      positionOptions: [
        {
          label: '右对齐',
          value: 'right'
        },
        {
          label: '左对齐',
          value: 'left'
        },
        {
          label: '顶部对齐',
          value: 'top'
        }
      ],
      footerPositionOptions: [
        {
          label: '左对齐',
          value: 'left'
        },
        {
          label: '居中对齐',
          value: 'center'
        },
        {
          label: '右对齐',
          value: 'right'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['componentsData']),
    scrollHeight() {
      return {
        height: parseInt(this.fullHeight) + 'px'
      }
    }
  },
  methods: {
    ...mapMutations(['clearComponentsData']),
    clear() {
      this.clearComponentsData()
    },
    showDialogJson() {
      let data = JSON.parse(JSON.stringify(this.componentsData))
      this.$refs.refDialogJson.show(data)
    },
    showDialogPreview() {
      // let data = generateCode(JSON.stringify(this.componentsData))
      this.$refs.refDialogPreview.show(this.componentsData)
    },
    showDialogCode() {
      let data = generateCode(JSON.stringify(this.componentsData))
      this.$refs.refDialogCode.show(data)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './App.scss';
.right-area {
  :deep(.el-form-item__label) {
    color: #8c8c8c;
    opacity: 0.65;
  }
}

.right-area :deep(.el-tabs--border-card) {
  box-shadow: none;
  border: none;
}
.right-area :deep(.el-tabs__content) {
  padding: 0px;
}
.right-area :deep(.el-tabs__item) {
  height: 45px;
  line-height: 45px;
}
</style>
