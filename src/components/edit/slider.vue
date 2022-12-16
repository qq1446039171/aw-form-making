<template>
  <control :title="$toUpperCase(information.type) + ' ' + information.name">
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
        <Item title="内容设置">
          <el-form-item label="默认值">
            <el-input-number
              v-model="information.options.defaultValue"
              size="small"
              :min="information.options.min"
              :max="information.options.max"
              label="描述文字"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="最小值">
            <el-input v-model="information.options.min" placeholder="" size="small" />
          </el-form-item>
          <el-form-item label="最大值">
            <el-input v-model="information.options.max" placeholder="" size="small" />
          </el-form-item>
        </Item>
        <Item title="配置设置">
          <el-form-item label="宽度">
            <el-input v-model="information.options.width" placeholder="" size="small" />
          </el-form-item>
          <el-form-item label="label宽度">
            <el-input v-model="information.labelWidth" placeholder="" size="small" />
          </el-form-item>
          <el-form-item label="步长">
            <el-input v-model="information.options.step" placeholder="" size="small" />
          </el-form-item>
          <el-form-item label="是否为范围选择">
            <el-switch v-model="information.options.range" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
          </el-form-item>
          <el-form-item label="是否显示输入框">
            <el-switch v-model="information.options.showInput" active-color="#13ce66" inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
          <el-form-item label="是否禁用">
            <el-switch v-model="information.options.disabled" active-color="#13ce66" inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
        </Item>
        <Item title="效验规则">
          <el-form-item label="是否必填">
            <el-switch v-model="information.options.required" active-color="#13ce66" inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
        </Item>
      </el-row>
    </el-form>
  </control>
</template>

<script>
import { mapGetters } from 'vuex'
import control from '@/components/control-panel.vue'
import Item from './components/Item.vue'
export default {
  components: {
    control,
    Item
  },
  watch: {
    'information.options.required': {
      handler(newVal, oldVal) {
        this.validateRequired(newVal)
      },
      immediate: true
    }
  },
  props: ['information'],
  computed: {
    ...mapGetters(['componentsData', 'activeComponent'])
  },
  data() {
    return {
      validator: {
        type: null,
        required: null
      }
    }
  },
  methods: {
    validateRequired(val) {
      if (val) {
        this.validator.required = {
          required: true,
          message: `${this.information.name}必须填写`
        }
      } else {
        this.validator.required = null
      }
      this.$nextTick(() => {
        this.generateRule()
      })
    },
    generateRule() {
      this.information.rules = []
      Object.keys(this.validator).forEach((key) => {
        if (this.validator[key]) {
          this.information.rules.push(this.validator[key])
          // this.$set(this.information.rules, this.information.rules.length + 1, this.validator[key])
          console.log(this.componentsData.list)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
:deep(.el-form-item__label) {
  color: #8c8c8c;
  opacity: 0.65;
}
</style>
