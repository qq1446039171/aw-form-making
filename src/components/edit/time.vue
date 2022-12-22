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
        <Item title="格式">
          <el-form-item label="时间格式">
            <el-input v-model="information.options.format" placeholder="" size="small" />
          </el-form-item>
        </Item>
        <Item title="配置设置">
          <el-form-item label="默认值">
            <el-time-picker
              v-model="information.options.defaultValue"
              :format="information.options.format"
              :value-format="information.options.format"
              :is-range="information.options.isRange"
              size="small"
              clearable
              style="width: 236px"
            >
            </el-time-picker>
          </el-form-item>
          <el-form-item label="宽度">
            <el-input v-model="information.options.width" placeholder="" size="small" />
          </el-form-item>
          <el-form-item label="label宽度">
            <el-input v-model="information.labelWidth" placeholder="" size="small" />
          </el-form-item>
          <el-form-item label="是否为范围选择">
            <el-switch v-model="information.options.isRange" size="small"> </el-switch>
          </el-form-item>
          <template v-if="information.options.isRange">
            <el-form-item label="开始时间占位内容">
              <el-input v-model="information.options.startPlaceholder" placeholder="" size="small" />
            </el-form-item>
            <el-form-item label="结束时间占位内容">
              <el-input v-model="information.options.endPlaceholder" placeholder="" size="small" />
            </el-form-item>
          </template>
          <template v-else>
            <el-form-item label="占位内容">
              <el-input v-model="information.options.placeholder" placeholder="" size="small" />
            </el-form-item>
          </template>

          <el-form-item label="是否只读">
            <el-switch v-model="information.options.readonly" size="small"> </el-switch>
          </el-form-item>
          <el-form-item label="是否可编辑">
            <el-switch v-model="information.options.editable" size="small"> </el-switch>
          </el-form-item>
          <el-form-item label="是否可清空">
            <el-switch v-model="information.options.clearable" size="small"> </el-switch>
          </el-form-item>
          <el-form-item label="是否使用箭头进行时间选择">
            <el-switch v-model="information.options.arrowControl" size="small"> </el-switch>
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
    },
    'information.options.isRange': {
      handler(newVal, oldVal) {
        this.validateRange(newVal)
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
    validateRange(val) {
      if (val) {
        this.information.options.defaultValue = [new Date(2016, 9, 10, 0, 0), new Date(2016, 9, 10, 23, 59)]
      } else {
        this.information.options.defaultValue = ''
      }
    },
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
