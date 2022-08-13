<template>
  <div
    class="widget-content"
    :style="[
      { color: information.data.titleColor },
      {
        backgroundColor: information.data.backgroundColor
      }
    ]"
  >
    <div class="notice-icon"><img src="http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/notice-img.png" /></div>
    <div
      type="text"
      class="notice-title"
      :value="information.data.title"
      :style="[{ color: information.data.titleColor }]"
    >
      {{ information.data.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'notice',
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

  .notice-icon {
    float: left;
    width: 20px;
    height: 20px;
    margin: 10px 12px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  div {
    width: 100%;
  }
}

.notice-title {
  line-height: 40px;
  overflow: hidden;
  height: 40px;
  width: calc(100% - 44px);
}
</style>
