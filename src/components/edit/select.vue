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
        <Item title="配置设置">
          <el-form-item label="默认值">
            <el-select
              v-model="information.options.defaultValue"
              multiple
              placeholder="请选择"
              size="small"
              v-if="information.options.multiple"
              style="width: 286px"
            >
              <el-option
                v-for="item in information.options.remote
                  ? information.options.remoteOptions
                  : information.options.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-input v-model="information.options.defaultValue" placeholder="" size="small" v-else />
          </el-form-item>
          <el-form-item label="宽度">
            <el-input v-model="information.options.width" placeholder="" size="small" />
          </el-form-item>
          <el-form-item label="label宽度">
            <el-input v-model="information.labelWidth" placeholder="" size="small" />
          </el-form-item>
          <el-form-item label="占位内容">
            <el-input v-model="information.options.placeholder" placeholder="" size="small" />
          </el-form-item>
          <el-form-item label="是否可清空">
            <el-switch v-model="information.options.clearable" active-color="#13ce66" inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
          <el-form-item label="是否可多选">
            <el-switch v-model="information.options.multiple" active-color="#13ce66" inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
          <el-form-item label="是否可搜索">
            <el-switch v-model="information.options.filterable" active-color="#13ce66" inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
          <el-form-item label="是否禁用">
            <el-switch v-model="information.options.disabled" active-color="#13ce66" inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
        </Item>
        <Item title="选项内容">
          <el-form-item label="数据来源">
            <el-radio-group v-model="information.options.remote">
              <el-radio :label="false" :value="false">静态数据</el-radio>
              <el-radio :label="true" :value="true">远端数据</el-radio>
            </el-radio-group>
          </el-form-item>
          <template v-if="information.options.remote">
            <el-form-item label="远端方法">
              <el-input v-model="information.options.remoteFunc" placeholder="" size="small" />
            </el-form-item>
            <el-form-item label="值">
              <el-input v-model="information.options.props.value" placeholder="" size="small" />
            </el-form-item>
            <el-form-item label="标签">
              <el-input v-model="information.options.props.label" placeholder="" size="small" />
            </el-form-item>
          </template>
          <el-form-item label="数据内容" v-else>
            <draggable
              tag="ul"
              :list="information.options.options"
              ghostClass="selectClass"
              chosenClass="selectClass"
              :group="{ name: 'options' }"
              handle=".drag-item"
            >
              <li v-for="(item, index) in information.options.options" :key="index" class="drag-items">
                <img class="drag-item" src="http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/separate-icon.png" />

                <el-input placeholder="请输入Label" size="mini" style="width: 120px" v-model="item.label"></el-input>
                <el-input
                  placeholder="请输入Value"
                  size="mini"
                  style="width: 80px; margin-left: 10px"
                  v-model="item.value"
                ></el-input>

                <el-button
                  @click="handleOptionsRemove(index)"
                  circle
                  plain
                  type="danger"
                  size="mini"
                  icon="el-icon-minus"
                  style="padding: 4px; margin-left: 8px"
                ></el-button>
              </li>
            </draggable>
            <div style="margin-left: 5px">
              <el-button type="text" @click="handleAddColumn">添加列</el-button>
            </div>
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
import Draggable from 'vuedraggable'
import control from '@/components/control-panel.vue'
import Item from './components/Item.vue'
export default {
  components: {
    control,
    Item,
    Draggable
  },
  watch: {
    'information.options.required': {
      handler(newVal, oldVal) {
        this.validateRequired(newVal)
      },
      immediate: true
    },
    'information.options.remote': {
      handler(newVal, oldVal) {
        this.validateRemote(newVal)
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
    validateRemote(val) {
      if (val) {
        // let remoteOptions = [
        //   { label: 'remote1', value: '1' },
        //   { label: 'remote2', value: '2' },
        //   { label: 'remote3', value: '3' }
        // ]
        const key = Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
        this.$set(this.information.options, 'remoteFunc', 'func_' + key)
        this.$set(this.information.options, 'remoteOptions', [])
        this.$set(this.information.options, 'props', { value: 'value', label: 'label' })
      } else {
        delete this.information.options.remoteFunc
        //  = null
      }
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
    },
    handleOptionsRemove(index) {
      this.information.options.options.splice(index, 1)
    },
    handleAddColumn() {
      this.information.options.options.push({
        value: '新选项',
        label: '新选项'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.drag-items {
  display: flex;
  align-items: center;
  padding: 5px;

  .drag-item {
    width: 24px;
    height: 24px;
    margin-right: 5px;
    cursor: move;
  }
}
:deep(.el-form-item__label) {
  color: #8c8c8c;
  opacity: 0.65;
}
</style>
