<template>
  <control title="搜索框">
    <el-form ref="formValidate" label-width="110px">
      <el-row>
        <el-col>
          <el-form-item label="背景颜色">
            <el-row style="display: flex; justify-content: flex-start">
              <el-color-picker
                v-model="information.data.backgroundColor"
                size="small"
                class="color-picker"
              ></el-color-picker>
              <el-button class="color-but" @click="reset('backgroundColor')" size="small">重置</el-button>
            </el-row>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="输入框背景">
            <el-row style="display: flex; justify-content: flex-start">
              <el-color-picker
                v-model="information.data.inputBackgroundColor"
                size="small"
                class="color-picker"
              ></el-color-picker>
              <el-button class="color-but" @click="reset('inputBackgroundColor')" size="small">重置</el-button>
            </el-row>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="文字颜色">
            <el-row style="display: flex; justify-content: flex-start">
              <el-color-picker v-model="information.data.wordColor" size="small" class="color-picker"></el-color-picker>
              <el-button class="color-but" @click="reset('wordColor')" size="small">重置</el-button>
            </el-row>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="图标颜色">
            <el-row style="display: flex; justify-content: flex-start">
              <el-color-picker v-model="information.data.iconColor" size="small" class="color-picker"></el-color-picker>
              <el-button class="color-but" @click="reset('iconColor')" size="small">重置</el-button>
            </el-row>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="提示文字">
            <el-input v-model="information.data.tipsWord" placeholder="请输入关键字进行搜索" size="small" />
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="上下边距">
            <div class="pxTxt">{{ information.data.topBottomPx }}px</div>
            <div>
              <el-slider style="margin-top: -3px; width: 80%" v-model="information.data.topBottomPx"></el-slider>
            </div>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="左右边距">
            <div class="pxTxt">{{ information.data.leftRightPx }}px</div>
            <div>
              <el-slider style="margin-top: -3px; width: 80%" v-model="information.data.leftRightPx"></el-slider>
            </div>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="搜索框样式">
            <el-radio-group v-model="information.data.inputStyleRadio">
              <el-radio label="0">方形</el-radio>
              <el-radio label="1">圆角</el-radio>
              <el-radio label="2">圆弧</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="文字对齐">
            <el-radio-group v-model="information.data.wordAlignRadio">
              <el-radio label="0">居左</el-radio>
              <el-radio label="1">居中</el-radio>
              <el-radio label="2">居右</el-radio>
            </el-radio-group>
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
