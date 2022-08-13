<template>
  <control title="搜索框">
    <el-form ref="formValidate" label-width="90px" label-position="left" size="mini">
      <el-row>
        <Item title="文字设置">
          <el-form-item label="提示文字">
            <el-input
              v-model="information.data.title"
              placeholder="请输入文字内容"
              size="small"
              maxlength="10"
              show-word-limit
            />
          </el-form-item>
        </Item>
        <Item title="颜色设置">
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

          <el-form-item label="文字颜色">
            <el-row style="display: flex; justify-content: flex-start">
              <el-color-picker
                v-model="information.data.titleColor"
                size="small"
                class="color-picker"
              ></el-color-picker>
              <el-input
                placeholder="请输入内容"
                size="small"
                style="width: 100px; margin: 0 10px"
                v-model="information.data.titleColor"
                :disabled="true"
              >
              </el-input>
              <el-button class="color-but" type="text" @click="reset('titleColor')" size="mini">重置</el-button>
            </el-row>
          </el-form-item>
        </Item>
        <Item title="速度设置">
          <el-form-item label="轮播速度">
            <el-radio-group v-model="information.data.speed">
              <el-radio :label="80">标准速</el-radio>
              <el-radio :label="100">中速</el-radio>
              <el-radio :label="60">低速</el-radio>
            </el-radio-group>
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
        this.information.data.backgroundColor = '#fff5e1'
      } else if (type == 'titleColor') {
        this.information.data.titleColor = '#f58e20'
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
