<template>
  <el-form-item :label="data.name" :prop="data.model" :label-width="labelWidth">
    <template v-if="data.type == 'input'">
      <el-input
        v-if="
          data.options.dataType == 'number' || data.options.dataType == 'integer' || data.options.dataType == 'float'
        "
        type="number"
        v-model.number="data.defaultValue"
        :placeholder="data.options.placeholder"
        :style="{ width: data.options.width }"
        :disabled="data.options.disabled"
        :clearable="data.options.clearable"
      ></el-input>
      <el-input
        v-else
        type="text"
        v-model="data.defaultValue"
        :disabled="data.options.disabled"
        :placeholder="data.options.placeholder"
        :style="{ width: data.options.width }"
        :maxlength="data.options.maxlength"
        :show-word-limit="data.options.showWordLimit"
        :clearable="data.options.clearable"
      ></el-input>
    </template>
    <template v-if="data.type == 'textarea'">
      <el-input
        type="textarea"
        :rows="5"
        v-model="data.defaultValue"
        :autosize="data.options.autosize"
        :disabled="data.options.disabled"
        :placeholder="data.options.placeholder"
        :style="{ width: data.options.width }"
        :maxlength="data.options.maxlength"
        :show-word-limit="data.options.showWordLimit"
      ></el-input>
    </template>
    <template v-if="data.type == 'radio'">
      <el-radio-group
        v-model="data.defaultValue"
        :style="{ width: data.options.width }"
        :disabled="data.options.disabled"
      >
        <el-radio
          :style="{ display: data.options.inline ? 'inline-block' : 'block' }"
          :label="item.value"
          v-for="(item, index) in data.options.remote ? data.options.remoteOptions : data.options.options"
          :key="index"
        >
          {{ item.label }}
        </el-radio>
      </el-radio-group>
    </template>
    <template v-if="data.type == 'checkbox'">
      <el-checkbox-group
        v-model="data.defaultValue"
        :style="{ width: data.options.width }"
        :disabled="data.options.disabled"
      >
        <el-checkbox
          :style="{ display: data.options.inline ? 'inline-block' : 'block' }"
          :label="item.value"
          v-for="(item, index) in data.options.remote ? data.options.remoteOptions : data.options.options"
          :key="index"
        >
          {{ item.label }}
        </el-checkbox>
      </el-checkbox-group>
    </template>
    <template v-if="data.type == 'select'">
      <el-select
        v-model="data.defaultValue"
        :disabled="data.options.disabled"
        :multiple="data.options.multiple"
        :clearable="data.options.clearable"
        :placeholder="data.options.placeholder"
        :style="{ width: data.options.width }"
        :filterable="data.options.filterable"
      >
        <el-option
          v-for="item in data.options.remote ? data.options.remoteOptions : data.options.options"
          :key="item.value"
          :value="item.value"
          :label="item.label"
        ></el-option>
      </el-select>
    </template>
    <template v-if="data.type == 'cascader'">
      <el-cascader
        v-model="data.defaultValue"
        :disabled="data.options.disabled"
        :clearable="data.options.clearable"
        :placeholder="data.options.placeholder"
        :style="{ width: data.options.width }"
        :props="data.options.protoProps"
        :options="data.options.remoteOptions"
      >
      </el-cascader>
    </template>
    <template v-if="data.type == 'switch'">
      <el-switch v-model="data.defaultValue" :disabled="data.options.disabled"> </el-switch>
    </template>
    <template v-if="data.type == 'text'">
      <span>{{ data.defaultValue }}</span>
    </template>
    <template v-if="data.type == 'slider'">
      <el-slider
        v-model="data.defaultValue"
        :min="data.options.min"
        :max="data.options.max"
        :disabled="data.options.disabled"
        :step="data.options.step"
        :show-input="data.options.showInput"
        :range="data.options.range"
        :style="{ width: data.options.width }"
      ></el-slider>
    </template>
    <template v-if="data.type == 'time'">
      <el-time-picker
        v-model="data.defaultValue"
        :is-range="data.options.isRange"
        :placeholder="data.options.placeholder"
        :start-placeholder="data.options.startPlaceholder"
        :end-placeholder="data.options.endPlaceholder"
        :readonly="data.options.readonly"
        :disabled="data.options.disabled"
        :editable="data.options.editable"
        :clearable="data.options.clearable"
        :arrowControl="data.options.arrowControl"
        :value-format="data.options.format"
        :style="{ width: data.options.width }"
      >
      </el-time-picker>
    </template>
    <template v-if="data.type == 'date'">
      <el-date-picker
        v-model="data.defaultValue"
        :type="data.options.type"
        :placeholder="data.options.placeholder"
        :start-placeholder="data.options.startPlaceholder"
        :end-placeholder="data.options.endPlaceholder"
        :readonly="data.options.readonly"
        :disabled="data.options.disabled"
        :editable="data.options.editable"
        :clearable="data.options.clearable"
        :value-format="data.options.timestamp ? 'timestamp' : data.options.format"
        :format="data.options.format"
        :style="{ width: data.options.width }"
      >
      </el-date-picker>
    </template>
  </el-form-item>
</template>

<script>
export default {
  props: ['data', 'labelWidth'],
  computed: {},

  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
