<template>
  <control title="Input 输入框">
    <el-form ref="formValidate" label-width="90px" label-position="left" size="mini">
      <el-row>
        <Item title="关键字段">
          <el-form-item label="字段标识">
            <el-input v-model="information.model" placeholder="" size="small" />
          </el-form-item>
          <el-form-item label="标题">
            <el-input v-model="information.name" placeholder="" size="small" />
          </el-form-item>
        </Item>
        <Item title="配置设置">
          <el-form-item label="宽度">
            <el-input v-model="information.options.width" placeholder="" size="small" />
          </el-form-item>
          <el-form-item label="占位内容">
            <el-input v-model="information.options.placeholder" placeholder="" size="small" />
          </el-form-item>
          <el-form-item label="是否必填">
            <el-switch v-model="information.options.required" active-color="#13ce66" inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
          <el-form-item label="是否禁用">
            <el-switch v-model="information.options.disabled" active-color="#13ce66" inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
          <el-form-item label="是否显示输入字数统计">
            <el-switch v-model="information.options.showWordLimit" active-color="#13ce66" inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
        </Item>
        <!-- <Item title="效验规则">
          <el-form-item label="文字对齐">
            <el-radio-group v-model="information.data.wordAlignRadio">
              <el-radio label="left">居左</el-radio>
              <el-radio label="center">居中</el-radio>
              <el-radio label="right">居右</el-radio>
            </el-radio-group>
          </el-form-item>
        </Item> -->
        <!-- <Item title="颜色设置">
          <el-form-item label="背景颜色" class="label">
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
          <el-form-item label="输入框背景">
            <el-row style="display: flex; justify-content: flex-start">
              <el-color-picker
                v-model="information.data.inputBackgroundColor"
                size="small"
                class="color-picker"
              ></el-color-picker>
              <el-input
                placeholder="请输入内容"
                size="small"
                style="width: 100px; margin: 0 10px"
                v-model="information.data.inputBackgroundColor"
                :disabled="true"
              >
              </el-input>
              <el-button class="color-but" type="text" @click="reset('inputBackgroundColor')" size="mini"
                >重置</el-button
              >
            </el-row>
          </el-form-item>
          <el-form-item label="文字颜色">
            <el-row style="display: flex; justify-content: flex-start">
              <el-color-picker v-model="information.data.wordColor" size="small" class="color-picker"></el-color-picker>
              <el-input
                placeholder="请输入内容"
                size="small"
                style="width: 100px; margin: 0 10px"
                v-model="information.data.wordColor"
                :disabled="true"
              >
              </el-input>
              <el-button class="color-but" type="text" @click="reset('wordColor')" size="mini">重置</el-button>
            </el-row>
          </el-form-item>

          <el-form-item label="图标颜色">
            <el-row style="display: flex; justify-content: flex-start">
              <el-color-picker v-model="information.data.iconColor" size="small" class="color-picker"></el-color-picker>
              <el-input
                placeholder="请输入内容"
                size="small"
                style="width: 100px; margin: 0 10px"
                v-model="information.data.iconColor"
                :disabled="true"
              >
              </el-input>
              <el-button class="color-but" type="text" @click="reset('iconColor')" size="mini">重置</el-button>
            </el-row>
          </el-form-item>
        </Item>

        <Item title="边距设置">
          <el-form-item label="上下边距">
            <div class="pxTxt">{{ information.data.topBottomPx }}px</div>
            <div>
              <el-slider style="margin-top: -3px; width: 80%" v-model="information.data.topBottomPx"></el-slider>
            </div>
          </el-form-item>

          <el-form-item label="左右边距">
            <div class="pxTxt">{{ information.data.leftRightPx }}px</div>
            <div>
              <el-slider style="margin-top: -3px; width: 80%" v-model="information.data.leftRightPx"></el-slider>
            </div>
          </el-form-item>
        </Item> -->
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
  methods: {}
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
.control-item-title {
  line-height: 35px;
  margin-bottom: 5px;
  font-weight: 400;
  color: #333;
  opacity: 0.85;
  font-size: 14px;
}

::v-deep .el-form-item__label {
  color: #8c8c8c;
  opacity: 0.65;
}
</style>
