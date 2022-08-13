<template>
  <control title="辅助空白">
    <el-form ref="formValidate" label-width="90px" label-position="left" size="mini">
      <el-row>
        <Item title="颜色设置">
          <el-form-item label="填充颜色">
            <el-row style="display: flex; justify-content: flex-start">
              <el-color-picker
                v-model="information.data.backgroundColor"
                size="small"
                class="color-picker"
              ></el-color-picker>
              <el-input
                placeholder="请输入内容"
                size="small"
                style="width: 100px; margin: 0 10px"
                v-model="information.data.backgroundColor"
                :disabled="true"
              >
              </el-input>
              <el-button class="color-but" type="text" @click="reset('backgroundColor')" size="mini">重置</el-button>
            </el-row>
          </el-form-item>
        </Item>

        <Item title="高度设置">
          <el-form-item label="空白高度">
            <div class="pxTxt">{{ information.data.height }}px</div>
            <div>
              <el-slider style="margin-top: -3px; width: 80%" v-model="information.data.height" :min="10"></el-slider>
            </div>
          </el-form-item>
        </Item>
      </el-row>
    </el-form>
  </control>
</template>

<script>
import control from '@/components/control-panel.vue'
import Item from './components/Item.vue'
export default {
  components: {
    control,
    Item
  },
  props: ['information'],
  methods: {
    reset(type) {
      if (type == 'backgroundColor') {
        this.information.data.backgroundColor = '#f1f1f2'
      } else if (type == 'inputBackgroundColor') {
        this.information.data.inputBackgroundColor = '#FFFFFF'
      } else if (type == 'wordColor') {
        this.information.data.wordColor = '#999999'
      } else if (type == 'iconColor') {
        this.information.data.iconColor = '#b4b4b4'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pxTxt {
  float: right;
  width: 20%;
  margin-right: -8px;
  // 文字超出省略显示
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

::v-deep .el-form-item__label {
  color: #8c8c8c;
  opacity: 0.65;
}
</style>
