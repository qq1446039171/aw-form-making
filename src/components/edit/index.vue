<template>
  <div>
    <template v-if="Object.keys(activeComponent).length">
      <component :is="EditPanel.get(activeComponent.type)" :information="activeComponent"></component>
    </template>
    <template v-else> 无数据 </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EditPanel from './componentPanel'
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
