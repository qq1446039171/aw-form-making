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
          <el-form-item label="是否可清空">
            <el-switch v-model="information.options.clearable" active-color="#13ce66" inactive-color="#ff4949">
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
          <el-form-item label="最大输入长度">
            <el-input v-model="information.options.maxlength" type="number" placeholder="" size="small" />
          </el-form-item>
        </Item>
        <Item title="效验规则">
          <el-form-item label="是否必填">
            <el-switch
              v-model="information.options.required"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </el-form-item>
          <el-form-item label="输入类型">
            <el-select v-model="information.options.dataType" placeholder="请选择">
              <el-option key="string" label="字符串" value="string"> </el-option>
              <el-option key="number" label="数字" value="number"> </el-option>
              <el-option key="boolean" label="布尔型" value="boolean"> </el-option>
              <el-option key="integer" label="整数" value="integer"> </el-option>
            </el-select>
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
  watch: {
    'information.options.required': function (val) {
      console.log(val)
      this.validateRequired(val)
    },
    'information.options.dataType': function (val) {
      this.validateDataType(val)
    }
  },
  props: ['information'],
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
    validateDataType(val) {
      if (val) {
        this.validator.type = { type: val, message: this.information.name + '格式不正确' }
      } else {
        this.validator.type = null
      }
      this.generateRule()
    },
    generateRule() {
      this.information.rules = []
      Object.keys(this.validator).forEach((key) => {
        if (this.validator[key]) {
          this.information.rules.push(this.validator[key])
          console.log(this.$store.state.activePage.componentsData.list[0].rules);
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
