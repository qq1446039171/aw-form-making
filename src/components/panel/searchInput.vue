<template>
  <div
    class="widget-content"
    :style="[
      {
        backgroundColor: information.data.backgroundColor
      }
    ]"
  >
    <div
      :style="[
        {
          marginTop: information.data.topBottomPx + 'px'
        },
        {
          marginBottom: information.data.topBottomPx + 'px'
        },
        {
          marginLeft: information.data.leftRightPx + 'px'
        },
        {
          marginRight: information.data.leftRightPx + 'px'
        }
      ]"
    >
      <div style="position: relative; display: inline-block">
        <input
          type="text"
          class="diy-input"
          :value="information.data.tipsWord"
          :style="[
            {
              backgroundColor: information.data.inputBackgroundColor
            },
            { color: information.data.wordColor },
            {
              borderRadius:
                information.data.inputStyleRadio == '0'
                  ? '0px'
                  : information.data.inputStyleRadio == '1'
                  ? '5px'
                  : '15px'
            },
            {
              textAlign:
                information.data.wordAlignRadio == '0'
                  ? 'left'
                  : information.data.wordAlignRadio == '1'
                  ? 'center'
                  : 'right'
            }
          ]"
        />
        <i
          class="el-icon-search el-input__icon diy-input-icon"
          :style="[{ color: information.data.iconColor }]"
          slot="suffix"
        >
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectInput',
  components: {},
  props: {
    // 获取传递过来的数据
    information: { Object, default: {} }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.widget-content {
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: space-around;
  background-color: #f3f3f3;
  div {
    width: 100%;
    .input {
      border-radius: 0px;
    }
  }
}

.diy-input {
  font-size: 14px;
  display: inline-block;
  -webkit-appearance: none;
  background-color: #fff;
  color: #c0c4cf;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  display: inline-block;
  height: 32px;
  line-height: 32px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.diy-input-icon {
  position: absolute;
  right: 10px;
  top: -3px;
  width: 14px;
  height: 14px;
  z-index: 9999;
}
</style>
