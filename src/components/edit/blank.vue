<template>
  <control title="辅助空白">
    <el-form ref="formValidate" label-width="110px">
      <el-row>
        <el-col>
          <el-form-item label="背景颜色">
            <el-row style="display: flex; justify-content: flex-start">
              <el-color-picker
                v-model="information.facade.backgroundColor"
                size="small"
                class="color-picker"
              ></el-color-picker>
              <el-button class="color-but" @click="reset('backgroundColor')" size="small">重置</el-button>
            </el-row>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="空白高度">
            <div class="pxTxt">{{ information.facade.height }}px</div>
            <div>
              <el-slider style="margin-top: -3px; width: 80%" v-model="information.facade.height" :min="10"></el-slider>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </control>
</template>

<script>
import control from '@/components/control-panel.vue'
export default {
  components: {
    control
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
</style>
