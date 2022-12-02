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
          <el-form-item label="默认值">
            <el-input v-model="information.options.defaultValue" placeholder="" size="small" />
          </el-form-item>
          <el-form-item label="宽度">
            <el-input v-model="information.options.width" placeholder="" size="small" />
          </el-form-item>
          <el-form-item label="占位内容">
            <el-input v-model="information.options.placeholder" placeholder="" size="small" />
          </el-form-item>
          <el-form-item label="最小行数">
            <el-input v-model.number="information.options.autosize.minRows" type="number" placeholder="" size="small" />
          </el-form-item>
          <el-form-item label="最大行数">
            <el-input v-model.number="information.options.autosize.maxRows" type="number" placeholder="" size="small" />
          </el-form-item>
          <el-form-item label="是否禁用">
            <el-switch v-model="information.options.disabled" active-color="#13ce66" inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
          <el-form-item label="是否显示输入字数统计">
            <el-switch v-model="information.options.showWordLimit" active-color="#13ce66" inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
          <el-form-item label="最大输入长度">
            <el-input v-model="information.options.maxlength" type="number" placeholder="" size="small" />
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
        // pattern: null,
        // range: null,
        // length: null
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
