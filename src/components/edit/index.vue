<template>
  <div>
    <template v-if="Object.keys(activeComponent).length">
      <component :is="EditPanel.get(activeComponent.type)" :information="activeComponent"></component>
    </template>
    <template v-else>
      <div style="text-align: center;margin-top:20px">无数据</div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EditPanel from './component-panel'
export default {
  computed: {
    ...mapGetters(['activeComponent'])
  },
  data() {
    return {
      EditPanel
    }
  }
}
</script>

<style lang="less" scoped></style>
